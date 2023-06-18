import './AllDeleteButton.css';

const AllDeleteButton = (props) => {
  return (
    <button className='main-delete-button' onClick={props.deleteMovies}>
      Delete All
    </button>
  );
};

export default AllDeleteButton;
