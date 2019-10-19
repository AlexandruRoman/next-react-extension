import {Store} from 'webext-redux';

const store = new Store();

store.ready().then(() => {
    store.dispatch({type: 'user-clicked-alias'})
  });