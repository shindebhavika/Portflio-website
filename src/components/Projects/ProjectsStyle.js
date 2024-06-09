import styled from 'styled-components';
import _default from '../../themes/default';
import Calculator from "../../images/1Calculator.png";
import Current from "../../images/Current-Counter.jpeg";

import Text_To_Emojis from "../../images/Text-To-Emojis.jpeg";
import ToDo from "../../images/todo-list .jpeg";
import Match from "../../images/Match-The-NO.jpeg";
import Temperature from "../../images/Temp.jpeg";
import Dise from "../../images/Dise.png"
import Quiz from "../../images/22.04.2024_19.45.27_REC.png"
import weather from "../../images/weather.png"
import page from "../../images/08.06.2024_15.06.55_REC.png"
export const Container = styled.div`
    background: linear-gradient(343.07deg, rgba(132, 59, 206, 0.06) 5.71%, rgba(132, 59, 206, 0) 64.83%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    clip-path: polygon(0 0, 100% 0, 100% 100%,100% 98%, 0 100%);
`;

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 10px 0px 100px 0;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

export const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`;

export const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;

export const ToggleButtonGroup = styled.div`
    display: flex;
    border: 1.5px solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
    font-size: 16px;
    border-radius: 12px;
    font-weight: 500;
    margin: 22px 0px;
    @media (max-width: 768px) {
        font-size: 12px;
    }
`

export const ToggleButton = styled.div`
    padding: 8px 18px;
    border-radius: 6px;
    cursor: pointer;
    ${({ active, theme }) =>
        active && `
    background: ${theme.primary + 20};
    `
    }
    &:hover {
        background: ${({ theme }) => theme.primary + 8};
    }
    @media (max-width: 768px) {
        padding: 6px 8px;
        border-radius: 4px;
    }
`
export const Divider = styled.div`
    width: 1.5px;
    background: ${({ theme }) => theme.primary};
`


export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 28px;
    flex-wrap: wrap;
   
`;


