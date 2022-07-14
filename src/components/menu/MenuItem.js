import React from "react";
import styled from "styled-components";

export const MenuItem = ({ item, order, setOrder }) => {
  const name = item.item;
  const options = item.options;

  const addToOrder = (name, size, price) => {
    setOrder([...order, { name: name, size: size, price: price }]);
  };

  return (
    <MenuItemWrapper>
      <h3>{name}</h3>
      {options.map((option) => {
        const size = option.size;
        const price = option.price;
        return (
          <OptionWrapper key={size + price}>
            <div>{size}</div>
            <PriceAddButtonWrapper>
              <div>${price}</div>
              <button
                onClick={() =>
                  setOrder([...order, { name: name, size: size, price: price }])
                }
              >
                Add To Order
              </button>
            </PriceAddButtonWrapper>
          </OptionWrapper>
        );
      })}
    </MenuItemWrapper>
  );
};

const MenuItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`;

const OptionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
`;

const PriceAddButtonWrapper = styled.div``;
