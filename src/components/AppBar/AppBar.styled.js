import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 500px;
  text-align: center;
  justify-content: center;
  margin: auto;
  background-color: red;
  gap: ${p => p.theme.space[4]}px;
  font-size: 18px;
  line-height: 24px;
  font-family: 'Roboto-Bold';
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.red};
  border-radius: 8px;
  text-decoration: none;
  padding: ${p => p.theme.space[4]}px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  @media screen and (max-width: 768px) {
    width: 250px;
    font-size: 14px;
    line-height: 18px;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  display: block;

  width: ${p => p.theme.space[7]}px;

  padding: ${p => p.theme.space[4]}px;

  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;

  text-decoration: none;
  text-align: center;
  color: ${p => p.theme.colors.text};
  border-radius: 8px;
  background-color: ${p => p.theme.colors.lightred};
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  &.active {
    background-color: ${p => p.theme.colors.red};
    color: ${p => p.theme.colors.white};
  }
  :hover:not(.active) {
    color: ${p => p.theme.colors.red};
  }
`;
