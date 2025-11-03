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

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
