import { getTokens } from "next-firebase-auth-edge";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import { clientConfig, serverConfig } from "../../config";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { DeviceFrameset } from "react-device-frameset";
import "react-device-frameset/styles/marvel-devices.min.css";
import { Skeleton } from "@/components/ui/skeleton";
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
                 <Button className="w-full">Button 1</Button>
                 <Button className="w-full" variant={"secondary"}></Button>
                 <Button className="w-full" variant={"secondary"}></Button>
                 <Button className="w-full" variant={"secondary"}></Button>
                 <Button className="w-full" variant={"secondary"}></Button>
               </div>
             </div>
           </DeviceFrameset>
         </div>
       </div>
       <div className="bg-secondary rounded-lg flex items-center flex-col col-span-3 h-5/10 h-[95vh] mr-4 gap-5">
         <div className="w-5/6 m-12">
           <h2 className="text-3xl font-bold mb-2">Customize your links</h2>
           <p>
             Add/edit/remove links below and then share all your profiles with
             the world!
           </p>
         </div>
         <Button variant="outline" className="w-[90%]">
           + Add new link
         </Button>
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
                           <span>Github</span>
                         </span>
                       }
                     />
                   </SelectTrigger>
                   <SelectContent>
                     <SelectItem value="light">Light</SelectItem>
                     <SelectItem value="dark">Dark</SelectItem>
                     <SelectItem value="system">System</SelectItem>
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
                   />
                 </span>
               </div>
             </div>
           </div>
         </div>
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
                           <span>Github</span>
                         </span>
                       }
                     />
                   </SelectTrigger>
                   <SelectContent>
                     <SelectItem value="light">Light</SelectItem>
                     <SelectItem value="dark">Dark</SelectItem>
                     <SelectItem value="system">System</SelectItem>
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
                   />
                 </span>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
   </>
 );
}
