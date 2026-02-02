import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/ghost.jpg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Something about me<span className="purple"> MYSELF </span> 
            </h1>
            <p className="home-about-body">
              I’m a Software Developer and Mathematics major who loves leveraging data to build efficient, scalable solutions. Over time, I’ve explored everything from mobile development to machine learning optimization, finding my passion in creating high-performance systems that drive real value.

              <br />
              <br />
              I’m proficient in
              <i>
                <b className="purple">
                  {" "}
                  Python, SQL, JavaScript, ASP.NET, and R{" "}
                </b>
              </i>
              and I enjoy working across both front-end interfaces and complex backend integrations.
              <br />
              <br />
              My key areas of interest include developing
              <i>
                <b className="purple">
                  {" "}
                  Data Science, Cloud Computing, and Machine Learning ,{" "}
                </b>
              </i>
              particularly exploring how data governance and algorithms can solve real-world problems
              <br />
              <br />
              Whenever possible, I love building projects with
              <b className="purple"> Python</b> and modern frameworks like{" "}
              <i>
                <b className="purple">React.js</b> and{" "}
                <b className="purple">React Native.</b>.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" style={{ borderRadius: "50%", maxHeight: "300px" }}/>
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
