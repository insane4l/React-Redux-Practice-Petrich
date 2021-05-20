import {createStore, bindActionCreators} from 'redux';
import reducer from './reducer';
import * as actions from './actions';

const store = createStore(reducer);
const {dispatch} = store;

const {inc, dec, rndm} = bindActionCreators(actions, dispatch);

document.getElementById('inc').addEventListener('click', inc)
document.getElementById('dec').addEventListener('click', dec)
document.getElementById('rndm').addEventListener('click', () => {
    const rndmValue = Math.floor(Math.random() * 10);
    rndm(rndmValue);
})

const updateCounter = () => {
    document.getElementById('counter').textContent = store.getState();
}

store.subscribe(updateCounter);