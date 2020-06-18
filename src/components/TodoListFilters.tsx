import React from 'react';
import { useRecoilState } from 'recoil';
import { todoListFilterState } from '../atoms';

export default function TodoListFilters() {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  return (
    <div>
      Filter:
      <select value={filter} onChange={(event) => setFilter(event.target.value)}>
        <option value="Show All">All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show Uncompleted">Uncompleted</option>
      </select>
    </div>
  );
}
