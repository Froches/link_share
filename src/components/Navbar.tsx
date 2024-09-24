"use client";

import { Button } from "@/components/ui/button";
import Logo from "@/app/_layouts";
import { Link2Icon, AvatarIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useToggle } from "@/context/ToggleContext";

const Navbar = () => {
  const { isToggled, toggle, setIsToggled } = useToggle();

  const handleToggle = () => {
    if (isToggled === false) {
      setIsToggled(true);
    } else {
      setIsToggled(false);
    }
  };

  return (
    <div className="flex justify-center items-center w-full p-8">
      <div className="flex items-center justify-between rounded-xl gap-8 bottom-4 bg-secondary w-full p-9">
        <div className="flex items-center gap-2">
          <Logo />
          <h3 className="hidden md:block text-3xl font-bold">devlinks</h3>
        </div>

        <div className="flex flex-row gap-8 ">
          <span
            onClick={handleToggle}
            className={`relative flex items-center ${
              isToggled ? "text-black" : "text-primary"
            }`}
          >
            <Link2Icon className="absolute ml-3" />
            <Button
              variant={isToggled ? "link" : "secondary"}
              className={`pl-8 hidden md:block ${
                isToggled ? "text-black" : "text-primary"
              }`}
            >
              Links
            </Button>
          </span>

          <span
            onClick={handleToggle}
            className={`relative flex items-center ${
              isToggled ? "text-primary" : "text-black"
            }`}
          >
            <AvatarIcon className="absolute ml-3" />
            <Button
              variant={isToggled ? "secondary" : "link"}
              className={`pl-8 hidden md:block ${
                isToggled ? "text-primary" : "text-black"
              }`}
            >
              Profile Details
            </Button>
          </span>
        </div>

        <Link href={"/preview"}>
          <span className="relative flex items-center text-primary">
            <EyeOpenIcon className="absolute ml-3" />

            <Button
              variant="outline"
              className="border-primary pl-8 hidden md:block"
            >
              Preview
            </Button>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
