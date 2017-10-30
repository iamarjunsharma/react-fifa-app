export function resultsHasErrored(bool) {
    return {
        type: 'RESULTS_HAS_ERRORED',
        hasErrored: bool
    };
}
export function resultsIsLoading(bool) {
    return {
        type: 'RESULTS_IS_LOADING',
        isLoading: bool
    };
}
export function resultsFetchDataSuccess(results) {
    return {
        type: 'RESULTS_FETCH_DATA_SUCCESS',
        results
    };
}

// redux-thunk usage for making async call to the API
export function resultsFetchData(url) {
    return (dispatch) => {
        dispatch(resultsIsLoading(true));
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(resultsIsLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((results) => dispatch(resultsFetchDataSuccess(results)))
            .catch(() => dispatch(resultsHasErrored(true)));
    };
}