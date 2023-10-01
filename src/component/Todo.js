import React from "react";

function Todo(props) {
  return (
    <div>
      <ul className="singleTask">
        {props.todos
          .filter((data) => data.status === "todo")
          .map((data, index) => (
            <li key={data.id}  style={{
              backgroundColor: "#B50000",
              height: '50%',
              width: '50%'
            }}>
              <p>{data.task}{" "}</p>
              <button
                id="button1"
                onClick={() => props.todoToinprogress(data.id, "inprogress")}
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
              <span>Created At: {data.createdAt}</span> <br/>
              <span>
                {data.timestamp && (
                  <span>Moved to todo at: {data.timestamp}</span>
                )}
              </span>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Todo;
