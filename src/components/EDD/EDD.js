import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./EDDCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
        <Particle />
        <Container>
          <h1 className="project-heading">
            <strong className="purple">[lawn care re-imagined]</strong>
          </h1>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                //imgPath={chatify}
                isBlog={false}
                title="Element A"
                demoLink="https://docs.google.com/document/d/1mvufcl8rjvaroymI1N8UuThyPTnFhWTXzJ6YiNz9ouY/edit"
                description="Problem Identification and Justification" />
            </Col>

         
            <Col md={4} className="project-card">
              <ProjectCard
                //imgPath={chatify}
                isBlog={false}
                title="Element B"
                demoLink="https://docs.google.com/document/d/1OSGW-L6Jt3WCqHfIpMyfTZ9DQwgijhbdeIpJm2H0ffY/edit?usp=sharing"
                description="Identification and Analysis of Prior Solutions" />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                //imgPath={chatify}
                isBlog={false}
                title="Element C"
                demoLink="https://docs.google.com/document/d/1hjJJn9n4IHS2aKs0ptYsnfy4kzeJZTfY7EBJyZlcSHw/edit?usp=sharing"
                description="Justification of Design Specifications" />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                //imgPath={chatify}
                isBlog={false}
                title="Element D"
                //demoLink="https://docs.google.com/document/d/1hjJJn9n4IHS2aKs0ptYsnfy4kzeJZTfY7EBJyZlcSHw/edit?usp=sharing"
                description="[in-progess]" />
            </Col>
          </Row>
        </Container>
      <Container>
        <Row>
          <Col md={15} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Problem Statement:
            </h1>
            <p className="home-about-body">
            Fifty-eight percent of homeowners with a lawn dislike mowing their lawn from a survey of over 1,000 people in 2008. Those who refuse to mow their own lawn spend an average of $45 every mow to keep their lawn trimmed. A majority of homeowners dislike lawn mowing due to the time it takes, the heat on warm days, and the noise from the lawnmower. 

              <br />
              <br /> 


            </p>
          </Col>
        </Row>
        </Container>

      </Container>
  
  );
}

export default Projects;
/*
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
          */



        /*
        put under main text
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        */