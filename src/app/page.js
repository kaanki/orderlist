"use client";
import App from "@/components/App";
import FoodCreate from "@/components/FoodCreate";
import FoodList from "@/components/FoodList";
import MultipleReturn from "@/hooks/MultipleReturn";
import UserEffectBasic from "@/hooks/UseEffectBasic";
import UseEffectCleanup from "@/hooks/UseEffectCleanup";
import UseEffectFetchData from "@/hooks/UseEffectFetchData";
import AddPicture from "@/projects/AddPicture";
import Carousel from "@/projects/Carousel";
import { Fragment } from "react";

const HomePage = () => {
  return (
    <>
      <AddPicture/>
    </>
  );
};

export default HomePage;
