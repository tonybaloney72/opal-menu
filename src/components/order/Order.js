import React from "react";
import styled from "styled-components";
import { OrderItem } from "./OrderItem";

export const Order = ({ order, setOrder, setShowOrder }) => (
  <React.Fragment>
    {order.map((item, idx) => (
      <OrderItem item={item} order={order} setOrder={setOrder} key={idx} />
    ))}
  </React.Fragment>
);
