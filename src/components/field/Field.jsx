import React from 'react';
import FieldLayout from "../fieldLayout/FieldLayout";
import PropTypes from 'prop-types';

const Field = ({ field, onCellClick }) => {
    return <FieldLayout field={field} onCellClick={onCellClick} />;
};

Field.propTypes = {
    field: PropTypes.arrayOf(PropTypes.string).isRequired,
    onCellClick: PropTypes.func.isRequired
};

export default Field;
