import {createStore} from 'redux';

const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INC':
      return state + 1;
    case 'DEC':
      return state - 1;
    case 'RNDM':
      return state + action.rndmValue;
    default:
      return state;
  }
};

const store = createStore(reducer);


const inc = () => ({type: 'INC'}); //"action creator" function
const dec = () => ({type: 'DEC'});
const rndm = (rndmValue) => ({type: 'RNDM', rndmValue});


document.getElementById('inc').addEventListener('click', () => {
  store.dispatch(inc());
})
document.getElementById('dec').addEventListener('click', () => {
  store.dispatch(dec());
})
document.getElementById('rndm').addEventListener('click', () => {
  const rndmValue = Math.floor(Math.random() * 10);
  store.dispatch(rndm(rndmValue));
})


const updateCounter = () => {
  document.getElementById('counter').textContent = store.getState();
}

store.subscribe(updateCounter);