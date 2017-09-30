import React from 'react';
import ReactDOM from 'react-dom';
import One from '../../components/One/One';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<One />, div);
});
