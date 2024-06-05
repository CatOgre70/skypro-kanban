import styled from "styled-components";
import {DayPicker} from "react-day-picker";

export const CalendarBlock = styled.div`
    margin: 20px;
    display: flex;
    flex-direction: column;
    font-family: "Roboto", Arial, Helvetica, sans-serif;
    font-size: 12px;
    font-weight: 200;
`;

export const TodayButton = styled.button`
    margin-top: 10px;
    margin-left: 20px;
    margin-right: 20px;
    width: 132px;
    height: 30px;
    background-color: #565EEF;
    border-radius: 4px;
    border: 0;
    outline: none;
    font-size: 14px;
    font-weight: 500;
    line-height: 1;
    color: #FFFFFF;
    float: right;
`;

export const SelectedDay = styled.p`
    margin-top: 0;
    margin-left: 20px;
    margin-right: 20px;
`;