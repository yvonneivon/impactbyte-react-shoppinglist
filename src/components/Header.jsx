import React from 'react';

const Header = ()=> {
    return (
        <section className="header">
              <button className="header-btn main-black-color">Add</button>
              <h1 className="header-title">Shopping List</h1>
              <button className="header-btn main-red-color">Delete</button>
            </section>
    );
};

export default Header;