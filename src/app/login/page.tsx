import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { EnvelopeClosedIcon, LockClosedIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import Logo from "../_layouts";

const page = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-8">
      <div className="flex items-center gap-2">
        <Logo />
        <h3 className="text-3xl font-bold">devlinks</h3>
      </div>
      <div className="w-auto h-fit bg-secondary flex flex-col items-center justify-center rounded-md gap-6 p-8">
        <div className="w-5/6 mt-8">
          <h2 className="text-3xl font-bold mb-2">Login</h2>
          <p>Add your details below to get back into the app</p>
        </div>
        <div className="w-5/6">
          <Label>Email address</Label>
          <span className="relative flex items-center text-gray-400">
            <EnvelopeClosedIcon className="absolute ml-3 pointer-events-none" />
            <Input
              type="email"
              placeholder="e.g alex@email.com"
              className="pl-8"
            />
          </span>
        </div>
        <div className="w-5/6">
          <Label>Password</Label>
          <span className="relative flex items-center text-gray-400">
            <LockClosedIcon className="absolute ml-3 pointer-events-none" />
            <Input
              type="password"
              placeholder="Enter your password"
              className="pl-8"
            />
          </span>
        </div>
        <Button className="w-5/6 bg-primary">Login</Button>
        <p>
          Dont have an account?
          <Link href="/signup" className="text-primary">
            Create account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default page;
