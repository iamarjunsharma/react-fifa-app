import { combineReducers } from 'redux';
import { results, resultsHasErrored, resultsIsLoading } from './results';

export default combineReducers({
    results,
    resultsHasErrored,
    resultsIsLoading
});