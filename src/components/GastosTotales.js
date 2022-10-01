import React, {useContext} from "react";
import { AppContext } from "../context/AppContext";

const GastosTotales = () => {
    const { expenses } = useContext(AppContext);

	const total = expenses.reduce((total, item) => {
		return (total += item.cost);
	}, 0);

	return (
		<div class='alert alert-primary p-4'>
			<span>Gastado hasta ahora: ${total}</span>
		</div>
	);
};

export default GastosTotales;