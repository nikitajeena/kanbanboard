import React, { useState } from "react";
import Todo from "../Todo";
import Inprogress from "../InProgress";
import Done from "../Done"

function InputField() {
  const [task, settask] = useState("");
  const [todos, setTodos] = useState([]);
  const [buttonStatus, setButtonStatus] = useState(false);
  const [timestamps, setTimestamp] = useState([]);

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

  // const taskStatus = (index, newStatus) => {
  //   const taskList = [...todos];
  //   taskList[index].status = newStatus;
  //   taskList[index].timestamp = new Date().toLocaleString();

  //   if (newStatus === "done") {
  //     taskList[index].completedAt = new Date().toLocaleString(); // Update the timestamp when marked as done
  //   }

  //   setTodos(taskList);
  // };

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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => {
            settask(e.target.value);
          }}
          value={task}
          type="text"
        />
        {/* <Todo todo={task} todos={todos} /> */}
        <button type="submit">Add</button>
      </form>
      <div>
        <h2> TODO </h2>
        {/* <ul>
          {todos
            .filter((data) => data.status === "todo")
            .map((data, index) => (
              <li key={data.id}>
                {data.task}{" "}
                <button
                  id="button1"
                  onClick={() => taskStatus(data.id, "inprogress")}
                >
                  Next
                </button>{" "}
                <button
                  id="button2"
                  disabled={data.status == "todo" ? true : false}
                >
                  {" "}
                  prev
                </button>
                <p>Created At: {data.createdAt}</p>
                <p>
                  {data.timestamp && (
                    <span>Button clicked at: {data.timestamp}</span>
                  )}
                </p>
              </li>
            ))}
        </ul> */}
        <Todo todos={todos} status="Todo"  todoToinprogress={taskStatus} />
      </div>

      <div>
        <h2> In-Progress Todos </h2>
        {/* <ul>
          {todos
            .filter((data) => data.status === "inprogress")
            .map((data, index) => (
              <li key={data.id}>
                {data.task}
                <button
                  id="button3"
                  disabled={buttonStatus}
                  onClick={() => taskStatus(data.id, "todo")}
                >
                  prev
                </button>{" "}
                <button
                  id="button4"
                  disabled={buttonStatus}
                  onClick={() => taskStatus(data.id, "done")}
                >
                  next
                </button>{" "}
                <p>
                  {data.timestamp && (
                    <span>Button clicked at: {data.timestamp}</span>
                  )}
                </p>
              </li>
            ))}
        </ul> */}
        <Inprogress
          todos={todos}
          status="In Progress"
          InprogresStateChange={taskStatus}
        />
      </div>

      <div>
        <h2> Done </h2>
        {/* <ul>
          {todos
            .filter((data) => data.status === "done")
            .map((data, index) => (
              <li key={data.id}>
                {data.task}
                <button
                  id="button3"
                  disabled={buttonStatus}
                  onClick={() => taskStatus(data.id, "inprogress")}
                >
                  prev
                </button>{" "}
                <button
                  id="button4"
                  disabled={data.status == "done" ? true : false}
                >
                  next
                </button>{" "}
                <p>
                  {data.timestamp && (
                    <span>Button clicked at: {data.timestamp}</span>
                  )}
                </p>{" "}
              </li>
            ))}
        </ul> */}
                <Done todos={todos} status="Done" taskDoneStatus={taskStatus} />

      </div>

      <div className="columns">
        {/* <Todo todos={todos} status="Todo" todoToinprogress={taskStatus} /> */}
        {/* <TodoColumn todos={todos} status="In Progress" onMoveTask={taskStatus} /> */}
      </div>
    </div>
  );
}

export default InputField;