export const ProjectsData = [

    {
        img: Dise,
        live: "https://dise-game-fawn.vercel.app/",
        topics: [ "React", "Web Development" ],
        title: "Dise Game",
        date: "2024-02-18",
        description: "Choose a number, roll the dice, and if your chosen number doesn't match the dice result, your score increases. Test your luck in this exciting dice game where making the right prediction adds to the challenge and fun.",
        github: "https://github.com/shindebhavika/Dise_Game"
    },
    {
        img: Quiz,
        live: "https://quiz-tawny-phi.vercel.app/",
        topics: [ "React", "Web Development" ],
        title: "Quiz Platform",
        date: "2024-02-12",
        description:
            "The project aimed to develop a comprehensive quiz management system with user-friendly interfaces and robust functionalities. The problem statement centered around creating a platform where users could easily create, manage, and play quizzes.",
        github: "https://github.com/shindebhavika/quiz/tree/master"
    },
    {
        img: weather,
        live: "https://quiz-tawny-phi.vercel.app/",
        topics: [ "React", "Web Development" ],
        title: "Weather-Info",
        date: "2024-02-12",
        description:
            "This basic weather information app aims to keep users informed about the weather conditions in their location and beyond using a weather API integration. It offers essential features for daily weather tracking and planning.",
        github: "https://github.com/shindebhavika/app-weather"
    },
    {
        img:"https://cdn.ndtv.com/tech/google_translate_icon_small.jpg",
        live: "https://translator-brown-ten.vercel.app/",
        topics: [ "React", "Web Development" ],
        title: "Translator",
        date: "2024-04-12",
        description:
            "Translator is a web application that allows users to convert typed text from one language to another in real-time. Powered by React and leveraging translation APIs, it provides a convenient way for users to translate text and communicate across language barriers effortlessly.",
        github: "https://github.com/shindebhavika/TRANSLATOR.git"
    },
    {
        img:"https://www.popsci.com/wp-content/uploads/2022/01/18/hands-holding-phone-with-photos-on-screen.jpg?w=600",
        live: "https://pic-portal-neon.vercel.app/",
        topics: [ "React", "Web Development" ],
        title: "PicPortal",
        date: "2024-05-12",
        description:
            "PicPortal is a web application that empowers users to search for images, view details, and download them. Built with React, it provides a seamless experience for users to explore a vast collection of pictures and find the perfect images for their needs.",
        github: "https://github.com/shindebhavika/PicPortal.git"
    },
    {
        img:"https://retail.sahaj.co.in/documents/101808871/102835059/tour+and+travell+WEL.png/301fb991-0ed7-ff3a-1240-82a8da9c0d7b?t=1684221889889",
        live: "https://sahaj-travelling-d6vq.vercel.app/",
        topics: [ "React", "Web Development" ],
        title: "sahaj travelling",
        date: "2024-05-12",
        description:
            "Landing page for travel agency",
        github: "https://github.com/shindebhavika/sahajTravelling.git"
    },
    
    {
        img: page,
        live: "https://batch-assignment-rosy.vercel.app/",
        topics: [ "HTML", "CSS", "Js", "Web Development" ],
        title: "Landing page with theme toggle",
        date: "2024-02-12",
        description:
            "Landing page ",
        github: "https://github.com/shindebhavika/batch-assignment.git"
    },
    {
        img: Text_To_Emojis,
        live: "https://text-to-emojis-project.vercel.app/",
        topics: [ "HTML", "CSS", "Js", "Web Development" ],
        title: "Text To Emojis",
        date: "2024-02-12",
        description:
            "Text to Emoji Converter: A simple tool that transforms plain text into expressive emojis, adding a touch of fun and creativity to your messages. ",
        github: "https://github.com/shindebhavika/shindebhavika-Text_To_Emojis_project/tree/master"
    },
    {
        img: "https://imageio.forbes.com/specials-images/dam/imageserve/1092571024/960x0.jpg?height=474&width=711&fit=bounds",
        live: "https://to-do-list-seven-mocha.vercel.app/",
        topics: [ "HTML", "CSS", "Js", "Web Development" ],
        title: "To Do List",
        date: "2024-02-12",
        description:
            "A to-do list is a task management tool where users can create, organize, and prioritize tasks. It helps individuals stay organized and focused by providing a visual representation of pending and completed tasks. Utilizing checkboxes or other indicators, users can easily track their progress and manage daily responsibilities. ",
        github: "https://github.com/shindebhavika/to-do-list/tree/master"
    },
    {
        img: Match,
        live: "https://match-the-number.vercel.app/",
        topics: [ "React", "Web Development" ],
        title: "Match The Number",
        date: "2023-12-02",
        description:
            "A clicking game where matching numbers increment the score by 10 with each successful match. The goal is to accumulate points by quickly identifying and clicking on matching numbers displayed on the screen. The increasing score adds a competitive and rewarding element to the game ",
        github: "https://github.com/shindebhavika/match--the-number"
    },
    {
        img:"https://cdn.arstechnica.net/wp-content/uploads/2024/04/calculator-icon-800x450.jpg",
        live: "https://calculator-react-umber-omega.vercel.app/",
        topics: [ "React", "Web Development" ],
        title: "Calculator",
        date: "2024-02-14",
        description:
            "Basic calculator application for performing arithmetic operations such as addition, subtraction, multiplication, and division. User-friendly interface with input buttons and a display for immediate results. Designed to provide quick and easy mathematical calculations.",
        github: "https://github.com/shindebhavika/calculator-react/tree/master"
    },
    {
        img: Current,
        live: "https://current-counter.vercel.app/",
        topics: [ "React", "Web Development" ],
        title: "Current Counter",
        date: "2024-02-12",
        description: " A basic counter implemented using functions for incrementing and decrementing. Users can increase or decrease the counter's value, and the displayed count dynamically updates accordingly. This simple project demonstrates fundamental function-driven interactions for modifying and displaying numerical values.",
        github: "https://github.com/shindebhavika/Current-Counter/tree/master"
    },
   
  
];