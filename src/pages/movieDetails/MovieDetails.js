import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMoviesById } from 'services/Api';
import { isEmpty } from 'lodash';
import { PageWrap } from 'components/pageWrap/PageWrap';
import {
  SubLink,
  MovieDetailsWrap,
  MovieTextWrap,
  SubMenuList,
  SubMenuItem,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const { movieId } = useParams();

  const location = useLocation();
  const goBackHref = useRef(location.state?.from || '/');

  useEffect(() => {
    try {
      getMoviesById(movieId).then(res => setMovieDetails(res));
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);

  let source = '';

  if (!movieDetails.poster_path) {
    source =
      'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg';
  } else source = `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`;

  return (
    <PageWrap>
      <Link to={goBackHref.current}>Go back ←</Link>
      {!isEmpty(movieDetails) && (
        <>
          <MovieDetailsWrap>
            <img src={source} alt="poster" width="300px" />
            <MovieTextWrap>
              <h1>
                {movieDetails.title}

                {movieDetails.release_date && (
                  <span
                    style={{
                      padding: '0px 10px',
                      color: 'rgb(72, 136, 29)',
                    }}
                  >
                    ({movieDetails.release_date.slice(0, 4)})
                  </span>
                )}
              </h1>

              <p>
                User score: {Math.round(movieDetails.vote_average * 10) + '%'}
              </p>
              <b>Overview</b>
              <p>{movieDetails.overview}</p>
              <b>Genres</b>
              <p>
                {movieDetails.genres.length > 0
                  ? movieDetails.genres.map(genre => genre.name).join(', ')
                  : 'No information about genres'}
              </p>
            </MovieTextWrap>
          </MovieDetailsWrap>
          <div>
            <h2>Additional information</h2>
            <SubMenuList>
              <SubMenuItem>
                <SubLink to="cast">Cast</SubLink>
              </SubMenuItem>
              <SubMenuItem>
                <SubLink to="reviews">Reviews</SubLink>
              </SubMenuItem>
            </SubMenuList>

            <Suspense>
              <Outlet />
            </Suspense>
          </div>
        </>
      )}
    </PageWrap>
  );
};

export default MovieDetails;
