const Counter = (props) => {
  const getBadgeClasses = () => {
    let classes = "badge m-2 bg-";
    classes += props.value === 0 ? "warning" : "primary";
    return classes;
  };

  return (
    <div>
      <span style={{ fontSize: 20 }} className={getBadgeClasses()}>
        {props.value}
      </span>

      <button
        onClick={() => props.onIncrement(props)}
        className="btn btn-secondary btn-sm m-2 mb-3"
      >
        Increment
      </button>

      <button
        onClick={() => props.onDelete(props.id)}
        className="btn btn-sm btn-danger m-2 mb-3"
      >
        Delete
      </button>
    </div>
  );
};

export default Counter;
