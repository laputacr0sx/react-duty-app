import moment from "moment";

import { WEEKDATE } from "../data/DUMMY";

import "./WeekDate.css";

export default function WeekDate({ weekNumber }) {
  console.log(moment().days("monday").isoWeeks(weekNumber));

  return (
    <div>
      {weekNumber}
      {WEEKDATE.map((date) => {
        return (
          <div className={"weekDate"} key={date}>
            <div>{moment(date, "YYYYMMDD").format("DD/MM ddd")}</div>
            <div>{"U15"}</div>
            <div>{"dutyNumber"}</div>
          </div>
        );
      })}
    </div>
  );
}
