import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a passionate <b className="purple">software developer</b> who enjoys
              turning ideas into functional, user-friendly products.
              <br />
              <br />
              I’ve worked with a variety of technologies, including{" "}
              <i>
                <b className="purple">
                  HTML, CSS, JavaScript, C#, MongoDB, Flutter, and AWS
                </b>
              </i>
              , and I’m always eager to explore new tools that enhance my workflow.
              <br />
              <br />
              My main interests lie in building{" "}
              <b className="purple">modern web applications</b> and{" "}
              <b className="purple">mobile solutions</b> that solve real world problems.
              <br />
              <br />
              I also enjoy designing smooth user interfaces and learning more about{" "}
              <i>
                <b className="purple">cloud technologies</b> and{" "}
                <b className="purple">backend systems</b>.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
