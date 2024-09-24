"use client";

import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import LinkScreen from "@/components/LinkScreen";
import ProfileScreen from "@/components/ProfileScreen";
import { useToggle } from "@/context/ToggleContext";
import DeviceScreen from "@/components/DeviceScreen";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/firebase";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";

export default function Home() {
  const { isToggled, toggle } = useToggle();
  const [user] = useAuthState(auth);
  const router = useRouter();
  const userSession = sessionStorage.getItem("user");


  console.log(user);
  console.log(userSession)
  if (!user && !userSession) {
    router.push("/login");
  }

  return (
    <>
      <Navbar />
      <Button onClick={() => {signOut(auth)}}>Log Out</Button>
      <div className="w-full h-screen grid grid-cols-2 lg:grid-cols-5 gap-8">
        <div className="hidden bg-secondary rounded-xl lg:flex items-center flex-col h-[95vh] ml-6 col-span-2">
          <DeviceScreen />
        </div>
        <div className="bg-secondary rounded-xl flex items-center flex-col col-span-3 h-5/10 h-[95vh] mx-6 lg:ml-0 gap-5">
          {isToggled ? <ProfileScreen /> : <LinkScreen />}

          <hr className="bg-gray-400 w-full shadow-lg" />
          <Button className="px-8 py-6 md:py-0 md:px-6 bg-primary md:self-end md:mr-8 md:mb-3 w-full md:w-auto hover:bg-purple-500 rounded-xl">
            Save
          </Button>
        </div>
      </div>
    </>
  );
}
