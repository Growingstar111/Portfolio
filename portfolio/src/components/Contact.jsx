import React from 'react'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'
import contact from '../assets/Contact us.json'
import Lottie from 'lottie-react'
import axios from "axios"
import { useFormik } from "formik"

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.name) {
        errors.name = "This field is required";
      }
      if (!values.email) {
        errors.email = "This field is required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
      if (!values.message) {
        errors.message = "This field is required";
      }
      return errors;
    },
    onSubmit: async (values, { resetForm }) => {
      try {
        await axios.post("https://getform.io/f/bejenyja", values);
        alert("Your message has been sent");
        resetForm();
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <section id='contact' className='z-50 bg-[#1e293b] relative py-10 px-5 md:px-0'>
      <div className='mb-16 max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex-row justify-between '>
          {/* Left Side */}
          <div className='md:w-1/2 mb-8 ml-2 md:mb-0'>
            <h2 className='text-3xl font-bold mb-3 text-[#3b82f6]'>Get in Touch</h2>
            <p className='mb-4 text-[#f1f5f9]'>
              I'm always open to new opportunities and collaboration. Feel free to reach out!
            </p>
            <div className='flex space-x-4'>
              <a href="https://www.facebook.com/profile.php?id=100015511569978" className='text-foreground/60 hover:text-foreground/80'>
                <img src={facebook} alt="" className='h-6 w-6'/>
              </a>
              <a href="https://www.instagram.com/im_vivek_sharma_?igsh=MWF2aWE2bTV1Mjlqdg==" className='text-foreground/60 hover:text-foreground/80'>
                <img src={instagram} alt="" className='h-6 w-6'/>
              </a>
              <a href="https://www.linkedin.com/in/vivek-sharma-99272a321" className='text-foreground/60 hover:text-foreground/80'>
                <img src={linkedin} alt="" className='h-6 w-6'/>
              </a>
            </div>
            <Lottie animationData={contact} className='w-[350px] mx-auto color-blue-700 lg:w-[500px]'/>
          </div>

          {/* Form */}
          <form 
            onSubmit={formik.handleSubmit} 
            className='w-full md:w-1/2 bg-white rounded-lg border border-[#93c5fd] shadow-lg shadow-[#3b82f6] p-10 mt-20'
          >
            <h1 className='text-[#0f172a] text-4xl font-bold mb-7'>Contact Me</h1>
            
            {/* Name */}
            <div className='mb-4'>
              <label htmlFor="name" className='block text-sm font-medium text-[#334155]'>Name</label>
              <input
                type="text"
                id='name'
                name='name'
                placeholder='Full Name'
                className='mt-1 p-2 block w-full rounded-md border-[#64748b] shadow-sm focus:border-[#93c5fd] focus:ring focus:ring-[#bfdbfe] focus:ring-opacity-50'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              {formik.touched.name && formik.errors.name ? (
                <span className='text-red-500 text-sm'>{formik.errors.name}</span>
              ) : null}
            </div>

            {/* Email */}
            <div className='mb-4'>
              <label htmlFor="email" className='block text-sm font-medium text-[#334155]'>Email</label>
              <input
                type="email"
                id='email'
                name='email'
                placeholder='Email'
                className='mt-1 p-2 block w-full rounded-md border-[#64748b] shadow-sm focus:border-[#93c5fd] focus:ring focus:ring-[#bfdbfe] focus:ring-opacity-50'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <span className='text-red-500 text-sm'>{formik.errors.email}</span>
              ) : null}
            </div>

            {/* Message */}
            <div className='mb-4'>
              <label htmlFor="message" className='block text-sm font-medium text-[#334155]'>Message</label>
              <textarea
                id='message'
                name='message'
                placeholder='Enter Your Message'
                className='mt-1 p-2 block w-full rounded-md border-[#64748b] shadow-sm focus:border-[#93c5fd] focus:ring focus:ring-[#bfdbfe]focus:ring-opacity-50'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
              />
              {formik.touched.message && formik.errors.message ? (
                <span className='text-red-500 text-sm'>{formik.errors.message}</span>
              ) : null}
            </div>

            {/* Submit */}
            <button 
              className='bg-[#3b82f6] text-white px-3 py-2 rounded-lg' 
              type='submit'
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
