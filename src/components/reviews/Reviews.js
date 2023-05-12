import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from 'services/Api';
import { isEmpty } from 'lodash';

const Reviews = () => {
  const [movieReview, setMovieReview] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    try {
      getMovieReviews(movieId).then(res => setMovieReview(res.results));
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);

  return (
    <>
      {isEmpty(movieReview) ? (
        <p>We don't have any reviews for this movie</p>
      ) : (
        <ul>
          {movieReview.map(review => {
            return (
              <li key={review.id}>
                <b>{review.author}</b>
                <p>{review.content}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

export default Reviews;