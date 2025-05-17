import React from 'react';
import { useNavigate } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6 md:p-10">
      <header className="w-full max-w-6xl mx-auto mb-8 md:mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 text-center md:text-left">
          Kamal Singh
        </h1>
        <p className="text-slate-600 mt-2 text-center md:text-left">
          Welcome to the digital playground where curiosity meets clean code and ideas come to life.
        </p>
      </header>
      
      <main className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioData.map((item, index) => (
            <div 
              key={index}
              className={`
                bg-white rounded-xl shadow-sm hover:shadow-md transition-all 
                transform hover:-translate-y-1 cursor-pointer p-6
                ${item.title === 'Projects' ? 'hover:bg-emerald-50' : ''}
              `}
              onClick={() => item.title === 'Projects' && navigate('/projects')}
            >
              <div className="flex items-center gap-3 mb-4">
                <div 
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: item.color }}
                >
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-xl font-semibold text-slate-800">{item.title}</h2>
              </div>
              <p className="text-slate-600 mb-4">{item.description}</p>
              <div className="text-sm">{item.content}</div>
            </div>
          ))}
        </div>
      </main>
      
      <footer className="w-full max-w-6xl mx-auto mt-8 md:mt-12 text-center text-slate-500 text-sm">
        © {new Date().getFullYear()} • kamalsingh.in
      </footer>
    </div>
  );
}

export default Home;