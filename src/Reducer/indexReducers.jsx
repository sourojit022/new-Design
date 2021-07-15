import {combineReducers} from 'redux';
import AuthReducers from './Authreduces';

//import ProductReducers from './productreducers';

const rootReducer=combineReducers(
{
	authData:AuthReducers,

}
)

export default rootReducer;