import './MovieDeleteButton.css';

const MovieDeleteButton = (props) => {
  return (
    <button className='movie-delete-button' onClick={props.deleteMovie}>
      Delete film
    </button>
  );
};

export default MovieDeleteButton;
