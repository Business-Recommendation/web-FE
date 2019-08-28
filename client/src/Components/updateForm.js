import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import { FormComponents } from './FormComponents';

import './style.css'

const UpdateForm = ({ errors, touched, values, status }) => {
  const [business, setBusiness] = useState([]);
  

  const states = ['AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY']

  useEffect(() => {
    if (status) {
      setBusiness([...business, status]);
    }
  }, [status]);

  return (
    <div className="business-form">
      <h1>Business Form</h1>
      <Form>
        <label> 
          Business Name:
        <Field type="text" name="companies" placeholder="Business Name" />
        </label>
        {touched.companies && errors.companies && (
          <p className="error">{errors.companies}</p>
        )}
<FormComponents>
        <Field type="text" name="city" placeholder="City" className="city"/>
        {touched.city && errors.city && <p className="error">{errors.city}</p>}

        <Field component="select" className="state-select" name="state">
          <option>State</option>
          {
            states.map(state => {
              return <option value={state}>{state}</option>
            })
          }
        </Field>
</FormComponents>
        <Field type="text" name="address" placeholder="Yelp Link" />
        {touched.address && errors.address && <p className="error">{errors.address}</p>}

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

  mapPropsToValues({ companies, address, city, zipcode, state }) {
    return {
      state: state || "",
      companies: companies || "",
      yelp: address || "",
      city: city || ""
    };
  },

  validationSchema: Yup.object().shape({
    companies: Yup.string().required("You silly!!!"),
    yelp: Yup.string().required(),
    city: Yup.string()
  }),

  handleSubmit(values, { setStatus }) {
    console.log(values)
    axios
      // values is our object with all our data on it.
      .post("https://reqres.in/api/users/", values)
      .then(res => {
        setStatus(res.data);
      })
      .catch(err => console.log(err.response));
  }
})(UpdateForm);
export default FormikUpdateForm;


