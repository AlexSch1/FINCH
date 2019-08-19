import React, { Component } from 'react';

import Field from './Field';
import { withRouter } from 'react-router-dom';

class Game extends Component {
    seeResult = () => {
        this.props.history.push("/result");
    }

    render() {
        return (
            <div className='game'>
                <div className='game__head'>
                    <h1>Билет 1</h1>
                </div>
                <div className='game__body'>
                    <Field type='firstField'></Field>
                    <Field type='secondField'></Field>
                </div>
                <div className='game__footer'>
                    <button className='game__btn btn' onClick={this.seeResult}>Показать результат</button>
                </div>
            </div>
        );
    }
}

export default withRouter(Game);