"use client";

import { useEffect, useState } from "react";
import LinkSection from "@/components/LinkSection";
import GetStarted from "@/components/GetStarted";
import { Button } from "./ui/button";
import AOS from "aos";
import "aos/dist/aos.css";

type Links = {
  index: number;
  icon: string;
  name: string;
  link: string;
};

const LinkScreen = () => {
  const [links, setLinks] =  useState<Links[]>([
    // {
    //   index: 1,
    //   icon: "GithubLogoIcon",
    //   name: "Github",
    //   link: "http",
    // },
    // {
    //   index: 2,
    //   icon: "",
    //   name: "Youtube",
    //   link: "https://youtube.com/Froches",
    // },
    // {
    //   index: 3,
    //   icon: "",
    //   name: "LinkedIn",
    //   link: "https://linkedin.com/Froches",
    // },
  ]);

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
        icon: "",
        name: "",
        link: "",
      },
    ]);
  };
  return (
    <>
      <div className="w-5/6 m-12">
        <h2 className="text-3xl font-bold mb-2" data-aos="fade-down">Customize your links</h2>
        <p>
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
      {links.length > 0 ? (
        links.map((linkItem, index) => (
          <LinkSection
            key={index}
            link={linkItem.link}
            icon={linkItem.icon}
            name={linkItem.name}
          />
        ))
      ) : (
        <div className="bg-background w-11/12 rounded-md">
          <GetStarted />
        </div>
      )}
    </>
  );
};

export default LinkScreen;
