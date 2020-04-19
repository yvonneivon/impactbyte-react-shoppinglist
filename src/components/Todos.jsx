import React from 'react';

const Todos = ()=> {
    return (
        <section className="todos">
              <form className="todo">
                <input type="text" placeholder="Item Name" className="add-input" />
                <input type="text" placeholder="Item Description" className="add-input" />
                <input type="url" placeholder="Item URL" className="add-input" />
              </form>
    
              <form className="todo">
                <input type="text" placeholder="Item Name" className="add-input" />
                <input type="text" placeholder="Item Description" className="add-input" />
                <input type="url" placeholder="Item URL" className="add-input" />
              </form>
    
              <form className="todo">
                <input type="text" placeholder="Item Name" className="add-input" />
                <input type="text" placeholder="Item Description" className="add-input" />
                <input type="url" placeholder="Item URL" className="add-input" />
              </form>     
            </section>
    );
};

export default Todos;