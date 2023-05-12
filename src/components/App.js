import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './layout/Layout';
import Home from '../pages/home/Home';

const Movies = lazy(() => import('../pages/movies/Movies'));

const MovieDetails = lazy(() => import('../pages/movieDetails/MovieDetails'));

const Reviews = lazy(() => import('./reviews/Reviews'));

const Cast = lazy(() => import('./cast/Cast'))

export const App = () => {
  return (
    <>
      <Layout>
        <Suspense>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/movies/" element={<Movies />} />

            <Route path="/movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Routes>
        </Suspense>
      </Layout>
    </>
  );
};
