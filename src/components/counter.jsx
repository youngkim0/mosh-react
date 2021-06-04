const Counter = (props) => {
  const getBadgeClasses = () => {
    let classes = "badge m-2 bg-";
    classes += props.value === 0 ? "warning" : "primary";
    return classes;
  };

  return (
    <div className="row">
      <div className="col-1">
        <span style={{ fontSize: 20 }} className={getBadgeClasses()}>
          {props.value}
        </span>
      </div>
      <div className="col">
        {" "}
        <button
          onClick={() => props.onReduction(props)}
          className="btn btn-secondary btn-sm"
          disabled={props.value === 0 ? "disabled" : ""}
        >
          -
        </button>
        <button
          onClick={() => props.onIncrement(props)}
          className="btn btn-secondary btn-sm m-2"
        >
          +
        </button>
        <button
          onClick={() => props.onDelete(props.id)}
          className="btn btn-sm btn-danger"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Counter;
