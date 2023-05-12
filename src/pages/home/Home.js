import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'services/Api';
import { Link, useLocation } from 'react-router-dom';
import { PageWrap } from 'components/pageWrap/PageWrap';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    try {
      getTrendingMovies().then(res => setTrendingMovies([...res.results]));
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <PageWrap>
      <h1>Trending today</h1>
      <ul>
        {trendingMovies.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </PageWrap>
  );
};

export default Home;
