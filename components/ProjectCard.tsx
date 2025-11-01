
import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const ArrowUpRightIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className={className}
    >
        <path d="M7 17l9.2-9.2M17 17V7H7" />
    </svg>
);


const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, link }) => {
  return (
    <a 
      href={link} 
      target={link === "#" ? "_self" : "_blank"}
      rel="noopener noreferrer"
      className="group block w-full"
    >
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 transition-all duration-300 ease-in-out p-4 rounded-lg md:hover:bg-gray-50/70">
        <div className="w-full md:w-1/2 overflow-hidden rounded-lg">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-auto object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h3 className="text-2xl md:text-3xl font-serif mb-4 flex items-center">
            {title}
            <ArrowUpRightIcon className="w-5 h-5 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
          </h3>
          <p className="text-gray-700 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
