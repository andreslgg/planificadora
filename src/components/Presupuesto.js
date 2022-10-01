
import React, { useState, useContext } from 'react';
import VerPresupuesto from './VerPresupuesto';
import EditarPresupuesto from './EditarPresupuesto';
import { AppContext } from '../context/AppContext';

const Presupuesto = () => {
	const { budget, dispatch } = useContext(AppContext);
	const [isEditing, setIsEditing] = useState(false);

	const handleEditClick = () => {
		setIsEditing(true);
	};

	const handleSaveClick = (value) => {
		dispatch({
			type: 'SET_BUDGET',
			payload: value,
		});
		setIsEditing(false);
	};

	return (
		<div class='alert alert-secondary p-3 d-flex align-items-center justify-content-between'>
			{isEditing ? (
				<EditarPresupuesto handleSaveClick={handleSaveClick} budget={budget} />
			) : (
				// For part 1 render component inline rather than create a seperate one
				<VerPresupuesto handleEditClick={handleEditClick} budget={budget} />
			)}
		</div>
	);
};

export default Presupuesto;