import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  font-size: 28px;
  font-weight: 600;
  color: #001a00;
  &.active {
    color: rgb(72, 136, 29);
  }
`;

export const ListWrap = styled.ul`
  display: flex;
`;

export const ListItem = styled.li`
  padding: 10px;
`;
