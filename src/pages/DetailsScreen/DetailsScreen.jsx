import { useState, useEffect, Suspense } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

import { getMovieDetails } from 'service/API';
import {
  MovieDetailsStyled,
  LinkStyled,
  Wrap,
  Title,
  TextWrap,
  ImgWrap,
  SummaryText,
  LinkUrl,
  UserText,
  GenresText,
  StatusText,
  ScheduleText,
  LinkText,
} from './DetailsScreen.styled';
import { Container, ErrorMessage } from 'pages/ListScreen/ListScreen.styled';
import { Loader } from 'components/Loader/Loader';
import img from '../../assets/else.jpg';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState('false');
  const [error, setError] = useState(null);

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    async function fetchMovie() {
      setIsLoading('true');
      try {
        await getMovieDetails(movieId).then(response => {
          setMovie(response);
          setIsLoading('false');
        });
      } catch (err) {
        setError(err);
      }
    }
    fetchMovie();
  }, [movieId]);

  if (!movie) {
    return null;
  }

  const {
    url,
    image,
    name,
    summary,
    type,
    status,
    rating,
    schedule: { days, time },
  } = movie;
  const show = summary.replace(/<\/?[^>]+(>|$)/g, '');
  return (
    <section>
      <Container>
        {error !== null && <ErrorMessage>{error.message}</ErrorMessage>}
        {isLoading === 'true' && <Loader />}
        <MovieDetailsStyled>
          <LinkStyled to={backLinkHref}>Go back</LinkStyled>
          <Wrap>
            <ImgWrap>
              <img src={!image ? img : image.original} alt={name} />
            </ImgWrap>
            <TextWrap>
              <Title>{name}</Title>
              <UserText>
                <b>User score:</b> {rating.average ?? 'is not available yet...'}
              </UserText>
              <GenresText>
                <b>Genres:</b> {type}
              </GenresText>
              <StatusText>
                <b>Status:</b> {status}
              </StatusText>
              <ScheduleText>
                <b>Series schedule:</b>{' '}
                {days.length === 1
                  ? `${days} ${time}`
                  : `${days.join(', ')} ${time}`}
              </ScheduleText>
              <LinkText>
                <b>Link to the series:</b>{' '}
                <LinkUrl href={url} target="_blank" rel="noopener noreferrer">
                  Link
                </LinkUrl>
              </LinkText>

              <SummaryText>
                <b>Summary:</b>
              </SummaryText>
              {show}
            </TextWrap>
          </Wrap>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </MovieDetailsStyled>
      </Container>
    </section>
  );
};

export default MovieDetails;
