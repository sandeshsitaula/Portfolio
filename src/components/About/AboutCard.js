import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sandesh Sitaula </span>
            from <span className="purple"> Jhapa, Nepal.</span>

            I have completed Bachelor BSC.Csit (Computer Science and Information Technology)
            
            <br />
            <br />
          </p>
         

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Sandesh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
