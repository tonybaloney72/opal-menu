import React from "react";
import styled from "styled-components";

export const OrderItem = ({ item, order, setOrder }) => {
  console.log(item);
  console.log(order);

  return (
    <OrderItemWrapper>
      <div>{item.name}</div>
      <div>{item.size}</div>
      <div>{item.price}</div>
      {/* <button>Remove from Order</button> */}
    </OrderItemWrapper>
  );
};

const OrderItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
