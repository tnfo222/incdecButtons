// DOM elements
const valueEl = document.getElementById('value')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
const incBtn = document.getElementById('add-five')
const decBtn = document.getElementById('sub-five')

// initial state value
const initialState = {
    value: 0
}

// reducer
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'counter/incremented':
            return { value: state.value + 1 }
        case 'counter/decremented':
            return { value: state.value - 1 }
        case 'counter/add-five':
            return {value: state.value + 5}
        case 'counter/sub-five':
            return{value: state.value -5}
        default:
        return state
    }
}

// action object definitions
const addAction = {
  type: 'counter/incremented'
}

const subAction = {
  type: 'counter/decremented'
}

const addFiveAction = {
  type: 'counter/add-five'
}

const subFiveAction = {
  type: 'counter/sub-five'
}

// generating the store
let store = Redux.createStore(counterReducer)

// defining render
const render = () => {
    const state = store.getState()
    valueEl.innerHTML = state.value.toString()
}

// establishing dispatch functions
const addOne = () => {
  store.dispatch(addAction)
}

const subOne = () => {
  store.dispatch(subAction)
}

const addFive = () => {
  store.dispatch(addFiveAction)
}

const subFive = () => {
  store.dispatch(subFiveAction)
}

// event listeners
plusBtn.addEventListener('click', addOne)
minusBtn.addEventListener('click', subOne)
incBtn.addEventListener('click', addFive)
decBtn.addEventListener('click', subFive)

// initial render
render()

// subscribe reruns render on dispatch
store.subscribe(render)