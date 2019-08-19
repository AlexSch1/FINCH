import ACTIONS from "../constants/actions";

const initialState = {
    'firstField': {
        fieldNumber: 1,
        size: 19,
        max: 8,
        selectNum: [],
    },
    'secondField': {
        fieldNumber: 2,
        size: 2,
        max: 1,
        selectNum: [],
    }
};

export default (state = initialState, action) => {
	switch ( action.type ) {
		case ACTIONS.FIELD.FIELD_UPDATE: {
            let nameField = action.payload.fieldName;
			return {
                ...state,
                [nameField]: {
                    ...state[nameField],
                    selectNum: action.payload.newField
                }
            };
		}
		case ACTIONS.FIELD.FIELD_RESTART: {
            return {
                ...state,
                'firstField': {
                    ...state['firstField'],
                    selectNum: [],
                },
                'secondField': {
                    ...state['secondField'],
                    selectNum: [],
                },
            };
        }
		default:
			break;
	}

	return state;
}