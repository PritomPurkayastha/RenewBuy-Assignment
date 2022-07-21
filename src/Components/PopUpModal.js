import React, { useContext } from "react";
import setContext from "../Context/Context";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "bootstrap/dist/css/bootstrap.min.css";

export default function PopUpModal() {
  const {
    popup,
    setPopUp,
    data,
    setData,
    selectedID,
    setSelectedID,
    category,
    setCategory,
  } = useContext(setContext);
  const handleClose = () => setPopUp(false);

  const handleSubmit = () => {
    console.log(selectedID, typeof selectedID)
    const newData = [...data];
    newData.map((ele) => {
      if (ele.id === selectedID && category === "InProgress") {
        if (ele.completed === true) {
          return (ele.inProgress = true) && (ele.completed=false);
        } else {
          return (ele.inProgress = true);
        }
      } else if (ele.id === selectedID && category === "Completed") {
        console.log("completed");
        if (ele.inProgress === true) {
          return (ele.completed = true) && (ele.inProgress=false);
        } else {
          return (ele.completed = true);
        }
      } else if (ele.id === selectedID && category === "Todo") {
        console.log("adffesef");
         if (ele.inProgress === true) {
          return (ele.inProgress = false);
        } else if (ele.completed === true) {
          return (ele.completed = false);
        }
      } else {
        return ele.inProgress;
      }
    });
    setData(newData);
    setPopUp(false);
  };

  return (
    <Modal show={popup} onHide={handleClose}>
      <Modal.Body>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Selects Task</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedID}
              label="Age"
              onChange={(event) => {
                setSelectedID(event.target.value);
              }}
            >
              {data.map((ele) => {
                return <MenuItem key={ele.id} value={ele.id}>{ele.task}</MenuItem>;
              })}
            </Select>
          </FormControl>
        </Box>
        <br></br>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Selects Task Type
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={category}
              label="selectedTask"
              onChange={(event) => {
                setCategory(event.target.value)
              }}
            >
              <MenuItem value="Todo">Todo</MenuItem>
              <MenuItem value="InProgress">In Progress</MenuItem>
              <MenuItem value="Completed">Complete</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
