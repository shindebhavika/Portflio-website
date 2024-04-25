import React from "react";
import { useState } from "react";
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
} from "./ProjectsStyle";
import ProjectCards from "../Cards/ProjectCards";
import { ProjectsData } from "./ProjectsStyle";
const Projects = () => {
 
 

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to android
          apps. Here are some of my projects.
        </Desc>
        <CardContainer>
          {ProjectsData.map((project, index) => (
            <ProjectCards
              key={index}
              img={project.img}
              topics={project.topics}
              title={project.title}
              date={project.date}
              description={project.description}
              project={project.project}
              live={project.live}
              github={project.github}
            />
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
