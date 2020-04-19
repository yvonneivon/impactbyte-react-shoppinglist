import React from 'react';
import PropTypes from 'prop-types';

const Todo = (props) => {
    return (
        <div className='todo'>
            <span className='todo-text'>{props.todo.name}</span>
            <span className='todo-text'>{props.todo.descriptions}</span>
            <span className='todo-text'>{props.todo.url}</span>
        </div>
    );
};

Todo.prototype = {
    text: PropTypes.object.isRequired,
};

export default Todo;
