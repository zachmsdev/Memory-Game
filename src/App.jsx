import { useEffect, useState } from 'react'
import Header from './components/header.jsx'
import Game from './components/game.jsx'
import Gameover from './components/gameover.jsx'
import GameWon from './components/gamewon.jsx'

function App() {

    // Score
    const [score, setScore] = useState(0);

    // Highscore
    const [highscore, setHighscore] = useState(() => {
        const storageScore = sessionStorage.getItem('Highscore');
        return storageScore ? parseInt(storageScore) : 0;
    });

    useEffect(() => {
        sessionStorage.setItem('Highscore', highscore);
    }, [highscore]);

    const [gameover, setGameover] = useState(false);

    const [gameWon, setGameWon] = useState(false);

    // Game
    return (
        <>
            <Header score={score} highscore={highscore} />
            <Game setScore={setScore} setGameover={setGameover} score={score} setHighscore={setHighscore} highscore={highscore} setGameWon={setGameWon}/>
            { gameover ? <Gameover /> : null }
            { gameWon ? <GameWon /> : null }
        </>
    )

}

export default App
