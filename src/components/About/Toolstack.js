import React from "react";
import { Col, Row } from "react-bootstrap";

import chrome from "../../Assets/TechIcons/Google Chrome.svg";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import intelliJ from "../../Assets/TechIcons/intellij-idea.svg";
import pycharm from "../../Assets/TechIcons/Pycharm.svg";
import mysql from "../../Assets/TechIcons/mysql.svg"
import phpmyadmin from "../../Assets/TechIcons/phpmyadmin.svg"

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={chrome} alt="Chrome" className="tech-icon-images" />
        <div className="tech-icons-text">Google Chrome</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={vsCode} alt="vsCode" className="tech-icon-images" />
        <div className="tech-icons-text">Vs Code</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons ">
        <img src={intelliJ} alt="go" className="tech-icon-images" />
        <div className="tech-icons-text">IntelliJ</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons ">
        <img src={pycharm} alt="go" className="tech-icon-images" />
        <div className="tech-icons-text">PyCharm</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={mysql} alt="go" className="tech-icon-images" />
        <div className="tech-icons-text">MySQL</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={phpmyadmin} alt="go" className="tech-icon-images" />
        <div className="tech-icons-text">Xampp-PhpMyAdmin</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
