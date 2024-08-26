// import React from 'react'

// function SignupForm() {
//   return (
//     <div>
//       <h1 className='bg-green-300 p-4 text-white'>green</h1>
//     </div>
//   )
// }

// export default SignupForm

import './SignupForm.css';
import React, { useState } from 'react';

// ----------------------------------------------------------------------------------react native codiapp
// const SignupForm = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     secondName: '',
//     email: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form Data Submitted:', formData);
//     // Here you would typically send the formData to your backend
//   };

//   const handleForgotPassword = () => {
//     alert('Forgot Password clicked. This would redirect to a password recovery page.');
//     // Implement your password recovery logic here
//   };

//   return (
//     <form onSubmit={handleSubmit} className='signup-container'>
//       <div className='bg-orange-200 p-4'> 
//         <label>
//           First Name:
//           <input 
//             type="text"
//             name="firstName"
//             placeholder='First Name'
//             value={formData.firstName}
//             onChange={handleChange}
//           />
//         </label>
//       </div>
//       <div className='bg-pink-200 p-4 '>
//         <label>
//           Second Name:
//           <input
//             type="text"
//             name="secondName"
//             placeholder='Second Name'
//             value={formData.secondName}
//             onChange={handleChange}
//           />
//         </label>
//       </div>
//       <div className='bg-green-200 p-4 '>
//         <label>
//           Email:
//           <input
//             type="email"
//             name="email"
//             placeholder='Email'
//             value={formData.email}
//             onChange={handleChange}
//           />
//         </label>
//       </div>
//       <button type="button" onClick={handleForgotPassword} className='bg-blue-200 p-4 '>
//         Forgot Password
//       </button>
//       <button type="submit" className='bg-pink-400 outline-none p-4 shrink-0 rounded-lg'>Login</button>
//     </form>
//   );
// };

// export default SignupForm;


// ---------------------------------------------------------------------------------------------end codiapp


const SignupForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    secondName: '',
    email: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.firstName) formErrors.firstName = "First name is required";
    if (!formData.secondName) formErrors.secondName = "Second name is required";
    if (!formData.email) formErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) formErrors.email = "Email address is invalid";
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form is valid, submitting:', formData);
      // Here you would typically send the form data to your backend
    } else {
      console.log('Form has errors, cannot submit');
    }
  };

  const handleForgotPassword = () => {
    // Placeholder for forgot password functionality
    alert('Forgot password functionality coming soon!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name</label>
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
        {errors.firstName && <p>{errors.firstName}</p>}
      </div>
      <div>
        <label>Second Name</label>
        <input type="text" name="secondName" value={formData.secondName} onChange={handleChange} />
        {errors.secondName && <p>{errors.secondName}</p>}
      </div>
      <div>
        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <button type="button" onClick={handleForgotPassword}>Forgot Password</button>
      <button type="submit">Login</button>
    </form>
  );
};

export default SignupForm;





