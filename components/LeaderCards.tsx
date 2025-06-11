"use client";

import Image, { StaticImageData } from "next/image";
// import {
//   FaLinkedinIn,
//   FaTwitter,
//   FaInstagram,
//   FaEnvelope,
// } from "react-icons/fa";
import { useState } from "react";

interface LeaderCardProps {
  name: string;
  title: string;
  image: StaticImageData | string;
  // bio?: string;
}

const LeaderCard = ({ name, title, image }: LeaderCardProps) => {
  const [isNameHovered, setIsNameHovered] = useState(false);
  const [isTitleHovered, setIsTitleHovered] = useState(false);
  console.log(isNameHovered, isTitleHovered);

  // const socialLinks = [
  //   { icon: FaEnvelope, href: "#", label: "Email" },
  //   { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
  //   { icon: FaTwitter, href: "#", label: "Twitter" },
  //   { icon: FaInstagram, href: "#", label: "Instagram" },
  // ];

  return (
    <div className="w-full bg-white overflow-hidden shadow-lg rounded-2xl">
      {/* Image with overlay text */}
      <div className="relative">
        <div className="relative h-80 w-full rounded-t-2xl">
          <Image
            src={image}
            alt={name}
            className="h-full w-full object-cover rounded-t-2xl"
            priority
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-t-2xl" />

          {/* Name and title positioned over image */}
          <div className="absolute flex flex-col bottom-0 left-0 w-full p-4 text-white">
            <div
              className="relative inline-block"
              onMouseEnter={() => setIsNameHovered(true)}
              onMouseLeave={() => setIsNameHovered(false)}
            >
              <h3 className="text-xl font-bold tracking-tight">{name}</h3>
            </div>
            <div
              className="relative inline-block"
              onMouseEnter={() => setIsTitleHovered(true)}
              onMouseLeave={() => setIsTitleHovered(false)}
            >
              <p className="text-sm text-gray-200">{title}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Always visible content section */}
      {/* <div className="bg-white p-4">
  
        {bio && (
          <div className="mb-3">
            <h4 className="text-base font-semibold text-gray-800 mb-1">
              About
            </h4>
            <p className="text-sm text-gray-600">{bio}</p>
          </div>
        )}

        <div>
          <h4 className="text-base font-semibold text-gray-800 mb-2">
            Connect
          </h4>
          <div className="grid grid-cols-2 gap-2">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="flex items-center justify-center px-2 py-1.5 rounded-lg bg-gray-100 text-gray-700 hover:bg-red-500 hover:text-white transition-colors duration-200"
                aria-label={`Connect with ${name} on ${social.label}`}
              >
                <social.icon className="h-3.5 w-3.5 mr-1.5" />
                <span className="text-sm">{social.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default LeaderCard;
