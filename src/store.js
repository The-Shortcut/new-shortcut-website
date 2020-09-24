import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import eventReducer from './reducers/eventsReducer'
import teamReducer from './reducers/teamsReducer'

const reducer = combineReducers({
    events: eventReducer,
    team: teamReducer
})

const store = createStore(
    reducer, 
    composeWithDevTools(applyMiddleware(thunk))
)

export default store
