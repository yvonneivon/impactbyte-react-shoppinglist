import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TodoForm = ({ addTodo, showAdd })=> {
  const [ value, setValue ] = useState('');
  
  const handleFormSubmit = (event)=> {
    event.preventDefault();

    if (!value) {
      alert('Nothing to add!');
      return;
    }

    addTodo(value)
    setValue('');
  };

  if (showAdd) {
    return (
        <section className="add">
              <form className="add-form" onSubmit={handleFormSubmit}>
                <input type="text" placeholder="Item Name" className="add-input" 
                value={value} 
                onChange={event => setValue(event.target.value)} />
                <input type="text" placeholder="Item Description" className="add-input" />
                <input type="url" placeholder="Item URL" className="add-input" />
                <button type="submit" className="add-btn main-black-color">Add</button>
              </form>
            </section>
    )
  } else {
    return null;
  }
};

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired
};

export default TodoForm;