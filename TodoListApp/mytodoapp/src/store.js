import { createStore , combineReducers , applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import TodoRoducer from './Reducers/Reducers'

const reducer = combineReducers({
   Todo : TodoRoducer
})

const initialState = {}

const middleware = [thunk]

const store = createStore(
      reducer,initialState,
      applyMiddleware(...middleware)
)

export default store