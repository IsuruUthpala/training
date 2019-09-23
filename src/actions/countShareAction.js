export function countShare() {
    return (dispatch, getState) => {
        const state = getState()
        const dataFromC = state.counter;

        dispatch({
            type: 'SHARE_COUNT',
            payload: {
                dataFromC
            }
        })
    }
}