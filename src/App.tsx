import React, { Component } from 'react';
import classNames from 'classnames';

type KeyLoggerState = {
  lastPressedKey: string | null;
};

export class App extends Component<{}, KeyLoggerState> {
  state: KeyLoggerState = {
    lastPressedKey: null,
  };

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ lastPressedKey: event.key });
    console.log(event.key);
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp as any);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp as any);
  }

  render() {
    const { lastPressedKey } = this.state;
    const message =
      lastPressedKey === null
        ? 'Nothing was pressed yet'
        : `The last pressed key is [${lastPressedKey}]`;

    return (
      <div className={classNames('key-logger')}>
        <p>{message}</p>
      </div>
    );
  }
}
