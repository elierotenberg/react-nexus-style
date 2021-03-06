import React from 'react';
import { styles } from '../';

@styles({
  '.ES6ClassDecorator': {
    minWidth: '33px',
  },
})
class ES6ClassDecorator extends React.Component {
  static displayName = 'ES6ClassDecorator';

  render() {
    return <div className='MyComponent' />;
  }
}

export default ES6ClassDecorator;
