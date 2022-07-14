import React from "react";
import styled from "styled-components";
import { Menu } from "../menu/Menu";

export const Main = () => {
  return (
    <MainBody>
      <h2>Welcome to Anthony's Opal Simple Menu!</h2>
      <Menu />
    </MainBody>
  );
};

const MainBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
