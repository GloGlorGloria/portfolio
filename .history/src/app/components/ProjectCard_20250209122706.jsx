"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { GiEntryDoor } from "react-icons/gi";

const ProjectCard = ({ imgUrl, title, description, projUrl }) => {
  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="relative w-full h-64 md:h-96 lg:h-[40rem] rounded-xl overflow-hidden group">
        <Image
          src={imgUrl}
          alt={title}
          layout="fill"
          objectFit="contain" // Change to "cover" if cropping is preferred
          objectPosition="center"
          className="rounded-xl"
        />
        {/* Hover Overlay */}
        <div className="absolute inset-0 flex flex-row gap-5 items-center justify-center bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          <Link href={projUrl} className="h-14 w-14 border-2 rounded-full border-accent hover:border-white group/link">
            <GiEntryDoor className="h-10 w-10 text-accent m-2 cursor-pointer group-hover/link:text-white" />
          </Link>
          <h1 className="text-white text-xl font-semibold">{title}</h1>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
