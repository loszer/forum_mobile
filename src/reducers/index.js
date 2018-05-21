import { combineReducers } from 'redux';
import todos from './todos';
import user from './user';
import posts from './posts';
import sections from './sections';

const reducers = combineReducers({
  todos,
  user,
  posts,
  sections,
});

export default reducers;