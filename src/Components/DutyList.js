import moment from "moment";
import React, { useEffect, useState } from "react";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import WeekDate from "./WeekDate";

import "./DutyList.css";

const currentWeekNumber = moment().day("Monday").isoWeeks();

export default function DutyList() {
  const [weekNumber, setWeekNumber] = useState(currentWeekNumber);

  const correspondingWeek = (correspondingWeekNumber) => {
    const Monday = moment()
      .isoWeeks(correspondingWeekNumber)
      .startOf("isoWeeks");

    let dates = [];
    let day = Monday.format("YYYYMMDD ddd");
    for (let i = 0; i < 7; i++) {
      dates.push(day);
      day = Monday.add(1, "days").format("YYYYMMDD ddd");
    }

    return dates;
  };

  useEffect(() => {
    correspondingWeek(weekNumber);
  }, [weekNumber]);

  const increment = () => {
    setWeekNumber(weekNumber + 1);
  };

  const decrement = () => {
    if (weekNumber === 1) return;
    setWeekNumber(weekNumber - 1);
  };

  return (
    <div className={"appContainer"}>
      <div className={"appHeading"}>
        <h1>Duty</h1>
        <div className={"weekController"}>
          <IconButton size={"large"} onClick={decrement}>
            <RemoveIcon fontSize={"inherit"} color={"primary"} />
          </IconButton>
          <h2>{weekNumber}</h2>
          <IconButton size={"large"} onClick={increment}>
            <AddIcon fontSize={"inherit"} color={"primary"} />
          </IconButton>
        </div>
      </div>
      <div>
        <WeekDate correspondingWeekDates={correspondingWeek(weekNumber)} />
      </div>
    </div>
  );
}
