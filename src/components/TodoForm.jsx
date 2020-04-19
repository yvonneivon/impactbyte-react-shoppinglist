import React from 'react';

const TodoForm = ()=> {
    return (
        <section className="add">
              <form className="add-form">
                <input type="text" placeholder="Item Name" className="add-input" />
                <input type="text" placeholder="Item Description" className="add-input" />
                <input type="url" placeholder="Item URL" className="add-input" />
                <button type="submit" class="add-btn main-black-color">Add</button>
              </form>
            </section>
    );
};

export default TodoForm;