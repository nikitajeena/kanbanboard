import React from "react";

function Inprogress(props) {
  return (
    <div>
      <ul>
        {props.todos
          .filter((data) => data.status === "inprogress")
          .map((data, index) => (
            <li key={data.id}  style={{
              backgroundColor: "#E8CA00",
              height: '50%',
              width: '50%'
            }}>
              <p> {data.task} </p>
              <button
                id="button3"
                onClick={() => props.InprogresStateChange(data.id, "todo")}
              >
                prev
              </button>{" "}
              <button
                id="button4"
                onClick={() => props.InprogresStateChange(data.id, "done")}
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
      </ul>
    </div>
  );
}

export default Inprogress;
