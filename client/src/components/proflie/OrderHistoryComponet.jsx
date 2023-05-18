import { useState } from "react";

export function OrderHistoryComponet() {
  const history = [
    {
      order: 1,
    },
    {
      order: 2,
    },
    {
      order: 3,
    },
    {
      order: 4,
    },
  ];
  const [orderHistory] = useState(history);

  return (
    <>
      <h3>Order history</h3>
      {orderHistory.map((orders, i) => {
        return (
          <div key={i}>
            <p>order: {orders.order}</p>
          </div>
        );
      })}
    </>
  );
}
