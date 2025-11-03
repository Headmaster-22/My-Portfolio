import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "10px",
        color: "white",
      }}
    >
      <h1 className="project-heading pb-4" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>

      {/* GitHub Contribution Calendar */}
      <GitHubCalendar
        username="Headmaster-22"  // ← your GitHub username
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />

      <h1 className="project-heading" style={{ paddingTop: "50px" }}>
        My <strong className="purple">GitHub Stats</strong>
      </h1>

      {/* GitHub Stats and Most Used Languages */}
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        <img
          src="https://github-readme-stats.vercel.app/api?username=Headmaster-22&show_icons=true&theme=radical&count_private=true"
          alt="GitHub stats"
          style={{ maxWidth: "100%", margin: "10px" }}
        />
        <img
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=Headmaster-22&layout=compact&theme=radical"
          alt="Top Languages"
          style={{ maxWidth: "100%", margin: "10px" }}
        />
      </div>

      {/* GitHub Streak */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <img
          src="https://github-readme-streak-stats.herokuapp.com/?user=Headmaster-22&theme=radical"
          alt="GitHub streak stats"
          style={{ maxWidth: "100%", margin: "10px" }}
        />
      </div>
    </Row>
  );
}

export default Github;
