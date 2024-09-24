import { DeviceFrameset } from "react-device-frameset";
import "react-device-frameset/styles/marvel-devices.min.css";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "./ui/button";

const DeviceScreen = () => {
  return (
    <div className="mt-10" data-aos="fade">
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
          </div>
        </div>
      </DeviceFrameset>
    </div>
  );
};

export default DeviceScreen;
