import React from "react";
import styled from "styled-components";
import { getMenuItems } from "./getMenuItems";

export const Menu = () => {
  const menuItems = getMenuItems();

  return <h3>Select items below to add to your order:</h3>;
};
