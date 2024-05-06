import { useEffect, useState } from "react";

const Data = () => {
  let [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:2010/drinks/wine")
      .then((res) => res.json())
      .then((output) => setData(output));
  }, []);
  return (
    <div>
      <ul>
        {data.map((Element, index) => (
          <li key={index}>
            {Element.AlcoholPercentage} - {Element.Country}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Data;
