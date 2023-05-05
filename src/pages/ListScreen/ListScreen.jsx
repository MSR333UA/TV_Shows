import { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import Notiflix from 'notiflix';
import {
  MoviesListStyled,
  TitleMovie,
  ListItem,
  Img,
  ScoreText,
  WrapperText,
  Container,
  ErrorMessage,
} from './ListScreen.styled';

import img from '../../assets/else.jpg';
import { searchMovies } from 'service/API';
import { SearchBar } from 'components/SearchForm/SearchForm';
import { Loader } from 'components/Loader/Loader';

const ListScreen = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState('false');
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    async function getMoviesBySearch() {
      if (!query) {
        setMovies([]);
        return;
      }
      setIsLoading('true');
      try {
        let cachedQuery = localStorage.getItem('query');
        let response;
        if (cachedQuery && cachedQuery === query) {
          let cachedResponse = JSON.parse(localStorage.getItem('response'));
          response = cachedResponse;
        } else {
          response = await searchMovies(query);
          localStorage.setItem('query', query);
          localStorage.setItem('response', JSON.stringify(response));
        }

        // if (response === 0) {
        //   console.log(response.rating);
        //   return Promise.reject(
        //     new Error('Sorry, nothing found with this search')
        //   );
        // }

        if (response.length === 0) {
          Notiflix.Notify.failure('Sorry, nothing found with this search');
        }
        setMovies(p => (p = response));
        setIsLoading('false');
      } catch (error) {
        setError(error);
      }
    }

    getMoviesBySearch();
  }, [query]);

  const onSubmit = query => {
    setSearchParams(query !== '' ? { query } : '');
  };

  return (
    <section>
      <Container>
        <SearchBar onSubmit={onSubmit} />
        <MoviesListStyled>
          {movies.map(({ show: { image, id, name, rating } }) => (
            <ListItem key={id}>
              <Link to={`${id}`} state={{ from: location }}>
                <Img src={!image ? img : image.original} alt={name} />
                <WrapperText>
                  <TitleMovie>{name}</TitleMovie>
                  <ScoreText>
                    <b>User score:</b>{' '}
                    {rating.average ?? 'is not available yet...'}
                  </ScoreText>
                </WrapperText>
              </Link>
            </ListItem>
          ))}
        </MoviesListStyled>
      </Container>
      {isLoading === 'true' && <Loader />}
      {error !== null && <ErrorMessage>{error.message}</ErrorMessage>}
    </section>
  );
};

export default ListScreen;
