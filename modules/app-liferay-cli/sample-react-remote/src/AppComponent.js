import React from 'react';
import ReactDOM from 'react-dom';
import ButtonChakra from './Component/ButtonChakra';

export default function AppComponent(props) {
	return (
		<div>
			<p>This is a sample custom element rendered with React.</p>
			<p>It's not very fancy, but you can use it as a starting point
				to do amazing things!</p>
			<ButtonChakra />
		</div>
	);
}
