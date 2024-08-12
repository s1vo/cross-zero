import React, { useState } from 'react';
import GameLayout from "./components/gameLayout/GameLayout";
import Field from "./components/field/Field";
import Information from "./components/information/Information";
import styles from './Game.module.css';

const Game = () => {
    const [currentPlayer, setCurrentPlayer] = useState('X');
    const [isGameEnded, setIsGameEnded] = useState(false);
    const [isDraw, setIsDraw] = useState(false);
    const [field, setField] = useState(Array(9).fill(''));

    const handleCellClick = (index) => {
        if (field[index] !== '' || isGameEnded) return;

        const newField = [...field];
        newField[index] = currentPlayer;
        setField(newField);

        checkForWinner(newField);
        switchPlayer();
    };

    const switchPlayer = () => {
        setCurrentPlayer(currentPlayer === 'X' ? '0' : 'X');
    };

    const checkForWinner = (field) => {
        const WIN_PATTERNS = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontal
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Vertical
            [0, 4, 8], [2, 4, 6] // Diagonal
        ];

        for (let pattern of WIN_PATTERNS) {
            const [a, b, c] = pattern;
            if (field[a] && field[a] === field[b] && field[a] === field[c]) {
                setIsGameEnded(true);
                return;
            }
        }

        if (field.every(cell => cell !== '')) {
            setIsDraw(true);
            setIsGameEnded(true);
        }
    };

    const resetGame = () => {
        setCurrentPlayer('X');
        setIsGameEnded(false);
        setIsDraw(false);
        setField(Array(9).fill(''));
    };

    return (
        <GameLayout>
            <div className={styles.container}>
                <Information
                    currentPlayer={currentPlayer}
                    isGameEnded={isGameEnded}
                    isDraw={isDraw}
                />
                <Field
                    field={field}
                    onCellClick={handleCellClick}
                />
                <button className={styles.button} onClick={resetGame}>Начать заново</button>
            </div>
        </GameLayout>
    );
};

export default Game;
