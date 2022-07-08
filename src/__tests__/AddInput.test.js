import { render, screen, fireEvent } from '@testing-library/react';
import AddInput from '../components/AddInput/AddInput';


const mockedSetTodos = jest.fn()

describe('AddInput tests', () => {
    test('should render an input element correctly', () => {
        render(<AddInput todos={[]} setTodos={mockedSetTodos}  />);
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        expect(inputElement).toBeInTheDocument();
    });

    test('should be able to type in input', () => {
        render(<AddInput todos={[]} setTodos={mockedSetTodos}  />);
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        fireEvent.change(inputElement, { target: { value: 'Bake bread' } })
        expect(inputElement.value).toBe('Bake bread');
    });

    test('should be empty when Add button is clicked', () => {
        render(<AddInput todos={[]} setTodos={mockedSetTodos}  />);
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        const buttonElement = screen.getByRole('button', { name: /Add/i });
        fireEvent.change(inputElement, { target: { value: 'Bake bread' } })
        fireEvent.click(buttonElement)
        expect(inputElement.value).toBe('');
    });
})