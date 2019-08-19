import React from 'react';

import { connect } from 'react-redux';
import Num from './Num';
import getNumWord from '../logic/world';
import { thunkUpdateField } from '../redux/field/thunkFieldUpdate';

class Field extends React.Component {
    // componentDidMount = () => {
    //     console.log(' Field componentDidMount')
    // }
    // componentWillUnmount = () => {
    //     console.log(' Field componentWillUnmount')
    // }
    // componentDidUpdate = (oldProps, oldState) => {
    //     console.log('Field componentDidUpdate')
    // }

    state = {
        type: this.props.type,
    }

    clickNum = (idNum, doing) => {
        const { type } = this.state;
        this.props.dispatch(thunkUpdateField(idNum, type, doing));
    }

    render() {
        const { type } = this.state;
        const field = this.props.fields[type];
        const { size, fieldNumber, max, selectNum } = field;

        const fieldItem = [];

        for (let i = 1; i <= size; i++) {
            fieldItem.push(
                <span className='num' key={i}>
                    <Num
                        max={max}
                        len={selectNum.length}
                        num={i}
                        ckClick={this.clickNum}
                    ></Num>
                </span>
            );
        }

        return (
            <div className='field'>
                <div className='field-head'>
                    <div className='field__title'>
                        <span>Поле {fieldNumber}</span>
                        <span> Отметьте
                            <span className='field__title-num'>{+max - +selectNum.length}</span>
                            {getNumWord(max - selectNum.length)}
                        </span>
                    </div>
                </div>
                <div className='field__body'>
                    {fieldItem}
                </div>
            </div>
        );
    }
}

const mapStateToProps = function (state) {
    return {
        fields: state.fields,
    };
};

export default connect(mapStateToProps)(Field);