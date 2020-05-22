import React from 'react';
import { useRecoilValue } from 'recoil';
import TodoItem from './TodoItem';
import TodoItemCreator from './TodoItemCreator';
import { filteredTodoListState } from '../selectors';

export default function TodoList() {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <div>
      <TodoItemCreator />
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </div>
  );
}
