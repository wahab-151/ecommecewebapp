import React from "react";
import Data from "./data";
import FAQsdAccordions from "./index";

export default function Mapaccordion() {
  return (
    <div>
      {Data.map((val, i) => {
        return (
          <FAQsdAccordions
            key={i}
            Question={val.Question}
            para={val.para}
            expand={i === 0 ? true : false}
          />
        );
      })}
    </div>
  );
}
