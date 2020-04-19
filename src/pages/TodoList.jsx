import React, { useState } from 'react';

import Paper from '../components/Paper';
import Header from '../components/Header';
import TodoForm from '../components/TodoForm';
import Todos from '../components/Todos';

const TodoList = ()=> {
  const [ todos, setTodos ] = useState ([
    {text: ""}, 
  ]);

  const [showAdd, setShowAdd] = useState(false);

  const addTodo = value => {
    const addedTodo = [...todos, {text: value}];

    setTodos(addedTodo);
  };

  const showAddToggle = () => setShowAdd(!showAdd);

  const deleteTodos = ()=> setTodos([]);
 
  return (
    <Paper>
      <Header showAddToggle={showAddToggle} showAdd={showAdd} deleteTodos={deleteTodos} />
        <TodoForm addTodo={addTodo} showAdd={showAdd} />
          <Todos todos={todos} />   
    </Paper>
  );
};

export default TodoList;