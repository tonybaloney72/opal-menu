import React, { useState } from "react";
import styled from "styled-components";
import { Menu } from "../menu/Menu";
import { Order } from "../order/Order";

export const Main = () => {
  const [order, setOrder] = useState([]);
  const [showOrder, setShowOrder] = useState(false);
  console.log(showOrder);

  return (
    <MainBody>
      <h2>Welcome to Anthony's Opal Simple Menu!</h2>
      <Menu order={order} setOrder={setOrder} />
      {order.length > 0 && (
        <React.Fragment>
          <div onClick={() => setShowOrder(true)}>
            Click here to show your order
          </div>
          {showOrder && (
            <Order
              order={order}
              setOrder={setOrder}
              setShowOrder={setShowOrder}
            />
          )}
        </React.Fragment>
      )}
      {/* {showOrder && order.length > 0 && (
        <div onClick={() => setShowOrder(false)}>Click here to hide order</div>
      )} */}
      <ClearOrderButton onClick={() => setOrder([])}>
        Clear Order
      </ClearOrderButton>
    </MainBody>
  );
};

const MainBody = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 375px;
  margin: auto;

  h2 {
    text-align: center;
  }
`;

const ClearOrderButton = styled.button`
  margin-top: 50px;
  width: 25%;
  align-self: flex-end;
`;
