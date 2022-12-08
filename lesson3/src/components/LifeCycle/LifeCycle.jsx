import React from 'react';
import style from './LifeCycle.module.css';

export class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructor');

    this.state = {
      field: 0,
      hasError: false,
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps');
    return state;
  }

  static getDerivedStateFromError(err) {
    return {
      hasError: true,
    };
  }

  componentDidCatch(err, errorInfo) {
    // sendLog(errorInfo.componentStack);
  }

  componentDidMount() {
    console.log('componentDidMount');

    // setTimeout(() => {
    //   this.setState(state => ({
    //     field: state.field + 1,
    //   }));
    // }, 3000);

    // document.addEventListener('scroll', this.handler);
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('shouldComponentUpdate');

    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
    return window.pageYOffset;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate');
    window.scrollBy(0, -snapshot);
  }

  componentWillUnmount() {
    // document.addEventListener('scroll', this.handler);
  }

  handler = () => {
    this.setState(state => ({field: state.field + 1}));
  };

  render() {
    console.log('render');
    if (this.state.hasError) {
      return <h1 className={style.title}>Error</h1>;
    } else {
      return (
        <div>
          <h1 className={style.title}>Жизненный цикл</h1>

          <div className={style.container}>
            <div>
              <h2 className={style.title}>Типы</h2>
              <ul className={style.list}>
                <li>Монтирование</li>
                <li>Обновление</li>
                <li>Размонтирование</li>
                <li>Ошибки</li>
              </ul>
            </div>

            <div className='stage'>
              <h2 className={style.title}>Этапы</h2>
              <ul className={style.list}>
                <li>Render</li>
                <li>Pre-commit</li>
                <li>Commit</li>
              </ul>
            </div>
          </div>
          <button className={style.btn} onClick={this.handler}>
            Click {this.state.field}
          </button>
        </div>
      );
    }
  }
}
