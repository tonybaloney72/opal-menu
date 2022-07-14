import { render, screen } from "@testing-library/react";
import { getMenuItems } from "./getMenuItems";

test("Checks to see if getMenuItems returns an array", () => {
  const menuItems = getMenuItems();
  expect(menuItems.length).toBe(3);
  expect(menuItems[0].item).toBe("Burger");
  expect(menuItems[1].item).toBe("Soda");
  expect(menuItems[2].item).toBe("Fries");
});
