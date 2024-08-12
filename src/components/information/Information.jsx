import React from 'react';
import InformationLayout from "../informationLayout/InformationLayout";
import PropTypes from 'prop-types';

const Information = ({ currentPlayer, isGameEnded, isDraw }) => {
    let status;

    if (isDraw) {
        status = 'Ничья';
    } else if (isGameEnded) {
        status = `Победа: ${currentPlayer === 'X' ? '0' : 'X'}`;
    } else {
        status = `Ходит: ${currentPlayer}`;
    }

    return <InformationLayout status={status} />;
};

Information.propTypes = {
    currentPlayer: PropTypes.string.isRequired,
    isGameEnded: PropTypes.bool.isRequired,
    isDraw: PropTypes.bool.isRequired
};

export default Information;
