import { render, screen } from "@testing-library/react"
import { FirstApp } from "../FirstApp"

describe('Test in <FirstApp>', () => {
    const title ='Soy el titulo';
    test('should match with snapshot', () => {
        const { container } = render(<FirstApp title={title} number={1} />);

        expect(container).toMatchSnapshot()
    })
    test('should view title in h1', () => {
        render(<FirstApp title={title} number={1} />);

        //screen.debug()
        expect(screen.getByText(title)).toBeTruthy();
        const h1 = screen.getByRole('heading', {level: 1});
        expect(h1.innerHTML).toBe(title);
        expect(h1.innerHTML).toContain(title);
    })
    test('should view subtitle in h2', () => {
        render(<FirstApp title={title} number={1} />);

        expect(screen.getByTestId('test-subtitle')).toBeTruthy();
        expect(screen.getByTestId('test-subtitle').innerHTML).toBe('Sin Subtitulo');
    })
    test('should view subtitle in h3 for three', () => {
        
        render(<FirstApp title={title} number={1} />);
        const h3 = screen.queryAllByRole('heading', {level: 3});
        expect(h3.length).toBe(3);
    })
    test('should view nuumber in h3', () => {
        /*const numberProps = 1
        render(<FirstApp title={title} number={numberProps} />);
        const h3 = screen.queryAllByRole('heading', {level: 3});
        console.log(h3);
        expect(h3).toContain(numberProps.toString());*/
    })
})