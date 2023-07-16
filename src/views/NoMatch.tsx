import { useNavigate } from 'react-router-dom';

export default () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate('/')}>home</button>
      <h2>404</h2>
    </div>
  );
};
