import { fireEvent, render, screen } from "@testing-library/react"
import { CounterApp } from "../CounterApp"

describe('Test in <CounterApp>', () => {
    const propValue = 20;
    test('should match with snapshot', () => {
        const { container } = render(<CounterApp value={propValue} />);

        expect(container).toMatchSnapshot()
    })

    test(`should props ${propValue} en app`, () => {
        render(<CounterApp value={propValue} />);
        const h2 = screen.getByRole('heading', {level: 2});
        expect(h2.innerHTML).toContain(`${propValue}`);
        expect(screen.getByText(propValue)).toBeTruthy();
    })

    test(`should handleAdd  with button +1`, () => {
        render(<CounterApp value={10} />);
        fireEvent.click(screen.getByText('+1'))
        const h2 = screen.getByRole('heading', {level: 2});
        expect(h2.innerHTML).toBe('11')
    })
    test(`should handleSubstract  with button -1`, () => {
        render(<CounterApp value={10} />);
        fireEvent.click(screen.getByText('-1'))
        const h2 = screen.getByRole('heading', {level: 2});
        expect(h2.innerHTML).toBe('9')
    })

    test(`should handle  with buttons `, () => {
        render(<CounterApp value={10} />);
        fireEvent.click(screen.getByText('-1'))
        const h2 = screen.getByRole('heading', {level: 2});
        expect(h2.innerHTML).toBe('9')
        fireEvent.click(screen.getByText('+1'))
        fireEvent.click(screen.getByText('+1'))
        const h2_two = screen.getByRole('heading', {level: 2});
        expect(h2_two.innerHTML).toBe('11')
        fireEvent.click(screen.getByRole('button', {name: 'btn-reset'}))
        expect(h2_two.innerHTML).toBe('10')
    })
})