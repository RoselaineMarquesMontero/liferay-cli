import React from 'react';
import ReactDOM from 'react-dom';
import BootstrapButton from './Component/BootstrapButton';
// import BootstrapButtonStyled from './Component/BootstrapButtonStyled';

export default function AppComponent(props) {
	return (
		<>
			<BootstrapButton buttonType={ "primary" } />
			{/* <BootstrapButtonStyled buttonType={ "primary" } /> */ }
		</>
	);
}
