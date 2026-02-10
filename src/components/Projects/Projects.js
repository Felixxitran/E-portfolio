import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import houserental from "../../Assets/Projects/houserental2.jpg";
import shipping from "../../Assets/Projects/shipping.png";
import gotobed from "../../Assets/Projects/gotobed.png";
import physhing from "../../Assets/Projects/physhing.png";
import appscript from "../../Assets/Projects/appscript.png";
import maidchan from "../../Assets/Projects/maidchan.jpg";
import music from "../../Assets/Projects/demoMusic.png";
import taskManagement from "../../Assets/Projects/demoTask.png";

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
              imgPath={music}
              isBlog={false}
              title="Task Management Web Application"
              description="A full-stack task management web application that allows users to create, organize, and track tasks. Built with a client-server architecture using TypeScript, likely with a React frontend and Node.js/Express backend, structured as a monorepo with shared TypeScript configuration."
              ghLink="https://github.com/Felixxitran/taskManagement.git"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={maidchan}
              isBlog={false}
              title="Desktop Customized Alarm Application"
              description="Bascially a project I do for fun because the alarming programme of windows really suck and not as animated.I built this with CalendarAPI and play around with Tinker"
              ghLink="https://github.com/Felixxitran/maidchan_sync.git"
              demoLink="https://drive.google.com/file/d/19Bx4bXcgMmlcwXJDBvUecZuZmNOxDB5y/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gotobed}
              isBlog={false}
              title="Self-generated videos to send over emails instead of text"
              description="This is one of my AI Engineer projects, I used React Native for the UI/UX part and Python Flask for the backend part. The main idea of this project is to convert text input to videos to reponsed over emails. I used AI model to generate sounds and ChatGPT API to generate scripts and then combined onto the base video to make complete videos and send over email using GTTPs."
              ghLink="https://github.com/Felixxitran/maidchanMobile.git"
              // demoLink="https://github.com/Felixxitran/maidchanMobile.git"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={houserental}
              isBlog={false}
              title="Full Stack Rental App"
              description="This is a full stack rental app where users can find place to rent in canada. I used React Native for frontend , 
              and ExpressJS for backend with Redis,Google Firebase,PostgreSQL for database and authentication."
          
              ghLink="https://github.com/Felixxitran/knockknock.git"
              demoLink="https://www.figma.com/proto/qSz0dyYysiX1OnhUnWhgxc/Knock-Knock?node-id=0-1&t=VDDeU6WqlUZxBm8s-1"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={music}
              isBlog={false}
              title="Music Streaming Web Application"
              description="A full-stack music streaming web application using TypeScript, React, and Node.js with a client-server architecture. Designed and implemented a responsive frontend for browsing and discovering music, along with a backend API to handle data management. Utilized a monorepo structure with shared TypeScript configuration to ensure type safety and maintainable code across the entire stack."
              ghLink="https://github.com/Felixxitran/musicWebsite.git"
              // demoLink="https://drive.google.com/file/d/1UOy5zkbQpKxPjHgLMH_tVvUyk7fkCwJF/view?usp=sharing" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shipping}
              isBlog={false}
              title="Full Stack Mobile App to manage shipping and track shipment in real time"
              description="The programme is an app that help the shipping company to track their shipment in real time and notify the customer when the shipment arrive at the destination.The app is built with React Native for frontend with OCR features using Microsoft Azure API and backend is built with C# ASP.NET with SQL database."
              ghLink="https://github.com/Felixxitran/seatech-sync.git"
              demoLink="https://drive.google.com/file/d/1Qw0mHb0EAESKHNVNNVyo2WOGlL9qfNWT/view?usp=sharing"       
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
