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
              imgPath={physhing}
              isBlog={false}
              title="Physhing detection Programme NLP"
              description="This project focuses on Phishing Email Detection Using Machine Learning, addressing the limitations of traditional rule-based security systems. Using a Kaggle dataset of 18,600 emails, I implemented a robust detection framework incorporating Bag of Words (BoW) for feature extraction and evaluated five distinct classifiers: Logistic Regression, Naive Bayes, Random Forest, SVM, and an Ensemble Model. The Ensemble Model achieved the highest performance with 96.91% accuracy and a 96.27% F1 score. This work demonstrates proficiency in optimizing model trade-offs between speed and accuracy to deploy scalable solutions for real-world cybersecurity challenges."
              ghLink="https://github.com/Felixxitran/physing-detection-AI.git"
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
              imgPath={appscript}
              isBlog={false}
              title="Newspaper information extraction"
              description="I wrote this programme in AppScript and basically, for anylinks about any news in the google sheet form without having being summarized the need information.The programme will extract the information.The purpose is that the company requires member read tons of news everyday and it takes tons of time to do so. My programme help them read faster and more efficient.The programme not only works with website links but also with website pdf files. I wrote this programme using ChatgptAPI and javascript webscraping libraries. "
              // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              demoLink="https://drive.google.com/file/d/1UOy5zkbQpKxPjHgLMH_tVvUyk7fkCwJF/view?usp=sharing" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shipping}
              isBlog={false}
              title="Full Stack App for shipping company"
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
