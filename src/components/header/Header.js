import { HeaderWrap } from '../headerWrap/HeaderWrap';
import { ListWrap, ListItem, StyledLink } from './Header.styled';

export const Header = () => {
  return (
    <header>
      <HeaderWrap>
        <ListWrap>
          <ListItem>
            <StyledLink to="">Home</StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to="movies">Movies</StyledLink>
          </ListItem>
        </ListWrap>
      </HeaderWrap>
    </header>
  );
};
