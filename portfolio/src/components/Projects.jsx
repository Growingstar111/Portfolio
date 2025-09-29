import React from 'react'
import Cards from './Cards'
import port_pic from '../assets/port_pic.png'
import payment from '../assets/payment-gateway.png'
import payment1 from '../assets/payment-gateway1.png'
import e_commerce1 from '../assets/e-commerce1.png'
import orderList from '../assets/order-list.png'
import viewOrder from '../assets/view-order.png'
import book1 from '../assets/bookswap4.png'
import book2 from '../assets/bookswap5.png'
import book3 from '../assets/bookswap6.png'
import book4 from '../assets/bookswap1.png'
import book5 from '../assets/bookswap2.png'
import book6 from '../assets/bookswap3.png'
import hrms0 from '../assets/hrms0.png'
import hrms1 from '../assets/hrms1.png'
import hrms2 from '../assets/hrms2.png'

const Projects = () => {
  const projects = [

   {
          title: 'E-commerce Website',
          desc: 'Built with the MERN stack this full-featured e-commerce site includes separate Admin, Company, and User panels, orders, and roles. It has secure authentication, Stripe payment integration, advanced product search, and responsive design.',
          image: [e_commerce1, orderList,viewOrder,payment,payment1],
          live: "https://myproject-frontend-iota.vercel.app/",
          github: "https://github.com/Growingstar111/main_project"
        },
   {
          title: 'HRMS',
          desc: 'Developed a Human Resource Management System (HRMS) using the MERN stack to employee management, attendance, payroll, and leave tracking. Implemented role-based access, secure authentication, and interactive dashboards HR.',
          image: [hrms0,hrms1,hrms2],
          // live: "https://myproject-frontend-iota.vercel.app/",
          github: "https://github.com/Growingstar111/myproject-backend"
        },
   {
          title: 'Buy & Sell Book Platform',
          desc: 'A full-stack MERN application that allows users to buy and sell used books easily. The platform includes secure authentication, a user-friendly interface for listing and browsing books, and features like search, order management.',
          image: [book1, book2,book3,book4,book5,book6],
          // live: "https://myproject-frontend-iota.vercel.app/",
          github: "https://github.com/Growingstar111/myproject-frontend"
        },
           {
          title: 'Portfolio',
          desc: 'My personal React.js portfolio showcasing my skills, projects, and journey as a MERN stack developer. It features a clean, responsive design and interactive sections like About Me, Projects, and Contact.',
          image: [port_pic],
          // live: "https://shimmering-blini-41560d.netlify.app/",
          github: ""
        },
  ]
  return (
    <>
        <section id='projects' className='relative bg-secondary-800 py-10 px-4'>
      <div className='mb-16 max-w-7xl mx-auto'>
        <h2 className='text-3xl font-bold mb-8 text-secondary-100 border-b border-primary-500 w-max pb-4'>My Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10'>
          {
            projects.map((item,index)=>{
              return(
                <div key={index}>
                   <Cards item={item}/>
                  </div>
              )
            })
          }
        </div>
      </div>
    </section>
    </>
  )
}

export default Projects
