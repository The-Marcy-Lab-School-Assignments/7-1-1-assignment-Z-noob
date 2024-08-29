// TODO: 
// - Make the button navigate the user back to the home page
import { useNavigate } from 'react-router-dom';

const GoHomeButton = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleClick = () => {
    navigate('/'); // Navigate to the home page
  };
  return (
    <button className="ui button fluid" onClick={handleClick}>
      Go Home
    </button>
  )
}

export default GoHomeButton;