import { useState,  Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import {
  MovieDetailsStyled,
  LinkStyled,
  Wrap,
  Title,
  TextWrap,
  ImgWrap,
  SummaryText,
  NavLinkStyled,
} from './DetailsScreen.styled';


import { Container, ErrorMessage } from 'pages/ListScreen/ListScreen.styled';
import { Loader } from 'components/Loader/Loader';


const DetailsScreen = () => {

  const [isLoading, setIsLoading] = useState('false');
  const [error, setError] = useState(null);

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';


  return (
    <section>
      <Container>
        {error !== null && <ErrorMessage>{error.message}</ErrorMessage>}
        {isLoading === 'true' && <Loader />}
        <MovieDetailsStyled>
          <LinkStyled to={backLinkHref}>Go back</LinkStyled>
          <Wrap>
            <ImgWrap>
              {/* <img  /> */}
            </ImgWrap>
            <TextWrap>
              <Title>name</Title>
              <p>
                <b>User score:</b> 
              </p>
              <p>
                <b>Genres:</b> 
              </p>
              <p>
                <b>Status:</b> 
              </p>
              <p>
                <b>Series schedule:</b>{' '}
                
              </p>
              <p>
                <b>Link to the series:</b>
              </p>
              <NavLinkStyled >url</NavLinkStyled>

              <SummaryText>
                <b>Summary:</b>
              </SummaryText>
            
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

export default DetailsScreen;
