"use client";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Navigators from "./components/Navigators";
import ExploreOptions from "./components/ExploreOptions";
import { useSession } from "next-auth/react";

export default function Home() {
  const session = useSession();
  console.log(session)
  return (
    <div>
      <Navbar />
      <Navigators />
      {JSON.stringify(session)}
      <ExploreOptions />
    </div>
  );
}
