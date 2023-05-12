import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/Api';
import { isEmpty } from 'lodash';
import { CastList, CastItem } from './Cast.styled';

const Cast = () => {
  const [movieCast, setMovieCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    try {
      getMovieCast(movieId).then(res => setMovieCast(res.cast.splice(0, 8)));
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);

  return (
    <>
      {isEmpty(movieCast) ? (
        <p>We don't have any information about cast for this movie</p>
      ) : (
        <>
          <CastList>
            {movieCast.map(actor => {
              let source = '';
              if (!actor.profile_path) {
                source =
                  'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg';
              } else
                source = `https://image.tmdb.org/t/p/w500/${actor.profile_path}`;
              return (
                <CastItem key={actor.id}>
                  <img src={source} alt={`${actor.name}`} />
                  <p>{actor.name}</p>
                  <em>{actor.character}</em>
                </CastItem>
              );
            })}
          </CastList>
        </>
      )}
    </>
  );
};

export default Cast;
