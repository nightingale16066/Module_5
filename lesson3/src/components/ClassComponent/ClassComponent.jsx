import React from 'react';
import style from './ClassComponent.module.css';
import PropTypes from 'prop-types';

export class ClassComponent extends React.Component {
  state = {
    result: 'Result',
    userNumber: '',
    randomNumber: Math.floor(
      Math.random() * (this.props.max - this.props.min) + this.props.min),
    count: 0,
    haveGuessed: false,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState(state => ({
      count: state.count + 1,
    }));
    this.setState(state => {
      if (!this.state.userNumber) {
        return {
          result: 'Введите число'
        };
      }

      if (state.userNumber > state.randomNumber) {
        return {
          result: `${state.userNumber} больше загаданного`
        };
      }

      if (state.userNumber < state.randomNumber) {
        return {
          result: `${state.userNumber} меньше загаданного`
        };
      }

      return {
        haveGuessed: true,
        result: `Вы угадали загаданное число ${state.userNumber},
        попыток ${state.count}`
      };
    });
    this.setState({userNumber: ''});
  };

  resetGame = e => {
    e.preventDefault();
    this.setState({
      result: 'Result',
      userNumber: '',
      randomNumber: Math.floor(
        Math.random() * (this.props.max - this.props.min) + this.props.min),
      count: 0,
      haveGuessed: false,
    });
  };

  handleChange = e => {
    this.setState((state, props) => ({
      userNumber: e.target.value,
    }));
  };

  render() {
    return (
      <div className={style.game}>
        <p className={style.result}>{this.state.result}</p>
        <form className={style.form}>
          <label className={style.label} htmlFor='user_number'>
            Угадай число
          </label>
          <input className={style.input} type='number' id='user_number'
            onChange={this.handleChange} value={this.state.userNumber}/>
          {this.state.haveGuessed ?
            <button onClick={this.resetGame} className={style.btn}>
              Сыграть еще
            </button> :
            <button onClick={this.handleSubmit}
              className={style.btn}>Угадать</button>
          }
        </form>
      </div>
    );
  }
}


ClassComponent.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
};
