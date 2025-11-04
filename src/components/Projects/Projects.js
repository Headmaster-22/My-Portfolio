import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards"; // Make sure you have this component

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={""} // Add your image path
              isBlog={false}
              title="PayPal Integration"
              description="A Spring Boot web application that securely integrates PayPal’s REST API for real-time payment processing.
               This project demonstrates backend development skills, API integration,
                and secure transaction handling by instantly verifying user payments and crediting them to the developer's PayPal account."
              ghLink="https://github.com/Headmaster-22/PayPal-Integration"
              demoLink="_blank"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"src/Assets/AutoGlide.png"}
              isBlog={false}
              title="AutoGlide Motors Website"
              description="My Very First Full-Stack Project: A responsive website for AutoGlide Motors, built with simplr HTML, Javascript & CSS."
              ghLink="https://github.com/Headmaster-22/1st-Semester-Project"
              demoLink="https://headmaster-22.github.io/1st-Semester-Project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={""}
              isBlog={false}
              title="My-App Frontend"
              description="My App Frontend, a responsive web app built in VS Code using Firebase Authentication for secure user registration, login, and sign-out.
               It integrates The Movie Database (TMDB) API to fetch the latest movie ratings, allowing users to click and watch trailers directly on YouTube for a seamless movie discovery experience."
              ghLink="https://github.com/Headmaster-22/My-App_Frontend"
              demoLink=" _blank"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"" & ""}
              isBlog={false}
              title="My-App Backend"
              description="My-App Backend is a Spring Boot application that serves as the backend for a modern web application.
               It integrates a local MySQL database for persistent data storage and provides secure user authentication, demonstrating skills in backend development, RESTful API design, and database management."
              ghLink="https://github.com/Headmaster-22/My-App_Database"
              demoLink="_blank"
            />
          </Col>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={""}
              isBlog={false}
              title="My Portfolio Website"
              description="This portfolio is a modern, interactive web application built to showcase projects, skills, and services using React and Bootstrap.
               Designed with a mobile-first, responsive layout, it ensures seamless viewing across devices."
              ghLink="https://github.com/Headmaster-22/My-Portfolio"
              demoLink="https://jimohabdulquyum.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={""}
              isBlog={false}
              title="Loan Prediction"
              description="A Streamlit web app that predicts loan approval using machine learning.
               Users enter financial details like income, dependents, and credit history to see instant results. Built with Python, XGBoost, and Joblib for real-time, data-driven loan eligibility predictions"
              ghLink="https://github.com/Headmaster-22/Loan-Prediction"
              demoLink="https://loan-prediction-jimoh.streamlit.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={""}
              isBlog={false}
              title="Healthbot-19"
              description="HealthBot 19: Your COVID-19 Symptom Advisor is an interactive chatbot leveraging NLP to provide tailored guidance on COVID-19 symptoms.
               It offers personalized advice, symptom analysis, and directs users to relevant resources, ensuring informed decision-making and support during the pandemic."
              ghLink="https://github.com/Headmaster-22/HealthBot-19-Your-COVID-19-Symptom-Advisor"
              demoLink="https://healthbot-19-your-covid-19-symptom-advisor.streamlit.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={""}
              isBlog={false}
              title="Startup"
              description="A machine learning web app that predicts a startup’s profit based on R&D, administrative, and marketing expenses, as well as company location.
               Built with Streamlit, scikit-learn, and joblib, it helps entrepreneurs and investors make data-driven financial decisions."
              ghLink="https://github.com/Headmaster-22/Startup"
              demoLink="https://startup-jimoh.streamlit.app"
            />
          </Col>
          
          
          

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards"; // Make sure you have this component

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={""} // Add your image path
              isBlog={false}
              title="PayPal Integration"
              description="A Spring Boot web application that securely integrates PayPal’s REST API for real-time payment processing.
               This project demonstrates backend development skills, API integration,
                and secure transaction handling by instantly verifying user payments and crediting them to the developer's PayPal account."
              ghLink="https://github.com/Headmaster-22/PayPal-Integration"
              demoLink="_blank"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"src/Assets/AutoGlide.png"}
              isBlog={false}
              title="AutoGlide Motors Website"
              description="My Very First Full-Stack Project: A responsive website for AutoGlide Motors, built with simplr HTML, Javascript & CSS."
              ghLink="https://github.com/Headmaster-22/1st-Semester-Project"
              demoLink="https://headmaster-22.github.io/1st-Semester-Project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={""}
              isBlog={false}
              title="My-App Frontend"
              description="My App Frontend, a responsive web app built in VS Code using Firebase Authentication for secure user registration, login, and sign-out.
               It integrates The Movie Database (TMDB) API to fetch the latest movie ratings, allowing users to click and watch trailers directly on YouTube for a seamless movie discovery experience."
              ghLink="https://github.com/Headmaster-22/My-App_Frontend"
              demoLink=" _blank"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"" & ""}
              isBlog={false}
              title="My-App Backend"
              description="My-App Backend is a Spring Boot application that serves as the backend for a modern web application.
               It integrates a local MySQL database for persistent data storage and provides secure user authentication, demonstrating skills in backend development, RESTful API design, and database management."
              ghLink="https://github.com/Headmaster-22/My-App_Database"
              demoLink="_blank"
            />
          </Col>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={""}
              isBlog={false}
              title="My Portfolio Website"
              description="This portfolio is a modern, interactive web application built to showcase projects, skills, and services using React and Bootstrap.
               Designed with a mobile-first, responsive layout, it ensures seamless viewing across devices."
              ghLink="https://github.com/Headmaster-22/My-Portfolio"
              demoLink="https://jimohabdulquyum.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={""}
              isBlog={false}
              title="Loan Prediction"
              description="A Streamlit web app that predicts loan approval using machine learning.
               Users enter financial details like income, dependents, and credit history to see instant results. Built with Python, XGBoost, and Joblib for real-time, data-driven loan eligibility predictions"
              ghLink="https://github.com/Headmaster-22/Loan-Prediction"
              demoLink="https://loan-prediction-jimoh.streamlit.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={""}
              isBlog={false}
              title="Healthbot-19"
              description="HealthBot 19: Your COVID-19 Symptom Advisor is an interactive chatbot leveraging NLP to provide tailored guidance on COVID-19 symptoms.
               It offers personalized advice, symptom analysis, and directs users to relevant resources, ensuring informed decision-making and support during the pandemic."
              ghLink="https://github.com/Headmaster-22/HealthBot-19-Your-COVID-19-Symptom-Advisor"
              demoLink="https://healthbot-19-your-covid-19-symptom-advisor.streamlit.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={""}
              isBlog={false}
              title="Startup"
              description="A machine learning web app that predicts a startup’s profit based on R&D, administrative, and marketing expenses, as well as company location.
               Built with Streamlit, scikit-learn, and joblib, it helps entrepreneurs and investors make data-driven financial decisions."
              ghLink="https://github.com/Headmaster-22/Startup"
              demoLink="https://startup-jimoh.streamlit.app"
            />
          </Col>
          
          
          

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
