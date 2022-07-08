import { render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom"
import FollowersList from '../components/FollowersList/FollowersList';

const MockedFollowersList = ({ numberOfIncompleteTasks }) => {
    return (
        <BrowserRouter>
            <FollowersList />
        </BrowserRouter>
    )
}

describe('Followers List tests', () => {

    test('first follower is rendered correctly after being fetched', async () => {
        render(<MockedFollowersList />);
        const followerDivElement = await screen.findByTestId('follower-0');
        expect(followerDivElement).toBeInTheDocument();
    });

    // test('All followers are rendered correctly after being fetched', async () => {
    //     render(<MockedFollowersList />);
    //     const followerDivElements = await screen.findAllByTestId(/follower/i);
    //     expect(followerDivElements.length).toBe(5);
    // });
    
})