import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react'
import AppComponent from './AppComponent';
import ButtonChakra from './Component/ButtonChakra';

class CustomElement extends HTMLElement {
	constructor() {
		super();

		const root = document.createElement('div');

		ReactDOM.render(
			<ChakraProvider>
				<AppComponent />
			</ChakraProvider>,
			root
		);

		this.appendChild(root);
	}

	connectedCallback() {
	}

	disconnectedCallback() {
	}

}

if (customElements.get('sample-react-remote-app-not-sharing-element')) {
	console.log(
		'Skipping registration for <sample-react-remote-app-not-sharing-element> (already registered)'
	);
} else {
	customElements.define('sample-react-remote-app-not-sharing-element', CustomElement);
}
