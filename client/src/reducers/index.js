import { combineReducers } from 'redux';
import user from './user';
import flash from './flash';
import messages from './messages'

const rootReducer = combineReducers({
  user,
  flash,
  messages,
});

export default rootReducer;
