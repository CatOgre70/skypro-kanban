import styled from "styled-components";

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
  background-color: #565eef;
  border-radius: 4px;
  border: 0;
  outline: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  color: #ffffff;
  float: right;
  &:hover {
    background-color: #33399b;
  }
`;

export const SelectedDay = styled.p`
  margin-top: 0;
  margin-left: 20px;
  margin-right: 20px;
`;
