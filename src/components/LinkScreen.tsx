"use client";

import { useEffect, useState } from "react";
import LinkSection from "@/components/LinkSection";
import GetStarted from "@/components/GetStarted";
import { Button } from "./ui/button";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaGithub,
  FaYoutube,
  FaInstagram,
  FaFacebook,
  FaLinkedinIn,
} from "react-icons/fa";
import linkData from "@/../public/data/linkData.json";

type Links = {
  index: number;
  icon: any;
  name: string;
  link: string;
};

const iconMap: any = {
  GitHub: FaGithub,
  YouTube: FaYoutube,
  Instagram: FaInstagram,
  Facebook: FaFacebook,
  LinkedIn: FaLinkedinIn,
};

const LinkScreen = () => {
  const [links, setLinks] = useState<Links[]>(
    linkData.map((item) => ({
      ...item,
      icon: iconMap[item.icon] || FaGithub,
    }))
  );

  const [newLink, setNewLink] = useState({ icon: "", name: "", link: "" });

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  const handleAddLink = () => {
    setLinks((prevLinks) => [
      ...prevLinks,
      {
        index: prevLinks.length + 1,
        icon: FaGithub,
        name: "",
        link: "",
      },
    ]);
  };

  const handleLinkChange = (index: number, field: string, value: string) => {
    setLinks((prevLinks) =>
      prevLinks.map((linkItem, i) =>
        i === index
          ? {
              ...linkItem,
              [field]: value,
              icon:
                field === "name" ? iconMap[value] || FaGithub : linkItem.icon,
            }
          : linkItem
      )
    );
  };
  return (
    <>
      <div className="w-5/6 m-12">
        <h2 className="text-3xl font-bold mb-2" data-aos="fade">
          Customize your links
        </h2>
        <p className="text-gray-400">
          Add/edit/remove links below and then share all your profiles with the
          world!
        </p>
      </div>
      <Button
        variant="outline"
        className="w-[90%] border border-primary text-primary"
        onClick={handleAddLink}
      >
        + Add new link
      </Button>
      <div className="flex flex-col-reverse w-full items-center justify-center gap-6 h-max">
        {links.length > 0 ? (
          links.map((linkItem, index) => (
            <LinkSection
              key={index}
              index={index}
              link={linkItem.link}
              icon={linkItem.icon}
              name={linkItem.name}
              onLinkChange={(field: any, value: any) =>
                handleLinkChange(index, field, value)
              }
            />
          ))
        ) : (
          <div className="bg-background w-11/12 rounded-md">
            <GetStarted />
          </div>
        )}
      </div>
    </>
  );
};

export default LinkScreen;
