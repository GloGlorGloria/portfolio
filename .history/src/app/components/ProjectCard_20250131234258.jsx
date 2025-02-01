import React from 'react';
import Link from 'next/link';

const ProjectCard = ({ imgUrl, title, description }) => {
  return (
    <div>
        <div 
            className="h-52 md:h-72 rounded-t-xl relative group"
            style={{ background: `url(${imgUrl})`, backgroundSize: "cover"}}
        >
            <div></div>
        </div>
        <div className="text-blue-900 rounded-b-xl mb-3 bg-[#f9baba] py-6 px-4">
            <h5 className="text-xl font-semibold mb-2">{title}</h5>
            <p className="">{description}</p>
         </div>
    </div>
  )
}

export default ProjectCard
