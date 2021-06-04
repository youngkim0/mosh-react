import Like from "./common/like";
import { getMovies } from "../services/fakeMovieService";
import { useState } from "react";
import Pagination from "./common/pagination";

const Movies = () => {
  const [movies, setMovies] = useState(getMovies());
  const [pageSize, setPageSize] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);

  const handleDelete = (movie) => {
    const newMovies = movies.filter((m) => m._id !== movie._id);
    setMovies(newMovies);
  };

  const handleLike = (movie) => {
    const newMovies = [...movies];
    const index = newMovies.indexOf(movie);
    newMovies[index] = { ...movies[index] };
    newMovies[index].liked = !movies[index].liked;
    setMovies(newMovies);
  };

  const { length: count } = movies;

  const displayheader = () => {
    return count === 0
      ? "There are no movies in the database"
      : `Showing ${movies.length} movies in the database`;
  };

  const handlePageChange = (page) => {
    console.log(page);
  };

  return (
    <div>
      <p>{displayheader()}</p>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Stock</th>
            <th>Rate</th>
            <th />
            <th />
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <Like liked={movie.liked} onClick={() => handleLike(movie)} />
              </td>
              <td>
                <button
                  onClick={() => handleDelete(movie)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        pageSize={pageSize}
        itemsCount={count}
        onPageChange={handlePageChange}
        currentpage={currentPage}
      />
    </div>
  );
};

export default Movies;
