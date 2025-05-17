import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack online shopping platform built with React, Node.js, and PostgreSQL. Features include user authentication, product management, shopping cart, and secure checkout.',
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'TypeScript'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/example/ecommerce'
  },
  {
    title: 'Task Management App',
    description: 'A productivity tool for managing tasks and projects. Features include drag-and-drop task organization, team collaboration, and real-time updates.',
    image: 'https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'Firebase', 'Tailwind CSS', 'TypeScript'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/example/tasks'
  },
  {
    title: 'Weather Dashboard',
    description: 'A real-time weather tracking application that provides detailed weather information and forecasts for any location worldwide.',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'OpenWeather API', 'Chart.js', 'TypeScript'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/example/weather'
  },
  {
    title: 'Social Media Analytics',
    description: 'A dashboard for tracking and analyzing social media metrics across multiple platforms. Features include custom reports and data visualization.',
    image: 'https://images.pexels.com/photos/7654069/pexels-photo-7654069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'D3.js', 'Node.js', 'MongoDB'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/example/analytics'
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