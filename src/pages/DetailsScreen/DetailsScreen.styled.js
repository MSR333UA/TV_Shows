import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieDetailsStyled = styled.div``;

export const AdditionalStyled = styled.ul`
  padding: ${p => p.theme.space[2]}px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${p => p.theme.space[4]}px;
`;

export const LinkStyled = styled(Link)`
  display: block;

  width: ${p => p.theme.space[7]}px;

  padding: ${p => p.theme.space[3]}px;
  margin-bottom: 10px;
  background-color: ${p => p.theme.colors.red};
  color: ${p => p.theme.colors.white};
  text-align: center;
  font-size: 16px;

  border-radius: 8px;
  font-family: 'Roboto-Bold';
  :hover:not(.active) {
    color: ${p => p.theme.colors.red};
    background-color: ${p => p.theme.colors.white};
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  }

  @media screen and (max-width: 768px) {
    width: 250px;
    font-size: 14px;
    line-height: 18px;
    margin: auto;
  }
`;
export const Wrap = styled.div`
  display: flex;
  gap: 30px;
`;
export const ImgWrap = styled.div`
  display: flex;
  justify-content: start;
  gap: ${p => p.theme.space[4]}px;

  padding: ${p => p.theme.space[2]}px;
  img {
    height: 30vw;
  }
  @media screen and (max-width: 768px) {
    margin: auto;
  }
`;

export const TextWrap = styled.div``;

export const Title = styled.h1`
  display: block;

  font-size: 24px;

  font-style: normal;
  font-weight: 700;

  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
`;

export const TitleSecond = styled.p`
  display: block;

  margin: ${p => p.theme.space[2]}px;

  font-size: 18px;

  font-style: italic;
  font-weight: 700;

  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
`;

export const ListItem = styled.li`
  margin-bottom: ${p => p.theme.space[4]}px;
  width: 200px;

  overflow: hidden;

  font-size: 12px;
`;
export const UserText = styled.p``;
export const GenresText = styled.p``;
export const StatusText = styled.p``;
export const ScheduleText = styled.p``;
export const LinkText = styled.p``;
export const SummaryText = styled.p`
  margin-top: 20px;
`;

export const LinkUrl = styled.a`
  font-size: 12px;
  line-height: 24px;
  font-family: 'Roboto-Regular';

  padding: 5px 10px;
  text-decoration: none;
  text-align: center;
  color: ${p => p.theme.colors.text};
  border-radius: 8px;
  background-color: ${p => p.theme.colors.lightred};
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  color: ${p => p.theme.colors.black};

  :hover:not(.active) {
    color: ${p => p.theme.colors.red};
  }
`;
