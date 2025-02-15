"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { GiEntryDoor } from "react-icons/gi";

const ProjectCard = ({ imgUrl, title, description, projUrl }) => {
  return (
    <Link href={projUrl}>
      <div className="w-full max-w-xl mx-auto space-y-4">
      <div className="relative w-full h-72 md:h-[28rem] lg:h-[45rem]rounded-xl overflow-hidden group">
      <Image
        src={imgUrl}
        alt={title}
        fill
        style={{ objectFit: "cover", objectPosition: "center" }}
        className="rounded-xl"
      />
         <div className="absolute inset-0 flex flex-row gap-6 items-center justify-between px-6 py-4 rounded-xl bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
  <div className="flex flex-col">
    <h1 className="text-white text-3xl font-bold">{title}</h1>
    <p className="text-white text-base font-light opacity-80">{description}</p>
  </div>

  <div className="h-14 w-14 border-2 rounded-full border-accent hover:border-white flex items-center justify-center">
    <GiEntryDoor className="h-10 w-10 text-accent cursor-pointer group-hover:text-white transition-all duration-300" />
  </div>
</div>
          </div>
        </div>
        {/* Text Content */}
        {/* <div className="text-secondary rounded-b-xl mb-3 bg-accent bg-opacity-50 py-6 px-4">
          <h5 className="text-xl font-semibold">{title}</h5>
          <p className="text-primary">{description}</p>
        </div> */}
      </div>
    </Link>
  );
};

export default ProjectCard;
