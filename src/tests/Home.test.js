import '@testing-library/jest-dom';
import Home from '../Components/Home';

describe('Home tests', () => {
    test('should render', () => {


        expect(Home).toMatchSnapshot();
    });
});