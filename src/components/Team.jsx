import React from 'react'

function Team() {
  return (
    <div>
      <div className="row p-3 mt-5">
        <h1 className="text-center ">About Me</h1>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="media/images/main.jpg"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 className="mt-5">Sudarshan Patil</h4>
          <h6>Front End Developer</h6>
        </div>
        <div className="col-6 p-3">
          <p>My name is Sudarshan Patil, a developer with 1.6 years of experience as a survey programmer and 7 months of freelancing experience. I hold a B.Tech in Electronics and Telecommunication.</p>
          <p>To enhance my resume and showcase my full-stack development skills, I developed a Zerodha clone. This project involved both frontend and backend technologies, including HTML, CSS, JavaScript, React, Bootstrap, Node.js, Express.js, MongoDB, and React Router DOM. It demonstrates my ability to create comprehensive, functional, and responsive web applications.</p>
          <p>I'm excited to continue applying my skills in front-end and back-end development and contributing to impactful projects.</p>
          <p className='text-center'>
            Connect on <a href="www.linkedin.com/in/mr-sudarshan"><i className="fa-brands fa-linkedin text-body-secondary fs-5"></i></a>&nbsp;&nbsp; <a href="https://www.instagram.com/_sudarshan.patil_/"><i className="fa-brands fa-instagram text-body-secondary fs-5"></i></a> 
          </p>
          <p className='text-center'>
           <a href="https://mr-sudarshan-patil.github.io/Sp-Dev/" className='text-body-secondary fs-5'>Portfolio</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Team
