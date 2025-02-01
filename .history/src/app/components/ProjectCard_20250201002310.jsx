import React from 'react';
import Link from 'next/link';
import { GiEntryDoor } from "react-icons/gi";

const ProjectCard = ({ imgUrl, title, description }) => {
  return (
    <div>
        <div 
            className="h-52 md:h-72 rounded-t-xl relative group"
            style={{ background: `url(${imgUrl})`, backgroundSize: "cover"}}
        >
            <div className="overlay absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
                <Link href="/projects" className="h-14 w-14 border-2 relative rounded-full border-accent hover:border-white">
                    <GiEntryDoor className="h-10 w-10 text-accent m-2 cursor-pointer hover:white"/>
                </Link>
            </div>
        </div>
        <div className="text-secondary rounded-b-xl mb-3 bg-accent bg-opacity-50 py-6 px-4">
            <h5 className="text-xl font-semibold">{title}</h5>
            <p className="text-primary">{description}</p>
        </div>
    </div>
  )
}

export default ProjectCard
