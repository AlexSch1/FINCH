import ACTIONS from "../constants/actions";

export const fieldUpdate = (action) => dispatch => {
        dispatch({
                type: ACTIONS.FIELD.FIELD_UPDATE,
                payload: action,
        });
};

export const fieldRestart = () => dispatch => {
        dispatch({
                type: ACTIONS.FIELD.FIELD_RESTART
        });
};