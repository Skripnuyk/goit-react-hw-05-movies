import { StyledHeaderWrap } from './HeaderWrap.styled';
import PropTypes from 'prop-types';

export const HeaderWrap = ({ children }) => {
  return <StyledHeaderWrap>{children}</StyledHeaderWrap>;
};

HeaderWrap.propTypes = {
  children: PropTypes.node,
};