import React from 'react';
import ReactDOM from 'react-dom';
import Two from '../../components/Two/Two';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Two />, div);
});
