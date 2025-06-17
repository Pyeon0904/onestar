import Introduce from "@/app/components/sections/Introduce";
import Skill from "@/app/components/sections/Skill";
import React from "react";
import Project from "@/app/components/sections/Project";
import Contact from "@/app/components/sections/Contact";
import Home from "@/app/components/sections/Home";

export default function MainSection() {

  return (
    <>
      <Home/>
      <Introduce/>
      <Skill/>
      <Project/>
      <Contact/>
    </>
  );
}