import {createStore} from 'redux';
import reducer from './src/reducers/index.reducer';

export default function configureStore(onCompletion) {
  const store = createStore(reducer);
  return {store};
}
