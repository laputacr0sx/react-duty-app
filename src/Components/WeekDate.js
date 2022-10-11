import moment from "moment";

import { WEEKDATE } from "../data/DUMMY";

import "./WeekDate.css";

export default function WeekDate({ correspondingWeekDates }) {
  return (
    <div>
      {correspondingWeekDates.map((date) => {
        return (
          <div className={"weekDate"} key={date}>
            <div className={"date"}>
              {moment(date, "YYYYMMDD ddd").format("DD/MM ddd")}
            </div>
            <div className={"dutyPrefix"}>{"U15"}</div>
            <div className={"dutyNumber"}>{"dutyNumber"}</div>
          </div>
        );
      })}
    </div>
  );
}
