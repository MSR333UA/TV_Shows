import styled from 'styled-components';

export const ErrorMessage = styled.div`
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;

  text-shadow: 1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue;

  text-align: center;
  margin: ${p => p.theme.space[4]}px;
`;
export const Container = styled.div`
  width: 100vw;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 320px) {
    width: 320px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding-left: 30px;
    padding-right: 30px;
  }
`;

export const MoviesListStyled = styled.ul`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  /* flex-direction: row; */

  justify-content: center;
  margin-top: 100px;
  gap: ${p => p.theme.space[5]}px;
  row-gap: ${p => p.theme.space[6]}px;
`;

export const ListItem = styled.li`
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  border-radius: 8px;

  :hover,
  :focus {
    transform: scale(1.01);
    transition: transform 150ms;
  }
  width: 268px;
  background-color: #21212152;
`;
export const WrapperText = styled.div`
  padding: 10px;
  text-align: center;
  letter-spacing: 0.06em;
`;

export const ScoreText = styled.p`
  font-family: 'Roboto-Medium';
  font-size: 12px;
  padding-top: 10px;

  color: ${p => p.theme.colors.text};
`;

export const Title = styled.h1`
  padding: ${p => p.theme.space[4]}px;

  font-family: 'Roboto-Bold';

  text-transform: uppercase;

  color: ${p => p.theme.colors.text};
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
`;

export const TitleMovie = styled.h2`
  font-size: 16px;
  text-align: center;
  font-family: 'Roboto-Bold';
  color: #711313;
`;

export const Img = styled.img`
  display: block;
  width: 100%;
  height: 80%;
  margin: 0;
  border-radius: 8px 8px 0 0;
`;
