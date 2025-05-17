import React from 'react';
import { Briefcase, Code, User, Award, Github, Linkedin, Mail } from 'lucide-react';
import { CardData } from '../types';

export const portfolioData: CardData[] = [
  {
    title: 'About Me',
    description: 'Know the maker!',
    color: '#3B82F6',
    icon: User,
    content: (
      <div className="space-y-3">
        <p className="text-slate-700">
          I'm a curious and driven software engineer who thrives on building and creating. Whether it's a new app, a clever automation, or a side project just for fun, I enjoy turning ideas into working solutions. With a solid set of technical skills and a problem-solving mindset, I'm always exploring new tools, technologies, and ways to improve.
        </p>
        <div className="flex gap-3">
          <a href="https://github.com/kamal010110011000" className="text-slate-600 hover:text-slate-900 transition-colors">
            <Github  size={20} />
          </a>
          <a href="https://www.linkedin.com/in/kamal-singh-developer/" className="text-slate-600 hover:text-slate-900 transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="mailto:kamalsingh.4iv1@gmail.com" className="text-slate-600 hover:text-slate-900 transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </div>
    )
  },
  {
    title: 'Experience',
    description: 'My professional journey and career highlights.',
    color: '#8B5CF6',
    icon: Briefcase,
    content: (
      <div className="space-y-3">
        <div>
          <h3 className="font-semibold text-slate-800">Full Stack Developer</h3>
          <p className="text-sm text-slate-600">Bimapay Finsure. • 2024(Apr)-Present</p>
        </div>
        <div>
          <h3 className="font-semibold text-slate-800">Full Stack Developer</h3>
          <p className="text-sm text-slate-600">Hashstudioz technologies. • 2022(Feb)-2024(Apr)</p>
        </div>
        <div>
          <h3 className="font-semibold text-slate-800">Full Stack Developer</h3>
          <p className="text-sm text-slate-600">Locma. • 2021(Jan)-2022(Feb)</p>
        </div>
      </div>
    )
  },
  {
    title: 'Skills',
    description: 'Technologies and tools I specialize in.',
    color: '#EC4899',
    icon: Award,
    content: (
      <div className="space-y-3">
        <div>
          <h3 className="font-semibold text-slate-800 mb-2">Frontend</h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-2 py-1 bg-pink-50 text-pink-600 rounded-full text-sm">Nextjs</span>
            <span className="px-2 py-1 bg-pink-50 text-pink-600 rounded-full text-sm">React</span>
            <span className="px-2 py-1 bg-pink-50 text-pink-600 rounded-full text-sm">TypeScript</span>
            <span className="px-2 py-1 bg-pink-50 text-pink-600 rounded-full text-sm">CSS</span>
            <span className="px-2 py-1 bg-pink-50 text-pink-600 rounded-full text-sm">Javascript</span>
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-slate-800 mb-2">Backend</h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-2 py-1 bg-pink-50 text-pink-600 rounded-full text-sm">Node.js</span>
            <span className="px-2 py-1 bg-pink-50 text-pink-600 rounded-full text-sm">Java</span>
            <span className="px-2 py-1 bg-pink-50 text-pink-600 rounded-full text-sm">Mongodb</span>
            <span className="px-2 py-1 bg-pink-50 text-pink-600 rounded-full text-sm">PostgreSQL</span>
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-slate-800 mb-2">Devops</h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-2 py-1 bg-pink-50 text-pink-600 rounded-full text-sm">Jenkins</span>
            <span className="px-2 py-1 bg-pink-50 text-pink-600 rounded-full text-sm">AWS</span>
            <span className="px-2 py-1 bg-pink-50 text-pink-600 rounded-full text-sm">Nginx</span>
          </div>
        </div>
      </div>
    )
  },
  {
    title: 'Projects',
    description: 'Showcase of my recent work and contributions.',
    color: '#10B981',
    icon: Code,
    content: (
      <div className="space-y-3">
        <div>
          <h3 className="font-semibold text-slate-800">Comming Soon...</h3>
          <p className="text-sm text-slate-600">just right there...</p>
        </div>
        <div>
          <h3 className="font-semibold text-slate-800">Comming Soon...</h3>
          <p className="text-sm text-slate-600">just right there...</p>
        </div>
        <div>
          <h3 className="font-semibold text-slate-800">Comming Soon...</h3>
          <p className="text-sm text-slate-600">just right there...</p>
        </div>
      </div>
    )
  },
  {
    title: 'Utility',
    description: 'Small utility tools for fun',
    color: '#8B5CF6',
    icon: Briefcase,
    content: (
      <div className="space-y-3">
        <div>
          <h3 className="font-semibold text-slate-800">Name Match</h3>
          <p className="text-sm text-slate-600">Phonetic and textual match.</p>
        </div>
        <div>
          <h3 className="font-semibold text-slate-800">Encryption / Decryption</h3>
          <p className="text-sm text-slate-600">Almost all type of encryption and decryptions</p>
        </div>
        <div>
          <h3 className="font-semibold text-slate-800">Encoding / Decoding</h3>
          <p className="text-sm text-slate-600">Almost all type of encoding and decodings</p>
        </div>
      </div>
    )
  },
  {
    title: 'Blog',
    description: 'Go on, to the next one, only personal thoughts here. ',
    color: '#8B5CF6',
    icon: Briefcase,
    content: (
      <div className="space-y-3">
        <div>
          <h3 className="font-semibold text-slate-800">Classified</h3>
          <p className="text-sm text-slate-600">classified info...</p>
        </div>
        <div>
          <h3 className="font-semibold text-slate-800">Classified</h3>
          <p className="text-sm text-slate-600">classified info...</p>
        </div>
        <div>
          <h3 className="font-semibold text-slate-800">Classified</h3>
          <p className="text-sm text-slate-600">classified info...</p>
        </div>
      </div>
    )
  },
  {
    title: 'Personal Space',
    description: 'Just some personal or public photography and videos',
    color: '#8B5CF6',
    icon: Briefcase,
    content: (
      <div className="space-y-3">
        <div>
          <h3 className="font-semibold text-slate-800">Classified</h3>
          <p className="text-sm text-slate-600">classified info...</p>
        </div>
        <div>
          <h3 className="font-semibold text-slate-800">Classified</h3>
          <p className="text-sm text-slate-600">classified info...</p>
        </div>
        <div>
          <h3 className="font-semibold text-slate-800">Classified</h3>
          <p className="text-sm text-slate-600">classified info...</p>
        </div>
      </div>
    )
  },
];