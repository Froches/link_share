import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Logo from "../_layouts";

const SignUp = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-8">
      <div className="flex items-center gap-2">
        <Logo />
        <h3 className="text-3xl font-bold">devlinks</h3>
      </div>
      <div className="w- h-fit bg-secondary flex flex-col items-center justify-center rounded-md gap-8 p-8">
        <div className="w-5/6 mt-8">
          <h2 className="text-3xl font-bold">Create account</h2>
          <p>Lets get you started sharing your links!</p>
        </div>
        <div className="w-5/6">
          <Label>Email address</Label>
          <Input type="email" placeholder="e.g alex@email.com" required />
        </div>
        <div className="w-5/6">
          <Label>Create password</Label>
          <Input type="password" placeholder="At least 8 characters" required />
        </div>
        <div className="w-5/6">
          <Label>Confirm password</Label>
          <Input type="password" placeholder="At least 8 characters" required />
        </div>
        <p>Password must contain at least 8 characters</p>
        <Button className="w-5/6 bg-primary">Create new account</Button>
        <p>
          Already have an account?{" "}
          <Link href="/login" className="text-primary">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
