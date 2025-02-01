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
                    <a className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-2xl font-semibold transition duration-300 opacity-0 group-hover:opacity-100">
                        View Project
                    </a>
                </Link>
            </div>
        </div>
        <div className="text-blue-900 rounded-b-xl mb-3 bg-[#f9baba] py-6 px-4">
            <h5 className="text-xl font-semibold mb-2">{title}</h5>
            <p className="">{description}</p>
         </div>
    </div>
  )
}

export default ProjectCard
