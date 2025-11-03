import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello everyone! I’m <span className="purple">Jimoh Abdulquyum</span>{" "}
            from <span className="purple">Lagos, Nigeria</span>.
            <br />
            I’m a passionate <span className="purple">Computer Science student</span>{" "}
            with a strong interest in{" "}
            <span className="purple">Data Science</span>,{" "}
            <span className="purple">Artificial Intelligence</span>, and{" "}
            <span className="purple">Software Development</span>.
            <br />
            <br />
            I enjoy solving real world problems through code, analyzing data to
            uncover insights, and building intelligent systems that make an
            impact. I'm constantly learning, experimenting with new technologies,
            and striving to grow into a well rounded tech professional.
            <br />
            <br />
            Outside tech, I enjoy football, gaming, and exploring new ideas that
            blend creativity with technology.
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Watching and playing football ⚽
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring new tech tools and environments 💻
            </li>
            <li className="about-activity">
              <ImPointRight /> Gaming and listening to music 🎮🎧
            </li>
          </ul>
          <br/>

          <p>Here are a few areas of expertise:</p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Web Development (Frontend & Backend)
            </li>
            <li className="about-activity">
              <ImPointRight /> UI/UX Design
            </li>
            <li className="about-activity">
              <ImPointRight /> Responsive & Mobile-First Design
            </li>
            <li className="about-activity">
              <ImPointRight /> API Integration & Full-Stack Solutions
            </li>
          </ul>
          <br/>
          
          <p style={{ color: "rgb(155 126 172)" }}>
            "Innovation begins with curiosityand a little fun; keep building and learning!"
          </p>
          <footer className="blockquote-footer">Jimoh Abdulquyum Irewole Ishola</footer>


        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
