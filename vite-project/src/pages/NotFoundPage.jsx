import { Link } from 'react-router-dom';
import GoHomeButton from "../components/GoHomeButton";

const NotFoundPage = () => {
  return (
    <div>
      <Link to="/" style={{color: '#ff6347' }}>
        <h1>
          Page not Found
        </h1>
      </Link>
      <GoHomeButton />
    </div>
  );
};

export default NotFoundPage;