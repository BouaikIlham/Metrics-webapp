import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import Footer from '../Components/Footer';
import store from '../redux/configStore';

describe('Footer tests', () => {
    test('should render', () => {
        expect(Footer).toMatchSnapshot();
    });

    test('Checks if footer content is there by checking text', () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <Footer />
                </BrowserRouter>
                ,
            </Provider>
        );
    });
});