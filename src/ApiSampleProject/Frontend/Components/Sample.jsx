import React, { useEffect, useState } from "react";
import axios from "axios";

function Sample() {
  const [data, setData] = useState({});

  /*
  useEffect(() => {
    // make API Using axios
    axios
      .get("http://127.0.0.1:5000/Api/App") // url from Route and Flask
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => console.error("Error fetching Data: ", error));
  }, []);
  */

  const fetchFromBackEnd = async () => {
    try {
      // keyword await and axios is library to use POST,GET,CREATE,REQUEST ETC.. then link ng pagkukuha mo ng data
      const response = await axios.post("http://127.0.0.1:5000/Api/App", {
        userMessage: "Hello Rai!", // ito yung makukuha ni flask
      });
      setData(response.data); // inupdate yung setData(UseState) gamit ang response
    } catch (error) {
      alert("Have an Error!");
    }
  };
  //<h1>{data.message}</h1>

  return (
    <div className="App">
      <button onClick={fetchFromBackEnd}>Click to fetch python</button>
      <h1>{data.userMessage}</h1>
    </div>
  );
}

export default Sample;
