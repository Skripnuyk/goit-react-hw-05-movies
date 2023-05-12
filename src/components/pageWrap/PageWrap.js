import PropTypes from 'prop-types';
import { StyledWrap } from './PageWrap.styaled';

export const PageWrap = ({ children }) => {
  return <StyledWrap>{children}</StyledWrap>;
};

PageWrap.propTypes = {
  children: PropTypes.node,
};
