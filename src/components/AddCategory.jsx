import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {

	const [inputValue, setInputValue] = useState('');

	const onInputChange = ({ target }) => {
		setInputValue(target.value);
	};

	const onSubmit = (event) => {
		// esta lina es para evitar que se recargue el navedor
		event.preventDefault();

		// Validacion de cantidad de caracteres en el input
		if (inputValue.trim().length <= 1) return;

		// una vez presionado Enter y agregado el elemento limpiamos el Input
		setInputValue('');
		onNewCategory(inputValue.trim());
	};

	return (
		<form onSubmit={ onSubmit }>
			<input
				type={ 'text' }
				placeholder={ 'Buscar gifs' }
				value={ inputValue }
				onChange={ onInputChange }
			/>
		</form>
	);
};
