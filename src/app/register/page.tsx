"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Logo from "../_layouts";
import { EnvelopeClosedIcon, LockClosedIcon } from "@radix-ui/react-icons";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);

  async function handleSignUp(event: FormEvent) {
    event.preventDefault();

    setError("");

    if (password !== confirmation) {
      setError("Passwords don't match");
      return;
    }

    try {
      const res = await createUserWithEmailAndPassword(email, password);
      console.log(res);

      if (typeof window !== "undefined") {
        sessionStorage.setItem("user", JSON.stringify(res?.user));
      }

      setEmail("");
      setPassword("");
      setConfirmation("");

      router.push("/login");
    } catch (e) {
      setError((e as Error).message);
      console.error(e);
    }
  }
  return (
    <main className="w-full h-screen flex flex-col items-center justify-center gap-8">
      <div className="flex items-center gap-2">
        <Logo />
        <h3 className="text-3xl font-bold">devlinks</h3>
      </div>
      <div className="h-fit bg-secondary flex flex-col items-center justify-center rounded-md gap-6 p-8">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <div className="w-5/6">
            <h2 className="text-3xl font-bold mb-2">Create account</h2>
            <p>Lets get you started sharing your links!</p>
          </div>
          <form
            onSubmit={handleSignUp}
            className="space-y-4 md:space-y-6"
            action="#"
          >
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email address
              </label>
              <span className="relative flex items-center text-gray-400">
                <EnvelopeClosedIcon className="absolute ml-3 pointer-events-none" />
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pl-8"
                  placeholder="e.g alex@email.com"
                  required
                />
              </span>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Create password
              </label>
              <span className="relative flex items-center text-gray-400">
                <LockClosedIcon className="absolute ml-3 pointer-events-none" />
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  placeholder="At least 8 characters"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pl-8"
                  required
                />
              </span>
            </div>
            <div>
              <label
                htmlFor="confirm-password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Confirm password
              </label>
              <span className="relative flex items-center text-gray-400">
                <LockClosedIcon className="absolute ml-3 pointer-events-none" />
                <input
                  type="password"
                  name="confirm-password"
                  value={confirmation}
                  onChange={(e) => setConfirmation(e.target.value)}
                  id="confirm-password"
                  placeholder="At least 8 characters"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pl-8"
                  required
                />
              </span>
            </div>
            {error && (
              <div
                className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                role="alert"
              >
                <span className="block sm:inline">{error}</span>
              </div>
            )}
            <button
              type="submit"
              className="w-full text-white bg-primary hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-primary-800"
            >
              Create new account
            </button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-medium text-primary hover:underline dark:text-gray-500"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </main>
  );
}
