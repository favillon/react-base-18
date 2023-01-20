import { getByTestId, render } from "@testing-library/react"
import { FirstApp } from "../FirstApp"

describe('Test in <FirstApp>', () => {
    test('should match with snapshot', () => {
        const title ='Soy el titulo';
        const { container } = render(<FirstApp title={title} number={1} />);

        expect(container).toMatchSnapshot()
    })
    test('should view title in h1', () => {
        const title ='Soy el titulo';
        const { container, getByText } = render(<FirstApp title={title} number={1} />);

        expect(getByText(title)).toBeTruthy();
        const h1 = container.querySelector('h1');
        expect(h1.innerHTML).toBe(title);
        expect(h1.innerHTML).toContain(title);
    })
    test('should view subtitle in h2', () => {
        const title ='Soy el titulo';
        const {getByTestId } = render(<FirstApp title={title} number={1} />);

        expect(getByTestId('test-subtitle')).toBeTruthy();
        expect(getByTestId('test-subtitle').innerHTML).toBe('Sin Subtitulo');
    })
    test('should view subtitle in h3 for three', () => {
        const title ='Soy el titulo';
        const {container} = render(<FirstApp title={title} number={1} />);
        const h3 = container.querySelectorAll('h3');
        expect(h3.length).toBe(3);
    })
    test('should view nuumber in h3', () => {
        const title ='Soy el titulo';
        const numberProps = 1
        const {container } = render(<FirstApp title={title} number={numberProps} />);
        const h3 = container.querySelector('h3').innerHTML;
        expect(h3).toContain(numberProps.toString());
    })
})