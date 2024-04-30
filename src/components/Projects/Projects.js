import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import carzone from "../../Assets/Projects/carzone.png";
import ecommerce from "../../Assets/Projects/ecommerce.png";
import foodonline from "../../Assets/Projects/foodonline.png";
import adult from "../../Assets/Projects/adult.png";
import heritage from "../../Assets/Projects/heritage.png";
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
              imgPath={adult}
              isBlog={false}
              title="Hundi"
              description="Hundi is a site for sending and receiving money from one country to another.It also allows to pay various bills like internet,electricity,water etc.And also allows to send topup credits from one user to another which allows to withdraw for actual money."
              ghLink="https://github.com/bishal189/Hundi"
              demoLink="http://hundi1.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={carzone}
              isBlog={false}
              title="CarZone"
              description="A Place to Sell Cars And get Services for Cars like repairing and so on . Developed Using Django "
              ghLink="https://github.com/bishal189/django-car"
              demoLink="http://navalta111.pythonanywhere.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={heritage}
              isBlog={false}
              title="Heritage Hive"
              description="Heritage Hive is a online market place for the purpose of promoting the traiditional and antique things and making people accessible to those items."
              ghLink="https://github.com/bishal189/ecommerce_final"
              demoLink="http://sandesh1.pythonanywhere.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="GreatKart "
              description="A Ecommerce Site  to Buy Clothes and other accessories like Shoes,Glasses etc. . Developed Using Django "
              ghLink="https://github.com/bishal189/ecommerce"
              demoLink="https://bishal11.pythonanywhere.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodonline}
              isBlog={false}
              title="FoodOnline"
              description="A Place to choose the best food around resturants in town.See all the menus and prices offered by various resturants ."
              ghLink="https://github.com/bishal189/foodonline"
              demoLink="http://justpie8.pythonanywhere.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
