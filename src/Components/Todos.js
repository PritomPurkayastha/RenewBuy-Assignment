import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Todos.css";
import setContext from "../Context/Context";

export default function Todos() {
  const { data, image } = useContext(setContext);
  
  const task = data.filter((obj) => {
    let task = obj.task;
    let description = obj.description;
    let id = obj.id;
    let completed = obj.completed;
    let inProgress = obj.inProgress;

    return completed === false && inProgress === false;
  });

  console.log(task, "task");
 
  return (
    <div className="todos">
      {task.map((ele) => {
        return (
          <Card key={ele.id} style={{ width: "18rem", marginBottom: "20px" }}>
            <Card.Img variant="top" src={ele.image} />
            <Card.Body>
              <Card.Title>{ele.task}</Card.Title>
              <Card.Text>{ele.description}</Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}
