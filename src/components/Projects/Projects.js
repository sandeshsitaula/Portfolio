import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import maple from "../../Assets/Projects/maple.png";
import arm_solutions from "../../Assets/Projects/arm-solutions.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently (Various Other Projects couldnot be shown because of company policies.).
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={maple}
              isBlog={false}
              title="MapleCourtYardDesigns"
              description="MapleCourtYard is a fully functional eCommerce platform dedicated to selling personalized handmade cards for all occasions. Built entirely with Django, the system offers a seamless shopping experience with a wide range of customization options, ensuring every card is unique and heartfelt. The platform includes a secure payment system, user-friendly navigation. From birthdays to anniversaries, MapleCourtYard combines creativity and technology to deliver meaningful connections through handmade cards."
              demoLink="https://maplecourtyarddesigns.co.uk/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              imgPath={arm_solutions}
              title="Arm Soluions"
              description="ARM Solutions is a Django-based web development platform offering scalable, responsive websites with secure payment systems and advanced database management. Designed for performance and user engagement, it delivers seamless functionality to elevate online business presence."
              demoLink="https://arm-solutions.co.uk/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
