import data from "./data";
import { useState } from "react";
function Accordion() {
  const [selected, setSelected] = useState();
  const toggle = (i) => {
    if (selected === i) {
      return null;
    } else {
      setSelected(i);
    }
  };
  return (
    <>
      <div className="wrapper">
        <div className="accordion">
          <h2 style={{ textAlign: "center" }}>question?</h2>
          {data.map((value, i) => {
            return (
              <div className="item" key={i}>
                <div className="title" onClick={() => toggle(i)}>
                  <h4>{value.question}</h4>
                  <span>{selected === i ? "-" : "+"}</span>
                </div>
                <div className={selected === i ? "content show" : "content"}>
                  <p>{value.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default Accordion;
