"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { GiEntryDoor } from "react-icons/gi";

const ProjectCard = ({ imgUrl, title, description, projUrl }) => {
  return (
    <Link href={projUrl} className="block">
      <div className="w-full max-w-xl mx-auto space-y-4">
        <div className="relative w-full h-72 md:h-[28rem] lg:h-[45rem] rounded-xl overflow-hidden group">
          <Image
            src={imgUrl}
            alt={title}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="rounded-xl"
          />
          <div className="absolute inset-0 flex flex-row gap-7 items-center justify-center rounded-xl bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
            <h1 className="text-white text-xl font-semibold">{title}</h1>
            <div className="h-14 w-14 border-2 relative rounded-full border-accent hover:border-white group/link">
              <GiEntryDoor className="h-10 w-10 text-accent m-2 group-hover/link:text-white" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
