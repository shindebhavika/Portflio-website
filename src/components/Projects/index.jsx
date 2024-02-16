import React from 'react';
import { useState } from 'react';
import { Container, Wrapper, Title, Desc, CardContainer } from './ProjectsStyle';
import ProjectCards from '../Cards/ProjectCards';
import Calculator from '../../images/1Calculator.png'
import Current from "../../images/Current-Counter.jpeg"

import  Text_To_Emojis from "../../images/Text-To-Emojis.jpeg"
import ToDo from "../../images/todo-list .jpeg"
import Match from '../../images/Match-The-NO.jpeg'
const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState('all');

  // Dummy project data
  const dummyProjects = [
    {
      img:Calculator ,
      live:"https://vercel.com/bhavika-shindes-projects/calculator-react/",
      topics: ['React', 'Web Development'],
      title: 'Calculator',
      date: '2024-02-14',
      description: 'Basic calculator application for performing arithmetic operations such as addition, subtraction, multiplication, and division. User-friendly interface with input buttons and a display for immediate results. Designed to provide quick and easy mathematical calculations.',
     
    },
    {
      img: Text_To_Emojis,
      live:"https://text-to-emojis-project.vercel.app/",
      topics:['HTML','CSS',"Js", 'Web Development'],
      title: 'Text To Emojis',
      date: '2024-02-12',
      description: 'Text to Emoji Converter: A simple tool that transforms plain text into expressive emojis, adding a touch of fun and creativity to your messages. ',
     
    },
    {
      img: ToDo,
      live:"https://to-do-list-seven-mocha.vercel.app/",
      topics: ['HTML','CSS',"Js", 'Web Development'],
      title: 'To Do List',
      date: '2024-02-12',
      description: 'Text to Emoji Converter: A simple tool that transforms plain text into expressive emojis, adding a touch of fun and creativity to your messages. ',
     
    },
    {
      img: Match,
      live:"https://match-the-number.vercel.app/",
      topics: ['React', 'Web Development'],
      title: 'Match The Number',
      date: '2024-02-12',
      description: 'Text to Emoji Converter: A simple tool that transforms plain text into expressive emojis, adding a touch of fun and creativity to your messages. ',
     
    },
    {
      img: Current,
      live:"https://current-counter.vercel.app/",
      topics: ['React', 'Web Development'],
      title: 'Text To Emojis',
      date: '2024-02-12',
      description: 'Text to Emoji Converter: A simple tool that transforms plain text into expressive emojis, adding a touch of fun and creativity to your messages. ',
     
    },
    // {
    //   img: 'https://placekitten.com/300/200',
    //   live:"https://text-to-emojis-project.vercel.app/",
    //   topics: ['React', 'Web Development'],
    //   title: 'Text To Emojis',
    //   date: '2024-02-12',
    //   description: 'Text to Emoji Converter: A simple tool that transforms plain text into expressive emojis, adding a touch of fun and creativity to your messages. ',
     
    // },
  ];

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
        </Desc>
        <CardContainer>
          {dummyProjects.map((project, index) => (
            <ProjectCards
              key={index} 
              img={project.img}
              topics={project.topics}
              title={project.title}
              date={project.date}
              description={project.description}
              project={project.project}
              live={project.live}
            />
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
