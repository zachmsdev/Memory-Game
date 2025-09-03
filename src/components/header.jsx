
// Header Component

import '../styles/components/header.scss'

const Header = ({ score, highscore }) => {

    return (
        <header>
            <h1>Zach's Memory Game</h1>
            <ScoreBoard 
                score={score} 
                highscore={highscore} 
            />
        </header>
    )

}

export const ScoreBoard = ({ score, highscore }) => {
    return (
        <section className="scoreBoard">
            <h3>Score:</h3>
            <h3 className="currentScore">{score}</h3>
            <h3>Highscore:</h3>
            <h3 className="highScore">{highscore}</h3>
        </section>
    )
}


export default Header;










