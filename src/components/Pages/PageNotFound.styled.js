import styled from "styled-components";

export const Container = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
  height: 100%;
  font-family: "Roboto", Arial, Helvetica, sans-serif;
  color: #000000;
`;

export const PageHeader = styled.h1`
  font-family: "Roboto", Arial, Helvetica, sans-serif;
  color: #000000;
  font-size: 32px;
  margin-top: 16px;
  margin-bottom: 16px;
`;

export const PageParagraph = styled.p`
  font-family: "Roboto", Arial, Helvetica, sans-serif;
  color: #000000;
  font-size: 16px;
  margin-bottom: 16px;
`;

export const PageButton = styled.button`
  width: 100px;
  height: 37px;
  background: transparent;
  font-size: 16px;
  color: #565eef;
  border-radius: 4px;
  border: 1px solid #565eef;
  &:hover {
    background-color: #33399b;
    color: white;
  }
`;
