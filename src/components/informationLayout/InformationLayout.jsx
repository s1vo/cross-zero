import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../Game.module.css';

const InformationLayout = ({ status }) => {
    return (
        <div className={styles.status}>
            <h2>{status}</h2>
        </div>
    );
};

InformationLayout.propTypes = {
    status: PropTypes.string.isRequired
};

export default InformationLayout;
