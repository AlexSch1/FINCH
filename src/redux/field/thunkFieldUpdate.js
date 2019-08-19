import { fieldUpdate } from './action';

export const thunkUpdateField = (idNum, typeField, doing) => (dispatch, getState) => {
    const state = getState();
    let { selectNum } = state.fields[typeField];
    let newFieldArr = [];

    if (selectNum.length >= 0) {
        if (doing === 'add') {
            newFieldArr = [...selectNum, idNum];
        } else {
            selectNum.forEach((id) => {
                if (id !== idNum) {
                    newFieldArr.push(id);
                }
            });
        }
    } else {
        newFieldArr = [...selectNum, idNum];
    }

    dispatch(fieldUpdate({
        fieldName: typeField,
        newField: newFieldArr,
    }));
}

