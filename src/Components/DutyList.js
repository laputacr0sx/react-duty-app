import AddIcon from "@mui/icons-material/Add";
import { IconButton } from "@mui/material";
import moment from "moment";
import React, { useEffect, useState } from "react";

const currentWeekNumber = moment().isoWeeks();

export default function DutyList() {
  const [weekNumber, setWeekNumber] = useState(0);

  function clickHandler() {
    setWeekNumber(weekNumber + 1);
  }

  const decrement = () => {
    if (weekNumber === 1) return;
    setWeekNumber(weekNumber - 1);
  };

  useEffect(() => {
    correspondingWeek(weekNumber);
  }, [weekNumber]);

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
