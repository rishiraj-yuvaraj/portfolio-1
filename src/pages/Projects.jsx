import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import pg from "../assets/projects/pg.png";
import project from "../assets/projects/project.jpeg";
import kickstart from "../assets/projects/kickstart.png";


const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pg}
              isBlog={false}
              title="Student Event Management"
              description="This online Student Event Management platform boasts a responsive front-end design, complete with an admin panel built using React and Material-UI. Users can create their details or they can view the existing datas. The platform allows for full CURD functionality on profiles and posts. The back-end is powered by a Node Express server and utilizes MongoDB for the database management."
              ghLink="https://github.com/rishiraj-yuvaraj/rishi-react.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project}
              isBlog={false}
              title="IMDB Clone"
              description="This online platform features a responsive interface built with Reactjs and CSS, allowing users to easily view the movies Name, Ratings and also can add the movies details through CRUD activities. Have included (like or dislike) button so that everyone will get to know about the movie rating, with suggestions for new users to explore about the movie. The backend is powered by Nodejs and Expressjs server, while MongoDB is utilized as the database."
              ghLink="https://github.com/rishiraj-yuvaraj/router-app.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="Hall-Booking"
              description="This online platform utilizes a REST API built with Nodejs and Expressjs, allowing for easy CRUD operations on user profiles. The user interface is designed as user friendly so that user won't stuck while booking the hall. The admin panel, accessible for CRUD on users and Number of bookings. The website uses MongoDB as the database."
              ghLink="https://github.com/rishiraj-yuvaraj/Hall-Booking.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pg}
              isBlog={false}
              title="Signup & Login Page"
              description="This Signup and Login page is full of front-end with responsive using React and css. This project is created for my task and webcode test and used MongoDB for database storage."
              ghLink="https://github.com/rishiraj-yuvaraj/crm-react.git"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects