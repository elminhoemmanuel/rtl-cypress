import { render, screen } from '@testing-library/react';
import Header from '../components/Header/Header';


describe('Header tests', () => {
    test('header should render same text passed in title prop using getBYText', () => {
        render(<Header title="My Header" />);
        const headingElement = screen.getByText(/my header/i);
        expect(headingElement).toBeInTheDocument();
    });
})

// test('header should render same text passed in title prop using  getByRole', () => {
//   render(<Header title="My Header" />);
//   const headingElement = screen.getByRole("heading");
//   expect(headingElement).toBeInTheDocument();
// });

// test('header should render same text passed in title prop using  getByRole', () => {
//   render(<Header title="My Header" />);
//   const headingElement = screen.getByRole("heading", {name: 'My Header'});
//   expect(headingElement).toBeInTheDocument();
// });


//FIND BY

// test('header should render same text passed in title prop using findBYText using async', async () => {
//     render(<Header title="My Header" />);
//     const headingElement = await screen.findByText(/my header/i);
//     expect(headingElement).toBeInTheDocument();
//   });


// QUERY BY

// test('header should render same text passed in title prop using queryBYText and ', () => {
//     render(<Header title="My Header" />);
//     const headingElement = screen.queryByText(/dogs/i);
//     expect(headingElement).not.toBeInTheDocument();
//   });

// GETTING MULTIPLE

// test('header should render same text passed in title prop using getBYText', () => {
//     render(<Header title="My Header" />);
//     const headingElements = screen.getAllByRole('heading');
//     expect(headingElements.length).toBe(2);
//   });