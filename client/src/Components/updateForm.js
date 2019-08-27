import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";

const UpdateForm = ({ errors, touched, values, status }) => {
  const [business, setBusiness] = useState([]);
  console.log("this is touched", touched);
  useEffect(() => {
    if (status) {
      setBusiness([...business, status]);
    }
  }, [status]);

  return (
    <div className="business-form">
      <h1>Business Form</h1>
      <Form>
        <Field type="text" name="companies" placeholder="Business Name" />
        {touched.companies && errors.companies && (
          <p className="error">{errors.companies}</p>
        )}

        <Field type="text" name="address" placeholder="Street Address" />
        {touched.address && errors.address && <p className="error">{errors.address}</p>}

        <Field type="text" name="city" placeholder="City" />
        {touched.city && errors.city && <p className="error">{errors.city}</p>}

        <Field component="select" className="state-select" name="state">
          <option>State</option>
          <option value="ny">NY</option>
          <option value="ca">CA</option>
          <option value="fl">FL</option>
        </Field>

        <Field type="text" name="zipcode" placeholder="Zip Code" />
        {touched.zipcode && errors.zipcode && <p className="error">{errors.zipcode}</p>}

        <button type="submit">Update Biz</button>
      </Form>

      {business.map(business => (
        <ul key={business.id}>
          <li>Companies: {business.companies}</li>
          <li>Address: {business.address}</li>
          <li>City: {business.city}</li>
          <li>state: {business.state}</li>
          <li>:zipcode: {business.zipcode}</li>
        </ul>
      ))}
    </div>
  );
};


const FormikAnimalForm = withFormik({
  
  mapPropsToValues({ companies, address, city, zipcode, state }) {
    return {
      state: state || "",
      zipcode: zipcode || "",
      companies: companies || "",
      address: address || "",
      city: city || ""
    };
  },

  validationSchema: Yup.object().shape({
    species: Yup.string().required("You silly!!!"),
    size: Yup.string().required(),
    notes: Yup.string()
  }),

  handleSubmit(values, { setStatus }) {
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


