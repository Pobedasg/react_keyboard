import React, { Component } from 'react';
import classNames from 'classnames';

type KeyState = {
  key: string | null;
};

export class App extends Component<{}, KeyState> {
  state: KeyState = {
    key: null,
  };

  handleUp = (e: KeyboardEvent) => {
    this.setState({ key: e.key });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleUp);
  }

  render() {
    const { key } = this.state;

    const containerClass = classNames('App');

    const msgClass = classNames('App__message', {
      'App__message--empty': key === null,
      'App__message--set': key !== null,
    });

    return (
      <div className={containerClass}>
        {key === null ? (
          <p className={msgClass}>Nothing was pressed yet</p>
        ) : (
          <p className={msgClass}>The last pressed key is [{key}]</p>
        )}
      </div>
    );
  }
}
