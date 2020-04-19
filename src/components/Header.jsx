import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ showAddToggle, showAdd, deleteTodos })=> {
    return (
        <section className="header">
              <button className="header-btn main-black-color" onClick={showAddToggle}>
              {showAdd ? 'Done' : 'Add'}
              </button>
              <h1 className="header-title">Shopping List</h1>
              <button className="header-btn main-red-color" onClick={deleteTodos}>
                Delete</button>
            </section>
    );
};

Header.prototype = {
    showAddToggle: PropTypes.func.isRequired,
    showAdd: PropTypes.bool.isRequired,
    deleteTodos: PropTypes.func.isRequired
};

export default Header;