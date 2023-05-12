import { PageWrap } from 'components/pageWrap/PageWrap';
import { SearchForm } from 'components/searchForm/SearchForm';
import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { getMoviesByQuery } from 'services/Api';

const Movies = () => {
  const [searchResults, setSearchResults] = useState([]);

  const [searchQuery, setSearchQuery] = useSearchParams();
  const query = searchQuery.get('query') ?? '';

  const location = useLocation();

  const handleFormSubmit = searchQueryFromForm => {
    setSearchQuery(
      searchQueryFromForm !== '' ? { query: searchQueryFromForm } : {}
    );
  };

  useEffect(() => {
    if (query) {
      try {
        getMoviesByQuery(query).then(res => {
          setSearchResults([...res.results]);
        });
      } catch (error) {
        console.log(error);
      }
    }
  }, [query]);

  return (
    <PageWrap>
      <SearchForm onSubmit={handleFormSubmit}></SearchForm>
      {searchResults.length === 0 && query !== '' && (
        <p>The search has not given any results</p>
      )}

      {searchResults.length > 0 && (
        <h1>
          Search results for keyword <em>{query}</em>:
        </h1>
      )}
      <ul>
        {searchResults.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </PageWrap>
  );
};

export default Movies;
