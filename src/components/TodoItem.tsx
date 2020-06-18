import React from 'react';
import { useRecoilState } from 'recoil';
import { todoListState, TodoItem as Item } from '../atoms';

type Props = {
  item: Item,
}

export default function TodoItem({ item }: Props) {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((listItem) => listItem.id === item.id);

  function editItemText(event: React.ChangeEvent<HTMLInputElement>) {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: event.target.value,
    });

    setTodoList(newList);
  }

  function toggleItemCompletion() {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });

    setTodoList(newList);
  }

  function deleteItem() {
    const newList = removeItemAtIndex(todoList, index);
    setTodoList(newList);
  }

  const textId = 'todo-item-text-' + item.id;
  const completeId = 'todo-item-complete-' + item.id;

  return (
    <div>
      <label htmlFor={textId}>Todo</label>
      <input type="text" value={item.text} onChange={editItemText} id={textId} />
      <label htmlFor={completeId}>Complete</label>
      <input type="checkbox" checked={item.isComplete} onChange={toggleItemCompletion} id={completeId} />
      <button type="button" onClick={deleteItem}>X</button>
    </div>
  );
}

function replaceItemAtIndex(list: Item[], index: number, item: Item) {
  const clone = list.slice();
  clone[index] = item;
  return clone;
}

function removeItemAtIndex(list: Item[], index: number) {
  const clone = list.slice();
  clone.splice(index, 1);
  return clone;
}
