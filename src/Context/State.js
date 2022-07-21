import createTypography from "@mui/material/styles/createTypography";
import React, { useState } from "react";
import setContext from "./Context";
function State({ children }) {
  const [data, setData] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [input, setInput] = useState("");
  const [inputDesc, setInputDesc] = useState("");
  const [priority, setPriority] = useState("LOW");
  const [image, setImage] = useState();
  const [complete, setComplete] = useState([]);
  const [popup, setPopUp] = useState(false);
  const [selectedID, setSelectedID] = useState(0);
  const [category, setCategory] = useState("");

  return (
    <setContext.Provider
      value={{
        data,
        setData,
        completed,
        setCompleted,
        input,
        setInput,
        inputDesc,
        setInputDesc,
        priority,
        setPriority,
        image,
        setImage,
        complete,
        setComplete,
        popup,
        setPopUp,
        selectedID,
        setSelectedID,
        category,
        setCategory,
      }}
    >
      {children}
    </setContext.Provider>
  );
}

export default State;
