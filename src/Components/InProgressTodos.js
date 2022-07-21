import React, { useContext } from "react";
import setContext from "../Context/Context";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

export default function InProgressTodos() {
  const { data } = useContext(setContext);
  const inProgressTask = data.filter((obj) => {
    return obj.inProgress;
  });
  return (
    <div className="inProgress" style={{marginTop: "20px"}}>
      {inProgressTask.map((ele) => {
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
