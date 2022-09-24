import React from "react";

const TodoList = ({ todos, handleDelete, handleEdit }) => {
  return (
    <ul className="allTodos">
      {todos.map((t) => (
        <li className="singleTodo">
          
          <span className="todoText" key={t.id}>
            {t.todo}
            
          </span>
          <button className="btns" onClick={() => handleEdit(t.id)}>Edit</button>
          <button className="btns" onClick={() => handleDelete(t.id)}>Delete</button>
          <button className="btns" onClick={() => handleDelete(t.id)}>done</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
