import React from "react";
import image1 from "../../assets/p1.png";
import OrderCards from ".";
export default function MapOrdersCard() {
  return (
    <div style={{ display: "flex", flexDirection: "column", rowGap: 30 }}>
      {Data.map((item) => {
        return (
          <>
            <OrderCards {...item} />
          </>
        );
      })}
    </div>
  );
}
const Data = [
  {
    type: "processing",
    date: "On Sat, 9 Jul 2022",
    totalItems: "199",
    outofitedItems: "1",

    image: image1,
    productName: "Roadster",
    productDescription:
      "The  Lifestyle Co Men Maroon Printed Round Neck Pure Cotton T-shirt",
    size: "l",
  },
  {
    type: "SHIPPED",
    date: "On Sat, 9 Jul 2022",
    totalItems: "199",
    outofitedItems: "1",

    image: image1,
    productName: "Roadster",
    productDescription:
      "The  Lifestyle Co Men Maroon Printed Round Neck Pure Cotton T-shirt",
    size: "l",
  },
  {
    type: "DELIVERED",
    date: "On Sat, 9 Jul 2022",
    totalItems: "199",
    outofitedItems: "1",

    image: image1,
    productName: "Roadster",
    productDescription:
      "The  Lifestyle Co Men Maroon Printed Round Neck Pure Cotton T-shirt",
    size: "l",
  },
  {
    type: "CANCELED",
    date: "On Sat, 9 Jul 2022",
    totalItems: "199",
    outofitedItems: "1",

    image: image1,
    productName: "Roadster",
    productDescription:
      "The  Lifestyle Co Men Maroon Printed Round Neck Pure Cotton T-shirt",
    size: "l",
  },
];
