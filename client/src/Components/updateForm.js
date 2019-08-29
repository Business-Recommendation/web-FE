import React, { useState, useEffect } from "react";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import { connect } from 'react-redux'

import { putData } from '../actions'
import { FormComponents } from './FormComponents';

import './style.css'

const states = ['AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY']

const UpdateForm = ({ errors, touched, values, status }) => {
  const [business, setBusiness] = useState([]);

  useEffect(() => {
    if (status) {
      setBusiness([...business, status]);
    }
  }, [status]);

  return (
    <div className="business-form">
      <Form>
      <h1>Business Form</h1>
        <Field type="text" name="name" placeholder="Business Name" />
        {touched.name && errors.name && (
          <p className="error">{errors.name}</p>
        )}
<FormComponents>
        <Field type="text" name="city" placeholder="City" className="city"/>
        {touched.city && errors.city && <p className="error">{errors.city}</p>}

        <Field component="select" className="state-select" name="state">
          <option>State</option>
          {
            states.map((state, index) => {
              return <option value={state} key={`${state}${index}`}>{state}</option>
            })
          }
        </Field>
</FormComponents>
        <Field type="text" name="yelp_url" placeholder="Yelp Link" />
        {touched.yelp_url && errors.yelp_url && <p className="error">{errors.yelp_url}</p>}

        <button type="submit">Update Biz</button>
      </Form>

      {business.map(business => (
        <ul key={business.id}>
          <li>Companies: {business.companies}</li>
          <li>Address: {business.address}</li>
          <li>City: {business.city}</li>
          <li>state: {business.state}</li>
        </ul>
      ))}
    </div>
  );
};


const FormikUpdateForm = withFormik({

  mapPropsToValues({ name, yelp_url, city, state, history }) {
    const dataToEdit = history.location.state

    return {
      state: state || "",
      name: name || dataToEdit.name,
      yelp_url: yelp_url || dataToEdit.yelp_url,
      city: city || ""
    };
  },

  validationSchema: Yup.object().shape({
    name: Yup.string().required("You silly!!!"),
    yelp_url: Yup.string().required(),
    city: Yup.string()
  }),

  handleSubmit(values, { props, resetForm, setSubmitting }) {
    let sentValues = { yelp_url: values.yelp_url }
    let targetId = props.history.location.state.id

    props.putData(sentValues, targetId)
    resetForm()
    setSubmitting(false)
    props.history.push('/listings')
  }
})(UpdateForm);

export default connect(null, { putData })(FormikUpdateForm);


