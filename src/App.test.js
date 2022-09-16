import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';
import App from './App';

afterEach(cleanup);

it('App component rendered correctly', () => {
  const wrapper = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );
  expect(wrapper).toMatchSnapshot();
});
