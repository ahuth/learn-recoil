import { atom } from 'recoil';

export const todoListFilterState = atom({
  key: 'todoListFilterState',
  default: 'Show all',
});

export const todoListState = atom({
  key: 'todoListState',
  default: [],
});
