import React, { Component } from 'react';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import getRandom from '../logic/getRandom';
import { fieldRestart } from '../redux/field/action';

class Result extends Component {
    // componentDidMount = () => {
    //     console.log(' Result componentDidMount')
    // }
    // componentWillUnmount = () => {
    //     console.log(' Result componentWillUnmount')
    // }
    // componentDidUpdate = (oldProps, oldState) => {
    //     console.log('Result componentDidUpdate')
    // }

    playAgain = () => {
        this.props.dispatch(fieldRestart());
        this.props.history.push("/");
    }

    render() {
        let randomArray = getRandom(4, 19); // [number, number, number, number]
        let { fields } = this.props;
        let resultHash = {
            firstField: 0,
            secondField: 0,
        }
        let win = false;

        for (const key in fields) {
            fields[key].selectNum.forEach((num) => {
                randomArray.forEach((randomNum) => {
                    if (num === randomNum) {
                        resultHash[key]++;
                    }
                });
            });
        }

        if (resultHash.firstField === 4) {
            win = true;
        } else if (resultHash.firstField >= 3 && resultHash.secondField >= 1) {
            win = true;
        }

        return (
            <div className='result'>
                <p>Случайные числа: {randomArray.join(' ')}</p>
                <p>
                    Ваш выбор:
                    <span className='result__first-field-num'>{fields.firstField.selectNum.join(' ')}</span>
                    <span className='result__second-field-num'>{fields.secondField.selectNum.join(' ')}</span>
                </p>
                {win ? <p className='result__answ'>Победа</p> : <p className='result__answ'>Проигрыш</p>}
                <div>
                    <button className='btn' onClick={this.playAgain}>Играть еще</button>
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

export default withRouter(connect(mapStateToProps)(Result));