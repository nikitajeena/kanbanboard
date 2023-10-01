import React, { useState } from "react";
import Todo from "./Todo";
import Inprogress from "./InProgress";
import Done from "./Done";
import "./style.css";

function DisplayDashboard() {
  const [task, settask] = useState("");
  const [todos, setTodos] = useState([]);
  // const [buttonStatus, setButtonStatus] = useState(false);
  // const [timestamps, setTimestamp] =np useState([]);

  // function handleInput(e) {
  //   settask(e.target.value);
  // }

  function handleSubmit(e) {
    e.preventDefault();
    if (task !== "") {
      setTodos([
        {
          id: `${task}-${Date.now()}`,
          createdAt: new Date().toLocaleString(),
          task,
          status: "todo",
        },
        ...todos,
      ]);

      settask(" ");
    }
  }

  const taskStatus = (taskId, newStatus) => {
    const taskList = [...todos];
    const taskIndex = taskList.findIndex((task) => task.id === taskId);

    if (taskIndex !== -1) {
      taskList[taskIndex].status = newStatus;
      taskList[taskIndex].timestamp = new Date().toLocaleString();

      // if (newStatus === "done") {
      //   taskList[taskIndex].completedAt = new Date().toLocaleString();
      // }

      setTodos(taskList);
    }
  };

  return (
    <div className="Dashboard">
      <h1 className="mainHeading"> Tasks Board </h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => {
            settask(e.target.value);
          }}
          placeholder="Enter your todo"
          value={task}
          type="text"
        />
        {/* <Todo todo={task} todos={todos} /> */}
        <button className="inputTask" type="submit">Add</button>
      </form>
      <div className="taskListDisplay">
        <div className="todoStatus todoinprogress">
          <h2> TODO </h2>
          <Todo todos={todos} status="Todo" todoToinprogress={taskStatus} />
        </div>
        <div className="todoStatus todoinprogress">
          <h2> In-Progress Todos </h2>
          <Inprogress
            todos={todos}
            status="In Progress"
            InprogresStateChange={taskStatus}
          />
        </div>
        <div className="todoStatus todoinprogress">
          <h2> Done </h2>
          <Done todos={todos} status="Done" taskDoneStatus={taskStatus} />
        </div>
      </div>
    </div>
  );
}

export default DisplayDashboard;
