import React, { useContext } from "react";
import setContext from "../Context/Context";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

export default function CompletedTodos() {
  const { data } = useContext(setContext);
  const completedTask = data.filter((obj) => {
    return obj.completed;
  });
  return (
    <div className="completed" style={{marginTop: "20px"}}>
      {completedTask.map((ele) => {
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
