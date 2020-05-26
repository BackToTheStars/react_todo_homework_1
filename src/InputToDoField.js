import React from 'react';

function ToDoTask(props) {
  return (
    <div>
      <input type="checkbox"
             id="todo"
             name="Go to the beach"
             value="Go"></input>
      <label for="todo">This is the label</label>
    </div>
  );
}

export default ToDoTask;
