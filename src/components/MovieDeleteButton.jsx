import './MovieDeleteButton.css';

const MovieDeleteButton = (props) => {
  return <button onClick={props.deleteMovie}>Delete film</button>;
};

export default MovieDeleteButton;
