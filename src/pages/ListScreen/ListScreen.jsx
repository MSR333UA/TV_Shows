import { useState } from 'react';

import { Link, useLocation } from 'react-router-dom';
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



import { Loader } from 'components/Loader/Loader';
import { SearchBar } from 'components/SearchForm/SearchForm';

const ListScreen = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState('false');
  const [error, setError] = useState(null);

  const location = useLocation();

  return (
    <section>
      <Container>
        <SearchBar  />
        <MoviesListStyled>
          {movies.map(() => (
            <ListItem >
              <Link state={{ from: location }}>
                <Img  />
                <WrapperText>
                  <TitleMovie>name</TitleMovie>
                  <ScoreText>
                    <b>User score:</b>{' '}
                 
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
