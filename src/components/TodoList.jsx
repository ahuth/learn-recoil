import React from 'react';
import { useRecoilValue } from 'recoil';
import TodoItem from './TodoItem';
import TodoItemCreator from './TodoItemCreator';
import { todoListState } from '../atoms';

export default function TodoList() {
  const todoList = useRecoilValue(todoListState);

  return (
    <div>
      <TodoItemCreator />
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </div>
  );
}
