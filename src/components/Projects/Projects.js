import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import carzone from "../../Assets/Projects/carzone.png";
import ecommerce from "../../Assets/Projects/ecommerce.png";
import foodonline from "../../Assets/Projects/foodonline.png";
import adult from '../../Assets/Projects/adult.jpeg'; 
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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={adult}
              isBlog={false}
              title="Adult Content Shop"
              description="A Adult Ecommerce Site for buying Adult Movies with Multilingual support supporting english and german language."
              ghLink="https://github.com/bishal189/Moviewebsites"
              demoLink="http://sandesh1.pythonanywhere.com/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
