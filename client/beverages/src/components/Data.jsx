import { useEffect, useState } from "react";
import axios from "axios";
const Data = () => {
  let [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:2010/drinks/wine")
  //     .then((res) => res.json())
  //     .then((output) => setData(output));
  // }, []);
  useEffect(() => {
    axios
      .get("https://fs-project-1.onrender.com/drinks/wine/")
      .then((output) => setData(output))
      .catch((err) => console.log(err));
  });
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
