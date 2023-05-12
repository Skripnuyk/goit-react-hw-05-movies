import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MovieDetailsWrap = styled.div`
  display: flex;
  padding: 10px;
`;

export const MovieTextWrap = styled.div`
  padding: 100px 50px;
`;

export const SubMenuList = styled.ul`
  display: flex;
`;

export const SubLink = styled(NavLink)`
  font-size: 20px;
  font-weight: 600;
  color: #001a00;
  &.active {
    color: rgb(72, 136, 29);
  }
`;

export const SubMenuItem = styled.li`
  padding: 10px;
`;
