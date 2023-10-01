import React from "react";

function Done(props) {
  return (
    <div>
      <ul>
        {props.todos
          .filter((data) => data.status === "done")
          .map((data, index) => (
            <li
              style={{
                backgroundColor: "#437512",
                height: "50%",
                width: "50%",
              }}
              key={data.id}
            >
              <p> {data.task} </p>{" "}
              <button
                id="button3"
                onClick={() => props.taskDoneStatus(data.id, "inprogress")}
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
                  <span>Moved to done:{data.timestamp}</span>
                )}
              </p>{" "}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Done;
