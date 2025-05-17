import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Banking System – Microservices Architecture (Java Spring Boot)',
    description: 'This project is a modular banking system developed using Java and Spring Boot, following a microservices architecture. It features independently deployable services for account management, transactions, customer onboarding, and authentication. The system ensures scalability, maintainability, and efficient communication between services through REST APIs and service discovery. It incorporates best practices such as centralized configuration, circuit breakers, and API gateway integration.',
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Java', 'Thymeleaf', 'Spring boot', 'PostgreSQL'],
    demoUrl: '',
    githubUrl: 'https://github.com/Kamal010110011000/no-bank'
  },
  {
    title: 'Simple Question & Answer App (PHP)',
    description: 'A lightweight web application built using PHP that allows users to post questions and provide answers. The app features basic user interaction, question submission, and answer management with a simple and intuitive interface. Designed for ease of use and quick deployment, it demonstrates core PHP and MySQL integration for dynamic content handling.',
    image: 'https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['PHP','vue', 'mysql', 'jquery'],
    demoUrl: '',
    githubUrl: 'https://github.com/Kamal010110011000/QA-app'
  },
  {
    title: 'Weather App',
    description: 'A simple Android application that fetches and displays real-time weather data using public weather APIs. The app provides current weather conditions, temperature, and location-based forecasts with a clean and user-friendly interface. Built with Android Studio, it demonstrates API integration, location services, and responsive UI design.',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Android', 'OpenWeather API', 'Java'],
    demoUrl: '',
    githubUrl: 'https://github.com/Kamal010110011000/sunshine-androidapp'
  }
];

function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-6 md:p-10">
      <div className="w-full max-w-6xl mx-auto">
        <Link 
          to="/" 
          className="inline-flex items-center text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        <header className="mb-12">
          <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100">My Projects</h1>
          <p className="text-slate-600 dark:text-slate-400 mt-2">
            A collection of my recent work and contributions
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-slate-800 rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden"
            >
              <div 
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${project.image})` }}
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-2">
                  {project.title}
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100"
                  >
                    <Github className="w-4 h-4" />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;