"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { GiEntryDoor } from "react-icons/gi";

const ProjectCard = ({ imgUrl, title, description, projUrl }) => {
  return (
    <Link href={projUrl} className="w-full h-full block">
      <div className="relative w-full h-full group">
        {/* Image Container */}
        <div className="relative w-full h-full">
          <Image
            src={imgUrl}
            alt={title}
            fill
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 flex flex-row gap-6 items-center justify-center px-6 py-4 bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
            <div className="flex flex-col">
              <h1 className="text-white text-3xl font-bold">{title}</h1>
              <p className="text-white text-base font-semibold opacity-80">{description}</p>
            </div>
            {/* Door Icon */}
            <div className="h-14 w-14 border-2 rounded-full border-accent hover:border-white group/link">
              <GiEntryDoor className="h-10 w-10 text-accent m-2 cursor-pointer group-hover/link:text-white" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
