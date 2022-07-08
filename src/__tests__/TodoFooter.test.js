import { render, screen } from '@testing-library/react';
import TodoFooter from '../components/TodoFooter/TodoFooter';
import { BrowserRouter } from "react-router-dom"

const MockedTodoFooter = ({ numberOfIncompleteTasks }) => {
    return (
        <BrowserRouter>
            <TodoFooter
                numberOfIncompleteTasks={numberOfIncompleteTasks}
            />
        </BrowserRouter>
    )
}

describe('TodoFooter tests', () => {
    it('should render the correct amount of incomplete tasks', () => {
        render(
            <MockedTodoFooter
                numberOfIncompleteTasks={5}
            />
        );
        const pElement = screen.getByText(/5 tasks left/i);
        expect(pElement).toBeInTheDocument();
    });

    it('should render the word "task" when the number of incomplete tasks is 1', () => {
        render(
            <MockedTodoFooter
                numberOfIncompleteTasks={1}
            />
        );
        const pElement = screen.getByText(/1 task left/i);
        expect(pElement).toBeInTheDocument();
    });
})

// it('should render a valid text for the todo footer', () => {
//     render(
//         <MockTodoFooter 
//           numberOfIncompleteTasks={1}
//         />
//     );
//     const pElement = screen.getByText(/1 task left/i);
//     expect(pElement).toBeTruthy();
// });

// it('should render a visible text that can be seen by user for the todo footer', () => {
//     render(
//         <MockTodoFooter 
//           numberOfIncompleteTasks={1}
//         />
//     );
//     const pElement = screen.getByText(/1 task left/i);
//     expect(pElement).toBeVisible();
// });

// it('should render a visible text with the right content for the todo footer', () => {
//     render(
//         <MockTodoFooter 
//           numberOfIncompleteTasks={1}
//         />
//     );
//     const pElement = screen.getByTestId('para');
//     expect(pElement).toHaveTextContent('1 task left');
// }); 

// it('should render a visible text with the right content for the todo footer using value', () => {
//     render(
//         <MockTodoFooter 
//           numberOfIncompleteTasks={1}
//         />
//     );
//     const pElement = screen.getByTestId('para');
//     expect(pElement.textContent).toBe('1 task left');
// });