"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { GiEntryDoor } from "react-icons/gi";

const ProjectCard = ({ imgUrl, title, description, projUrl }) => {
  return (
    <Link href={projUrl} className="w-full max-w-xl mx-auto space-y-4 block">
      <div className="relative w-full h-72 md:h-[28rem] lg:h-[45rem] rounded-xl overflow-hidden group cursor-pointer">
        {/* Clickable Image */}
        <Image
          src={imgUrl}
          alt={title}
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          className="rounded-xl transition-transform duration-300 group-hover:scale-105"
        />

        {/* Overlay Section (Also Clickable) */}
        <div className="absolute inset-0 flex flex-col gap-4 items-center justify-center rounded-xl bg-[#181818] bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-500">
          <h1 className="text-white text-xl font-semibold">{title}</h1>
          <h1 className="text-white text-lg font-light">{description}</h1>

          {/* Clickable Icon */}
          <div className="h-14 w-14 border-2 rounded-full border-accent hover:border-white flex items-center justify-center">
            <GiEntryDoor className="h-10 w-10 text-accent group-hover:text-white" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
