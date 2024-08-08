import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import virtualMouse from "../../Assets/Projects/virtualMouse.png";
import faceEmotion from "../../Assets/Projects/faceEmotion.png";
import userHub from "../../Assets/Projects/userHub.png";
import imageEditor from "../../Assets/Projects/imageEditor.png";
import passGenerator from "../../Assets/Projects/passGenerator.png";
import whiteboard from "../../Assets/Projects/whiteboard.png";

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
              imgPath={virtualMouse}
              isBlog={false}
              title="Virtual Mouse"
              description="'Virtual Mouse Using Hand Gesture' system leveraging computer vision and machine learning. Implemented a gesture recognition algorithm to interpret hand movements and map them to mouse functions such as left click, right click, double click, and volume adjustment. Utilized libraries such as OpenCV for real-time hand tracking and gesture analysis. The system achieved accurate gesture recognition, enabling users to control the computer interface seamlessly through intuitive hand movements."
              ghLink="https://github.com/hiteshdewangan1702/VirtualMouse"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={faceEmotion}
              isBlog={false}
              title="Face Emotion Recognition"
              description="Developed a Face Emotion Recognition system using Convolutional Neural Networks (CNN) to accurately classify various emotions. The model was trained on a diverse facial dataset, demonstrating high precision in analyzing facial expressions and identifying emotions through advanced machine learning techniques."
              ghLink="https://github.com/hiteshdewangan1702/Face-Emotion-Recognition"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={userHub}
              isBlog={false}
              title="UserHub"
              description="Developed 'UserHub', a web application that facilitates comprehensive user management through CRUD (Create, Read, Update, Delete) operations. Utilizing HTML, CSS, Bootstrap, and PHP, the project features a responsive and user-friendly interface. Bootstrap ensures a modern, mobile-friendly design, while PHP handles the server-side logic for managing user data. Users can seamlessly add, view, edit, and delete their profiles, offering a full suite of functionalities within a clean and intuitive platform."
              ghLink="https://github.com/hiteshdewangan1702/userhub"
              demoLink="http://userhub.infinityfreeapp.com/index.php"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imageEditor}
              isBlog={false}
              title="Image Editor"
              description="Developed a versatile image editing application using HTML, CSS, and JavaScript, offering users a range of powerful tools for manipulating images. The application includes filter options such as brightness, saturation, inversion, and grayscale, alongside core functionalities like rotating and flipping images. Users can conveniently save their edited images locally with the integrated download feature. The application is designed with an intuitive, user-friendly interface, ensuring accessibility and ease of use for all skill levels."
              ghLink="https://github.com/hiteshdewangan1702/ImageEditorJavaScript"
              demoLink="https://imageeditorbyhitesh.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={passGenerator}
              isBlog={false}
              title="Password Generator"
              description="Developed a secure and customizable password generation application using HTML, CSS, and JavaScript. The application allows users to create robust passwords with options to include uppercase letters and special characters according to their preferences. Designed with an intuitive user interface, it features toggles for easy customization and generates four unique passwords based on the selected criteria, offering users a variety of strong and secure options."
              ghLink="https://github.com/hiteshdewangan1702/PasswordGenerator"
              demoLink="https://passwordgeneratorbyhitesh.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={whiteboard}
              isBlog={false}
              title="Whiteboard"
              description="Developed an interactive whiteboard application using HTML, CSS, and JavaScript, featuring real-time drawing and collaboration. The application includes tools such as a pen, eraser, color palette, and clear board, with optimized performance for smooth interactions. Designed with a user-friendly, minimalistic interface, it also features a download button, allowing users to save their drawings as images for added convenience."
              ghLink="https://github.com/hiteshdewangan1702/Whiteboard"
              demoLink="https://whiteboardbyhitesh.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
