"use client";

import DeviceScreen from "@/components/DeviceScreen";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Skeleton } from "@/components/ui/skeleton";

const Page = () => {
  const router = useRouter();

  const handleBack = () => {
    router.push("/");
  };
  return (
    <div className="bg-background w-full h-screen">
      <div className="h-[35vh] bg-primary rounded-b-[45px] flex justify-center">
        <div className="bg-white w-[95vw] flex justify-between p-4 h-fit mt-6 rounded-xl">
          <Button
            className="rounded-xl text-primary border border-primary"
            variant="outline"
            onClick={handleBack}
          >
            Back to Editor
          </Button>
          <Button className="bg-primary">Share Link</Button>
        </div>
      </div>
      <div className="flex items-start justify-center">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl p-4 shadow-lg flex flex-col">
          <Skeleton className="w-72 h-64 rounded-full bg-background" />
          <Skeleton className="bg-background w-32 h-4 rounded-lg" />
          <Skeleton className="bg-background w-16 h-3 rounded-lg" />

          <div className="w-[80%] gap-5 flex flex-col">
            <Button className="w-full" variant={"secondary"}></Button>
            <Button className="w-full" variant={"secondary"}></Button>
            <Button className="w-full" variant={"secondary"}></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
