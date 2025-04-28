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

export const ExitButton = styled.button`
	${({ theme }) => css`
		background-color: #0f2849;
		color: white;
		font-size: 1.5rem;
		align-items: center;
		border: none;
		cursor: pointer;
		transition: background-color 0.3s;
	`}
	&:hover {
		background-color: #163d6b;
	}
`;

export const MenuButton = styled.button`
	${({ theme }) => css`
		background-color: #0f2849;
		color: white;
		font-size: 1.5rem;
		border: none;
		cursor: pointer;
		transition: background-color 0.3s;
	`}
	&:hover {
		background-color: #163d6b;
	}
`;
