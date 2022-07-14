import React from "react";
import styled from "styled-components";
import { getMenuItems } from "./getMenuItems";
import { MenuItem } from "./MenuItem";

export const Menu = ({ order, setOrder }) => {
  const menuItems = getMenuItems();

  return (
    <React.Fragment>
      <MenuTitle>Select items below to add to your order:</MenuTitle>
      {menuItems.map((item, idx) => (
        <MenuItem item={item} key={idx} order={order} setOrder={setOrder} />
      ))}
    </React.Fragment>
  );
};

const MenuTitle = styled.h3`
  text-align: center;
`;
