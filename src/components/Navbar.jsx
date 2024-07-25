import { Button } from "@/components/ui/button";
import Logo from "@/app/_layouts";
import { Link2Icon, AvatarIcon, EyeOpenIcon } from "@radix-ui/react-icons";
// import Link from "next/link";


const Navbar = () => {
  return (
    <div className="flex justify-center items-center w-full p-8">
      <div className="flex items-center justify-between rounded-lg gap-8 bottom-4 bg-secondary w-full p-8">
        <div className=" sm:flex items-center gap-2">
          <Logo />
          <h3 className="hidden md:inline text-3xl font-bold">devlinks</h3>
        </div>

        <div className="flex flex-row gap-8 ">
          <span className="relative flex items-center">
            <Link2Icon className="absolute ml-3 pointer-events-none" />
            <Button variant="secondary" className="pl-8 hidden md:inline">
              Links
            </Button>
          </span>

          <span className="relative flex items-center">
            <AvatarIcon className="absolute ml-3 pointer-events-none" />
            <Button variant="link" className="pl-8 hidden md:inline">
              Profile Details
            </Button>
          </span>
        </div>

        <span className="relative flex items-center">
          <EyeOpenIcon className="absolute ml-3 pointer-events-none" />
          <Button variant="outline" className="border-primary pl-8 hidden md:inline">
            Preview
          </Button>
        </span>
      </div>
    </div>
  );
};

export default Navbar;