import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from '../atoms';

export default function TodoItemCreator() {
  const [inputValue, setInputValue] = useState('');
  const setTodoList = useSetRecoilState(todoListState);

  function addItem() {
    setTodoList((prevList) => [
      ...prevList,
      { id: getId(), text: inputValue, isComplete: false },
    ]);

    setInputValue('');
  }

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  return (
    <div>
      <label htmlFor="todo-item-creator-text">Todo</label>
      <input type="text" value={inputValue} onChange={handleChange} id="todo-item-creator-text" />
      <button type="button" onClick={addItem}>Add</button>
    </div>
  );
}

let id = 0;
function getId() {
  id++;
  return id;
}
