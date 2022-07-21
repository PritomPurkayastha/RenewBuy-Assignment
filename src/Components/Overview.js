import React, { useContext } from "react";
import "./Overview.css";
import HelpOutlineSharpIcon from "@mui/icons-material/HelpOutlineSharp";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Todos from "./Todos";
import { useNavigate } from "react-router-dom";
import InProgressTodos from "./InProgressTodos";
import setContext from "../Context/Context";
import PopUpModal from "./PopUpModal";
import CompletedTodos from "./CompletedTodos";

export default function Overview() {
  const navigate = useNavigate();

  const { popup, setPopUp, setCategory, setSelectedID, setImage } = useContext(setContext);
  function toggleModal() {
    setPopUp(true);
    setCategory("")
    setSelectedID(0);

  }

  // console.log(popup);
  return (
    <div className="overview">
      <form>
        <div className="overview_left">
          <input type="text" className="overview_input" placeholder="Search" />
        </div>
        <div className="overview_right">
          <HelpOutlineSharpIcon className="icon" />
          <NotificationsNoneOutlinedIcon className="icon" />
          <div className="name">
            <p className="icon">Pritom Purkayastha</p>
            <KeyboardArrowDownOutlinedIcon />
          </div>
          <AccountCircleOutlinedIcon className="icon" />
        </div>
      </form>
      <h2>Projects</h2>
      <div className="overview_projects">
        <div className="overview_card">
          <p className="overview_card_title">Todo</p>
          <button
            className="overview_card_add"
            onClick={() => {
              navigate("/add");
            }}
          >
            +
          </button>
          <Todos />
        </div>

        <PopUpModal />

        <div className="overview_card">
          <p className="overview_card_title">In Progress</p>
          <button className="overview_card_add" onClick={toggleModal}>
            +
          </button>
          <InProgressTodos />
        </div>
        <div className="overview_card">
          <p className="overview_card_title">Completed</p>
          <button className="overview_card_add">+</button>
          <CompletedTodos />
        </div>
      </div>
    </div>
  );
}
