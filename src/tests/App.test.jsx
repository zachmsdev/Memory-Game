
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event' 
import Game from '../components/game.jsx'
import Header from '../components/header.jsx'
import { ScoreBoard } from '../components/header.jsx'

const headerTest = () => {
    describe('Header component', () => {
        it('Renders the logo text?', () => {
            render(<Header />);
            expect(screen.getByRole("heading", { level: 1 }).textContent).toMatch(/zach's memory game/i)
        });
        it('Renders the highscore?', () => {
            const highscore = 17;
            render(<ScoreBoard  highscore={highscore}/>);

            const thehThreeTags = screen.getAllByRole('heading', { level: 3, hidden: true });

            expect(thehThreeTags[3].textContent).toMatch(highscore);
        })
        it('Correct BG color for header?', () => {
            render(<Header />);
            const headerElement = screen.getByRole('banner');
            expect(headerElement).toHaveStyle({ backgroundColor: 'rgb(255, 255, 255' });
        })
    })
}

const gameTest = () => {
    describe('Game logic', () => {
        it('Changes tiles when pressed?', async () => {
            // Initialize user for testing
            const user = userEvent.setup();
            // Mock score
            const mockSetScore = vi.fn();
            // Render the game component
            render(<Game setScore={mockSetScore}/>);
            // Grabbing all the memory card buttons
            const buttons = screen.getAllByRole('img');
            // Array of all image sources in order
            const getImageOrder = () => {
                return screen.getAllByRole('img').map(img => img.getAttribute('src'));
            }
            // Original array of image sources
            const originalImages = getImageOrder();
            console.log(`ORIGINAL IMAGES: ${originalImages}`);
            // Simulating a user click
            await user.click(buttons[1]);
            // New array of image sources (after click)
            const newImages = getImageOrder();
            console.log(`NEW IMAGES: ${newImages}`);
            // What to expect when clicking
            expect(newImages).not.toEqual(originalImages); 
        });
    });
}

const tests = () => {
    headerTest();
    gameTest();
}

tests();

