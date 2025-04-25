'use client';

import { createGlobalStyle, css } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    ${({ theme }) => css`
			* {
				margin: 0;
				padding: 0;
				box-sizing: border-box;
			}

			html,
			body {
				height: 100%;
				width: 100%;
				overflow-x: hidden;
			}
			body {
				font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
					Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
				background-color: #fff;
			}
		`}
  `;

export default GlobalStyle;
