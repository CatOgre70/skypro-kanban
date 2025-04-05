import { useEffect, useState } from "react";
import { DayPicker } from "react-day-picker";
import { default as defaultStyles } from "./style.module.css";
import { ru } from "date-fns/locale";
import {
  CalendarBlock,
  SelectedDay,
  TodayButton,
} from "./CalendarNew.styled.js";
import { dateToStringOnlyDate } from "../../date-processing.js";

function CalendarNew({ setSelectedDay }) {
  const today = new Date();
  const [month, setMonth] = useState(today);
  const [selected, setSelected] = useState(today);

  useEffect(() => {
    if (selected) {
      let selectedDate = new Date(
        selected.getFullYear(),
        selected.getMonth(),
        selected.getDate(),
        12,
        0,
        0,
        0,
      );
      setSelectedDay(selectedDate);
    } else {
      setSelectedDay(null);
    }
  }, [selected, setSelectedDay]);

  return (
    <>
      <CalendarBlock>
        <DayPicker
          month={month}
          onMonthChange={setMonth}
          locale={ru}
          weekStartsOn={1}
          mode="single"
          selected={selected}
          onSelect={setSelected}
          captionLayout={"buttons"}
          showOutsideDays={true}
          classNames={defaultStyles}
          fixedWeeks={true}
        />
        <SelectedDay>Выбрано: {dateToStringOnlyDate(selected)}</SelectedDay>
        <TodayButton
          onClick={() => {
            setMonth(today);
            setSelected(today);
          }}
        >
          Сегодня
        </TodayButton>
      </CalendarBlock>
    </>
  );
}

export default CalendarNew;
