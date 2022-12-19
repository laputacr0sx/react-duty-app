import moment from "moment";

export default function WeekDate({ correspondingWeekDates }) {
  const clickHandler = () => {
    console.log(`element clicked`);
  };

  function handlerInput() {
    console.log(`element clicked`);
  }

  return (
    <div>
      {correspondingWeekDates.map((date) => {
        return (
          <div
            className={
              "align-center m-2 flex justify-between  rounded-2xl bg-blue-400 p-3 px-5 text-left text-gray-900"
            }
            onClick={clickHandler}
            key={date}
          >
            <div className={"font-mono"}>
              {moment(date, "YYYYMMDD ddd").format("DD/MM ddd")}
            </div>
            <div className={"font-sans"}>{"U15"}</div>
            <input
              type={"text"}
              onChange={handlerInput}
              className={
                "w-14 rounded border-2 bg-transparent p-1 font-mono placeholder-amber-50"
              }
              placeholder={"101"}
              value={""}
            />
          </div>
        );
      })}
    </div>
  );
}
