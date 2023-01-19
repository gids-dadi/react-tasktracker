import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title, onAdd, onShowAdd }) => {
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button
        text={onShowAdd ? 'Close' : 'Add'}
        color={onShowAdd ? 'red' : 'green'}
        onClick={onAdd}
      />
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};
export default Header;
