const Navbar = ({ totalCount }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">
          Total Count
          <span className="badge bg-pill bg-secondary m-2">{totalCount}</span>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
