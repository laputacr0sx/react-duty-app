import React, { useState } from "react";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import WeekDate from "./WeekDate";

import "./DutyList.css";

export default function DutyList() {
  const [weekNumber, setWeekNumber] = useState(0);

  function clickHandler() {
    setWeekNumber(weekNumber + 1);
  }

  return (
    <>
      <div className={"appContainer"}>
        <h1>This is the List View</h1>
        <p>{weekNumber}</p>
        <IconButton size={"large"} onClick={clickHandler}>
          <AddIcon fontSize={"inherit"} />
        </IconButton>
        <div>
          <WeekDate weekNumber={weekNumber} />
        </div>
      </div>
    </>
  );
}
