import styled, { css } from 'styled-components';

export const TopBarContainer = styled.div`
	${({ theme }) => css`
		background-color: #0f2849;
		height: 50px;
		width: 100%;
		position: fixed;
		top: 0;
		left: 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 16px;
		z-index: 10;
	`}
`;

export const Button = styled.button`
	${({ theme }) => css`
		background-color: #0f2849;
		color: white;
		padding: 0.5rem;
		border: none;
	`}
`;

export const button = styled.button`
	${({ theme }) => css`
		background-color: #0f2849;
		color: white;
		padding: 0.75rem;
		border: none;
	`}
`;
