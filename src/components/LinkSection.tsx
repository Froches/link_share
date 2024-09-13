"use client";

import { useState } from "react";
import { HamburgerMenuIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link2Icon } from "@radix-ui/react-icons";

type LinkSectionProps = {
    icon: string,
    name: string,
    link: string
}
const LinkSection = ({ icon, link, name }: LinkSectionProps) => {

  return (
    <div className="bg-background w-[90%] h-52">
      <div className="flex justify-between text-gray-400 m-2">
        <span className="relative flex items-center">
          <HamburgerMenuIcon className="mx-2" />
          <h5>Link #1</h5>
        </span>
        Remove
      </div>
      <div>
        <div className="w-full flex justify-center items-center flex-col gap-4">
          <div className="w-[95%] flex justify-center items-start flex-col">
            <Label>Platform</Label>
            <Select>
              <SelectTrigger className="bg-secondary self-center mx-4">
                <SelectValue
                  placeholder={
                    <span className="flex items-center justify-center">
                      <GitHubLogoIcon className="mr-2" />
                      <span>{name}</span>
                    </span>
                  }
                />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Item">{name}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="w-[95%] ">
            <Label>Link</Label>
            <span className="relative flex items-center">
              <Link2Icon className="absolute ml-3 pointer-events-none" />
              <Input
                placeholder="e.g. https://www.github.com/johnappleseed"
                className="pl-8"
                value={link}
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkSection;
