import React from 'react'
import { useFormik } from 'formik';

const Studresult = () => {
    const formik = useFormik({
        initialValues: {
          name: '',
          email: '',
          message: '',
          password:'',
          checkbox:''
        }, 
        onSubmit: (values , {resetForm}) => {
          // Handle form submission logic here
          console.log(values);
          resetForm();                
        },
        validate: (values) => {
          const errors = {};
          // Add validation rules here if needed
          return errors;
        }
      });

  return (
    <div>
     
    
      <h1>My Form</h1>
      <table>
        <tbody>
          <tr>
            <td><label htmlFor="name">Name:</label></td>
            <td><input
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            /></td>
          </tr>
          <tr>
            <td><label htmlFor="email">Email:</label></td>
            <td><input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            /></td>
          </tr>
          <tr>
            <td><label htmlFor="message">Message:</label></td>
            <td><textarea
              id="message"
              name="message"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
            /></td>
          </tr>
          <tr>
            <td><label htmlFor="name">password:</label></td>
            <td><input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            /></td>
          </tr>
        </tbody>
      </table>
      <button type="button" onClick={formik.handleSubmit}>Submit</button>
    
   
    </div>
  )
}

export default Studresult
