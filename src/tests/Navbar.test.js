import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import Navbar from '../Components/Navbar';
import store from '../redux/configStore';

describe('Navbar tests', () => {
  test('should render', () => {
    expect(Navbar).toMatchSnapshot();
  });

  test('Checks if header content is there by checking the logo text', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
        ,
      </Provider>,
    );

    expect(
      screen.getByRole('heading', { name: /2022/i }),
    ).toBeInTheDocument();
  });
});
