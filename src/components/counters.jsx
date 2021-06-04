import Counter from "./counter";

const Counters = (props) => {
  return (
    <div>
      <div className="d-grid col-3">
        <button onClick={props.onReset} className="btn btn-primary m-2">
          Reset
        </button>
      </div>

      {props.counters.map((counter) => (
        <Counter
          key={counter.id}
          onDelete={props.onDelete}
          onReduction={props.onReduction}
          onIncrement={props.onIncrement}
          value={counter.value}
          id={counter.id}
        />
      ))}
    </div>
  );
};

export default Counters;
