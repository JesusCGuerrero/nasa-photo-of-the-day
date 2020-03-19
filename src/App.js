import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios"
import Top from "./components/Top"
import Bottom from "./components/Bottom"
import Dropdown from "./components/Dropdown"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment"

function App() {

const [data, setData] = useState({})
const [date, setDate] = useState(new Date())
const [formattedDate, setFormattedDate] = useState(moment().format("YYYY-MM-DD"))

const handleOnChange = (newDate) => {
  setDate(newDate)
  setFormattedDate(moment(newDate).format("YYYY-MM-DD"))
}

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=en0MsQg3cwoNyMzt8zjrq2eVddaJzXsJJD6cn766&date=${formattedDate}`)
      .then(response => {
        setData(response.data)
      })
      .catch(error => {
        console.log("data was not returned", error);
      });
  }, [formattedDate]);
  
  console.log(data)
  return (
    <div className="App">
        <DatePicker  
        selected={date}
        onChange={handleOnChange} //only when value has changed
        maxDate={Date.now()}
        />
        <Top title={data.title}date={data.date}/>
        <Bottom  img={data.url} explanation={data.explanation} />
    </div>
  );
}

export default App;
