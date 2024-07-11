import React from "react";
import Card from "../components/Card";
import pokemonPicture from "../img/pokedex.png";
import toDoList from "../img/to-do-app.png";
import movieApi from "../img/movie-api.png";
import movieFlix from "../img/myflix.png";
import meetApp from "../img/meet-app.png";
import "./Work.css";

const projects = [
  {
    title: 'Pokedex',
    description: 'The Pokedex project is a JavaScript-based application where users can select and retrieve detailed information about various Pokémon. It leverages functional programming concepts and utilizes jQuery for enhanced interaction and API communication, providing a dynamic and informative experience for Pokémon enthusiasts.',
    image: pokemonPicture,
    link: 'https://khafiz12.github.io/simple-js-retry/',
    techniques: ['JavaScript', 'jQuery', 'API Communication', 'Functional Programming']
  },
  {
    title: 'To Do List',
    description: 'The To-Do List app I created enables users to manage tasks effortlessly. Users can add, delete, and cross out items from their list, as well as rearrange them by dragging. This functionality enhances productivity by providing a flexible and intuitive way to organize tasks according to individual preferences and priorities.',
    image: toDoList,
    link: 'https://khafiz12.github.io/to-do-list-app/',
    techniques: ['JavaScript', 'Drag-and-Drop', 'DOM Manipulation']
  },
  {
    title: 'MyFlix-API',
    description: 'The MyFlix-API app enables users to query data from a custom-built database. It leverages Node.js and the MERN stack to provide a robust backend API for managing and retrieving movie information, offering a seamless experience for users interacting with movie data.',
    image: movieApi,
    link: 'https://github.com/khafiz12/movie_api',
    techniques: ['Node.js', 'Express', 'MongoDB', 'MERN Stack', 'SQL', 'React.js']
  },
  {
    title: 'MyFlix Movies',
    description: 'The MyFlix Movies app is a single-page application (SPA) built with React, allowing users to browse and filter a selection of movies using a search feature. Leveraging Bootstrap for styling and responsiveness, the app displays movie cards with detailed background information. The app also uses React Redux for state management, enhancing the user experience by providing efficient and dynamic filtering of movies.',
    image: movieFlix,
    link: 'https://movieflx.netlify.app/login',
    techniques: ['React', 'Bootstrap', 'Redux', 'SPA']
  },
  {
    title: 'Meet App',
    description: 'The Meet app is a serverless, progressive web application (PWA) developed with React, designed to help users stay updated with upcoming events. Utilizing a test-driven development (TDD) approach, the app integrates with the Google Calendar API to fetch and display event details seamlessly.',
    image: meetApp,
    link: 'https://khafiz12.github.io/meet/',
    techniques: ['React', 'PWA', 'TDD', 'Google Calendar API', 'AWS Lamda', 'Angular']
  }
];

const Work = () => {
  return (
    <main>
      <h1>My Work</h1>
      <div className="grid">
        {projects.map((project, index) => (
          <Card key={index} {...project} />
        ))}
      </div>
    </main>
  )
}

export default Work;



