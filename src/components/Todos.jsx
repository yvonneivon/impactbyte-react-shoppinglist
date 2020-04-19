import React from 'react';
import PropTypes from 'prop-types';

import Todo from './Todo';

const Todos = ({ todos }) => {
    return (
        <section className='todos'>
            {todos.map((todo, index) => {
                return <Todo key={index} todo={todo} />;
            })}
        </section>
    );
};

Todos.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object),
};
export default Todos;
