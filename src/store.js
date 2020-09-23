import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import eventReducer from './reducers/eventsReducer'

const reducer = combineReducers({
    events: eventReducer
})

const store = createStore(
    reducer, 
    composeWithDevTools(applyMiddleware(thunk))
)

export default store
