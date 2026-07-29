import React from 'react';

interface ProjectCardProps {
  title: string;
  tags: string;
  description: string;
  imageUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, tags, description, imageUrl }) => {
  return (
    <div className="project-card">
      <img src={imageUrl || "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"} alt={title} className="project-card-image" />
      <div className="project-card-content">
        <h3 className="project-title">{title}</h3>
        <div className="project-tags">{tags}</div>
        <p className="project-desc">{description}</p>
        <div className="project-footer">
          <a href="#" className="btn btn-outline" style={{ padding: '10px 20px' }}>
            View Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
