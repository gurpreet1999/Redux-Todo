import { createStore  } from 'redux'
import rootReducer from './reducer/rootReducer'






const store=createStore(rootReducer)

export default store



// function createStore(rootReducer,preloadedState){
//     let state = preloadedState

//     const listeners = []
//     function getState(){
//         return state
//     }
// function subscribe(listener){
// listeners.push(listener)
// return function unsubscribe(){
//     const index = listeners.indexOf(listener)
//     listeners.splice(index, 1)
// }
// }
// function dispatch(action) {
//     state = reducer(state, action)
//     listeners.forEach(listener => listener())
//   }

//   dispatch({ type: '@@redux/INIT' })

//   return { dispatch, subscribe, getState }
// }

//Redux middleware are written as a series of three nested functions.

