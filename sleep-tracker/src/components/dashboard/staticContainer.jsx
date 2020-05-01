import React from "react";
import {Link } from "react-router-dom";

import SleepEntryForm from "./dashContent/SleepEntryForm";
const StaticContainer = () => {
  return (
    <div className="static-container">
      <div className="static-side-bar">
        side bar says hello
      </div>
      <SleepEntryForm />
    </div>
  )
}
export default StaticContainer