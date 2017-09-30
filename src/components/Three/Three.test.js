import React from 'react';
import ReactDOM from 'react-dom';
import Three from '../../components/Three/Three';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Three />, div);
});
