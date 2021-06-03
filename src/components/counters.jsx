import React, { useState } from "react";
import Counter from "./counter";

const Counters = () => {
  const [counters, setCounters] = useState([
    { id: 1, value: 4 },
    { id: 2, value: 0 },
    { id: 3, value: 2 },
    { id: 4, value: 0 },
  ]);

  const handleDelete = (id) => {
    setCounters(counters.filter((counter) => id !== counter.id));
  };
  const handleIncrement = (counter) => {
    const newCounter = [...counters];
    const index = counters.findIndex((c) => c.id === counter.id);
    newCounter[index] = { ...counter };
    newCounter[index].value++;
    setCounters(newCounter);
  };
  const handleReset = () => {
    const newCounters = counters.map((c) => {
      c.value = 0;
      return c;
    });
    setCounters(newCounters);
  };

  return (
    <div>
      <div className="d-grid col-3">
        <button onClick={handleReset} className="btn btn-primary m-2">
          Reset
        </button>
      </div>

      {counters.map((counter) => (
        <Counter
          key={counter.id}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          value={counter.value}
          id={counter.id}
        />
      ))}
    </div>
  );
};

export default Counters;
