import reducer from "./reducers"
import { createStore, applymiddleware } from 'redux'
import {thunk} from "redux-thunk"

export const store = createStore(applymiddleware(thunk))
