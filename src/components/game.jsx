
import '../styles/components/game.scss'
import { useState } from 'react';

// Game Component

const Game = ({ setScore, setGameover, score, setHighscore, highscore, setGameWon }) => {

    const initialImages = [
  { id: 'img1', url: 'https://picsum.photos/150/150?random=1' },
  { id: 'img2', url: 'https://picsum.photos/150/150?random=2' },
  { id: 'img3', url: 'https://picsum.photos/150/150?random=3' },
  { id: 'img4', url: 'https://picsum.photos/150/150?random=4' },
  { id: 'img5', url: 'https://picsum.photos/150/150?random=5' },
  { id: 'img6', url: 'https://picsum.photos/150/150?random=6' },
  { id: 'img7', url: 'https://picsum.photos/150/150?random=7' },
  { id: 'img8', url: 'https://picsum.photos/150/150?random=8' },
  { id: 'img9', url: 'https://picsum.photos/150/150?random=9' },
  { id: 'img10', url: 'https://picsum.photos/150/150?random=10' },
  { id: 'img11', url: 'https://picsum.photos/150/150?random=11' },
  { id: 'img12', url: 'https://picsum.photos/150/150?random=22' },
  { id: 'img13', url: 'https://picsum.photos/150/150?random=12' },
  { id: 'img14', url: 'https://picsum.photos/150/150?random=13' },
  { id: 'img15', url: 'https://picsum.photos/150/150?random=14' },
  { id: 'img16', url: 'https://picsum.photos/150/150?random=15' },
  { id: 'img17', url: 'https://picsum.photos/150/150?random=16' },
  { id: 'img18', url: 'https://picsum.photos/150/150?random=17' }];
   
    const [searchedFor, setSearchedFor] = useState([]);
    const [images, setImages] = useState(initialImages);

    const endGame = () => {
        setGameover(true);
    }

    const highScore = () => {
        if (highscore <= score) {
            setHighscore(score);
        }

    }

    const updateScore = (id) => {
        const winningScore = 18;
        setSearchedFor(prev => [...prev, id]);
        if (!searchedFor.includes(id)) {
            if (score === winningScore) setGameWon(true);
            setScore(score => ++score);
            shuffleArray(images);
        }
        if (searchedFor.includes(id)) {
            if (score === winningScore) {
                setGameWon(true);
                highScore();
                return;
            } 
            endGame();
            highScore();
        }
    }

    const shuffleArray = (arr) => {
        const bam = [...arr];
        for (let z = 0; z < bam.length; z++) {
           const g = Math.floor(Math.random() * bam.length); 
            [bam[z], bam[g]] = [bam[g], bam[z]];
        }
        setImages(bam);
    }

        return (
        <section className="gameSection">
            <ul>
                {images.map((image) => {
                    return (
                    <li key={image.id}>
                        <img 
                            src={image.url} 
                            onClick={ () => updateScore(image.id) }
                        >
                        </img>
                    </li>
                    )
                })} 
            </ul>
        </section>
    )

}

export default Game;


