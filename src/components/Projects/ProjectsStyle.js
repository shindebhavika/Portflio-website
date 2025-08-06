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
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwtMffRe752j8E2XelpsN7jIz4Zi0fsnsVgw&s",
          live: "https://softsell-henna-ten.vercel.app/",
          topics: [ "React", "Web Development" ],
          title: "Soft-Sell",
          date: "2024-02-18",
          description: "SoftSell helps you easily sell your software licenses and monetize your unused assets — fast, secure, and hassle-free.",
          github: "https://github.com/shindebhavika/wizX.git"
      },
       {
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8iuL5D2vnYCbr9jy-5MQRAZfHJXII8Aq7LQ&s",
          live: "https://iwintu-ko2a.vercel.app/",
          topics: [ "React", "Web Development" ],
          title: "IWINTU",
          date: "2024-02-18",
          description: "AI-Driven Marketplace For Strategic Events & Leading Companies",
          github: "https://github.com/shindebhavika/iwintu.git"
      }, {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9x9iXl429sBTBd2juKGAWaaAkLMrDzX8biy7SaA7qL1d8qBDBYEVUX8ma10qb-L1Bdc4&usqp=CAU",
        live: "https://cube-alpha-three.vercel.app/",
        topics: [ "React", "Web Development" ],
        title: "GTG ",
        date: "2024-02-12",
        description:
            "GTG delivers 10x longer-lasting fragrance with our advanced concentration formula – engineered for all-day projection and exceptional sillage.",
        github: "https://github.com/shindebhavika/cube.git"
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
    },  {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYy_qKeAT7uPvswYZXyg4QxuJYRu73pXaG-w&s",
        live: "https://news-portal-delta-nine.vercel.app/",
        topics: [ "React", "Web Development" ],
        title: "News Portal",
        date: "2024-05-12",
        description:
            "A website to search news and add your favorite articles for quick access.",
        github: "https://github.com/shindebhavika/newsPortal.git"
    },
    {
        img:"data:image/jpeg;base64,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",
        live: "https://artistly-5sya.vercel.app/",
        topics: [ "React", "Web Development" ],
        title: "Artistly",
        date: "2024-02-12",
        description:
            "We connect you with top-notch celebrities who will make you event an unforgettable success.",
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