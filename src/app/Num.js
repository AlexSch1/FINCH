import React, { PureComponent } from 'react';

class Num extends PureComponent {
    // componentDidMount = () => {
    //     console.log(' Num componentDidMount', this.props.num)
    // }
    // componentDidUpdate = () => {
    //     console.log('Num componentDidUpdate', this.props.num)
    // }

    state = {
        num: this.props.num,
        idNum: this.props.num,
        active: false
    }

    clickBtn = () => {
        if ( this.props.len >= this.props.max) {
            return;
        }

        const { idNum } = this.state;
        
        this.setState({
            active: !this.state.active,
        }, function () {
            let doing = '';
            if (!this.state.active) {
                doing = 'remove';
            } else {
                doing = 'add';
            }
            this.props.ckClick(idNum, doing)
        });
    }

    render() {
        const { active, num } = this.state;

        return (
            <button
                className={`num__btn } ${active ? 'num__btn_active' : ''}`}
                onClick={this.clickBtn}
            >{num}</button>
        );
    }
}

export default Num;