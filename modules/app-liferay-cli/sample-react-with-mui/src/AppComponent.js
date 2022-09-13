import React from 'react';
import ReactDOM from 'react-dom';
import ButtonMUI from './Components/ButtonMUI';
import ButtonMUIStyled from './Components/ButtonMUIStyled';

export default function AppComponent(props) {
	return (
		<>
			<ButtonMUI>
				Button using MUI
			</ButtonMUI>
			{/* <ButtonMUIStyled>
				Button using MUI with Sytled
			</ButtonMUIStyled> */}
		</>
	);
}
