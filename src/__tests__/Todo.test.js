import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom"
import Todo from '../components/Todo/Todo';

const MockedTodo = ({ numberOfIncompleteTasks }) => {
    
    return (
        <BrowserRouter>
            <Todo />
        </BrowserRouter>
    )
}

const addTask = (tasks) => {
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole('button', { name: /Add/i });
    tasks.forEach(task => {
        fireEvent.change(inputElement, { target: { value: task } })
        fireEvent.click(buttonElement);
    });
}

describe('Todo Component tests', () => {

    beforeAll(()=>{
        console.log("Running once before All tests");
    });

    beforeEach(()=>{
        console.log("Running before each test");
    });

    test('should render the same text typed in input on the todo list when Add button is clicked', () => {
        render(<MockedTodo />);
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        const buttonElement = screen.getByRole('button', { name: /Add/i });
        fireEvent.change(inputElement, { target: { value: 'Bake bread' } })
        fireEvent.click(buttonElement);
        const todos = screen.getAllByTitle('todo');
        expect(todos[0]).toHaveTextContent('Bake bread');
    });

    test('should render the same text typed in input on the todo list when Add button is clicked another option', () => {
        render(<MockedTodo />);
        addTask(['Bake bread'])
        const todo = screen.getByText(/Bake bread/i);
        expect(todo).toBeInTheDocument();
    });

    test('should render all the various tasks entered and in the right order', () => {
        render(<MockedTodo />);
        addTask(['Bake bread', 'Wash Clothes', 'Take nap']);
        const todos = screen.getAllByTitle('todo');
        expect(todos.length).toBe(3);
    });

    test('todo should not have completed class when initially rendered', () => {
        render(<MockedTodo />);
        addTask(['Bake bread']);
        const todo = screen.getByText(/Bake bread/i);
        expect(todo).not.toHaveClass("todo-item-active");
    });

    test('todo should  have completed class when it has been clicked', () => {
        render(<MockedTodo />);
        addTask(['Bake bread']);
        const todo = screen.getByText(/Bake bread/i);
        fireEvent.click(todo);
        expect(todo).toHaveClass("todo-item-active");
    });

})