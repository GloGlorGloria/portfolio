import React from 'react';
import Link from 'next/link';

const ProjectCard = ({ imgUrl, title, description }) => {
  return (
    <div>
        <div 
            className="h-52 md:h-72 rounded-t-xl relative group"
            style={{ background: `url(${imgUrl})`, backgroundSize: "cover"}}
        >
            <div>
                <Link href="/projects">
                </Link>
            </div>
        </div>
        <div className="text-primary rounded-b-xl mb-3 bg-primary py-6 px-4">
            <h5 className="text-xl font-semibold">{title}</h5>
            <p className="text-secondary">{description}</p>
         </div>
    </div>
  )
}

export default ProjectCard
