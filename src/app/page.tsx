import { getTokens } from "next-firebase-auth-edge";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import { clientConfig, serverConfig } from "../../config";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { DeviceFrameset } from "react-device-frameset";
import "react-device-frameset/styles/marvel-devices.min.css";
import { Skeleton } from "@/components/ui/skeleton";
import LinkScreen from "@/components/LinkScreen";
import ProfileScreen from "@/components/ProfileScreen";

export default function Home() {
  
  const tokens = getTokens(cookies(), {
    apiKey: clientConfig.apiKey,
    cookieName: serverConfig.cookieName,
    cookieSignatureKeys: serverConfig.cookieSignatureKeys,
    serviceAccount: serverConfig.serviceAccount,
  });

  if (!tokens) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <div className="w-full h-screen grid grid-cols-2 lg:grid-cols-5 gap-8">
        <div className="hidden bg-secondary rounded-lg lg:flex items-center flex-col h-[95vh] ml-4 col-span-2">
          <div className="mt-10">
            <DeviceFrameset
              device="Samsung Galaxy S5"
              height={500}
              width={300}
              color="white"
            >
              <div className="flex items-center justify-center flex-col mt-8 gap-5">
                <Skeleton className="w-24 h-24 rounded-full bg-background" />
                <Skeleton className="bg-background w-32 h-4 rounded-lg" />
                <Skeleton className="bg-background w-16 h-3 rounded-lg" />

                <div className="w-[80%] gap-5 flex flex-col">
                  <Button className="w-full" variant={"secondary"}></Button>
                  <Button className="w-full" variant={"secondary"}></Button>
                  <Button className="w-full" variant={"secondary"}></Button>
                  <Button className="w-full" variant={"secondary"}></Button>
                  <Button className="w-full" variant={"secondary"}></Button>
                </div>
              </div>
            </DeviceFrameset>
          </div>
        </div>
        <div className="bg-secondary rounded-lg flex items-center flex-col col-span-3 h-5/10 h-[95vh] mr-4 gap-5 overflow-scroll">
          <LinkScreen />
          <hr className="bg-gray-400 w-full" />
          <Button className="px-8 md:px-6 bg-primary md:self-end md:mr-8 md:mb-3 w-full md:w-auto">Save</Button>
        </div>
        
      </div>
    </>
  );
}
