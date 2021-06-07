import { getGenres } from "../../services/fakeGenreService";

const Menu = (props) => {
  const { movies } = props;
  const genres = getGenres();
  console.log(genres);
  return (
    <div>
      <ul className="list-group">
        <li className="list-group-item active" aria-current="true">
          An active item
        </li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li>
      </ul>
    </div>
  );
};

export default Menu;
