import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';
import Header from './Header';

afterEach(cleanup);

describe('Header component tests', () => {
  it('Header component render successfully', () => {
    const wrapper = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('Header contain Math Magician', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );
    expect(getByText(/Math/i).textContent).toBe('Math Magicians');
  });

//   it('navigations are working', () => {
//     const links =
//   });
});
