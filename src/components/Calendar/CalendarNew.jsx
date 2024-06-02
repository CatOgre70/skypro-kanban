import {useEffect, useState} from "react";
import { DayPicker } from "react-day-picker";
import {default as defaultStyles} from "./style.module.css";
import {ru} from "date-fns/locale";
import {CalendarBlock, SelectedDay, TodayButton} from "./CalendarNew.styled.js";
import {dateToStringOnlyDate} from "../../date-processing.js";

function CalendarNew() {

    const today = new Date();
    const [month, setMonth] = useState(today);
    const [selected, setSelected] = useState(today);

    useEffect(() => {
        // Поместить selected в контекст диалогового окна
    }, [selected]);

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
                <TodayButton onClick={() => {setMonth(today); setSelected(today)}}>Сегодня</TodayButton>
            </CalendarBlock>
        </>
    )
}

export default CalendarNew;