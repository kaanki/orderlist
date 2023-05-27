"use client";
import App from "@/components/App";
import FoodCreate from "@/components/FoodCreate";
import FoodList from "@/components/FoodList";
import ControlledInputs from "@/hooks/ControlledInputs";
import MultipleInputs from "@/hooks/MultipleInputs";
import MultipleReturn from "@/hooks/MultipleReturn";
import PropDrill from "@/hooks/PropDrill";
import ShortCircuit from "@/hooks/ShortCircuit";
import ShowHide from "@/hooks/ShowHide";
import UserEffectBasic from "@/hooks/UseEffectBasic";
import UseEffectCleanup from "@/hooks/UseEffectCleanup";
import UseEffectFetchData from "@/hooks/UseEffectFetchData";
import UseReducer from "@/hooks/UseReducer";
import UseRefBasic from "@/hooks/UseRefBasic";
import { Fragment } from "react";

const HomePage = () => {
  return (
    <>
      <PropDrill/>
    </>
  );
};

export default HomePage;
