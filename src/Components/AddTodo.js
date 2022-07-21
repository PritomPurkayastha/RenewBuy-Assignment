import React, { useContext } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import setContext from "../Context/Context";
import "./AddTodo.css"
let id = 1;

export default function AddTodo() {
  const {
    data,
    setData,
    input,
    setInput,
    inputDesc,
    setInputDesc,
    priority,
    setPriority,
    image,
    setImage,
  } = useContext(setContext);
  const navigate = useNavigate();


  function handleSubmit(event) {
    event.preventDefault();
    if (input !== "" && inputDesc !== "") {
      let copyofData = [...data];
      let obj = {
        task: input,
        description: inputDesc,
        id: id++,
        priority: priority,
        completed: false,
        inProgress: false,
        image: image,
      };

      if (priority === "HIGH") {
        copyofData.unshift(obj);
        setData(copyofData);
        setInput("");
        setInputDesc("");
        setPriority("LOW");
        setImage();
      } else if (priority === "AVERAGE") {
        let newCopy = [];
        let index = 0;

        for (let i = 0; i < copyofData.length; i++) {
          index = i;
          if (copyofData[i].priority === "HIGH") {
            newCopy.push(copyofData[i]);
          } else {
            newCopy.push(obj);
            break;
          }
        }
        for (let i = index; i < copyofData.length; i++) {
          newCopy.push(copyofData[i]);
        }
        setData(newCopy);
        setInput("");
        setInputDesc("");
        setPriority("LOW");
        setImage();
      } else {
        copyofData.push(obj);
        setData(copyofData);
        setInput("");
        setInputDesc("");
        setPriority("LOW");
        setImage();
      }
      navigate("/");
    }
  }
//   console.log(data);
  return (
    <div className="addTodo d-flex justify-content-center align-items-center">
      <Form onSubmit={handleSubmit} >
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Task</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your task here"
            value={input}
            onChange={(event) => {
              setInput(event.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Task Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            onChange={(event) => {
              setInputDesc(event.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Upload Image</Form.Label>
          <Form.Control
            type="file"
            placeholder="Enter your task here"
            onChange={(event) => {
              let file = event.target.files[0];
              setImage(URL.createObjectURL(file));
              console.log(event.target.files[0].name);
            }}
          />
        </Form.Group>
        <Form.Select aria-label="Default select example" onChange={(event)=>{
            setPriority(event.target.value);
            console.log(event.target.value);
        }}>
          <option value="LOW">LOW</option>
          <option value="AVERAGE">AVERAGE</option>
          <option value="HIGH">HIGH</option>
        </Form.Select>
        <br></br>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Button
          variant="primary"
          type="submit"
          onClick={() => {
            navigate("/");
            setInput("");
            setInputDesc("");
            setPriority("low");
          }}
        >
          Cancel
        </Button>
      </Form>
    </div>
  );
}
