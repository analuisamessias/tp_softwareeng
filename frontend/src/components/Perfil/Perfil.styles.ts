import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
	display: flex;
	height: 100vh;
	background-color: #f8f8f8;
`;

export const LeftSection = styled.div`
	${({ theme }) => css`
		width: 100%;
		min-height: 80vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		color: #ffffff;
		padding: 5rem;
		max-width: 500px;

		${media.lessThan('medium')`
      display: none;
    `}
	`}
`;

export const Logo = styled.img`
	width: 200px;
`;

export const RightSection = styled.div`
	${({ theme }) => css`
		width: 100%;
		display: flex;
		min-height: 80vh;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 2rem;
		color: #e2e2e2;

		div {
			display: flex;
			flex-direction: column;
		}
	`}
`;

export const Title = styled.h1`
	color: #0f2849;
	font-size: 1.6rem;
	margin-bottom: 1.5rem;
	text-align: center;
	font-family: 'Barlow', sans-serif;
	font-weight: 700;
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	width: 400px;
	gap: 1rem;
`;

export const Input = styled.input`
	padding: 0.5rem;
	border: 1px solid #ccc;
	border-radius: 6px;
	font-size: 0.9rem;
`;

export const Button = styled.button`
	background-color: #0f2849;
	color: white;
	padding: 0.75rem;
	border: none;
	border-radius: 6px;
	font-weight: bold;
	cursor: pointer;
	transition: background-color 0.3s;

	&:hover {
		background-color: #1a3355;
	}
`;

export const LinkText = styled.a`
	font-size: 1rem;
	color: #0f2849;
	text-align: center;
	margin-top: 0.5rem;
	text-decoration: underline;
	cursor: pointer;
	font-weight: bold;

	&:hover {
		opacity: 0.8;
	}
`;

export const PerfilIcon = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 1rem;
	color: #c3c0c0;
`;

export const ButtonSection = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	flex-direction: row;
	justify-content: space-between;
	width: 45%;
	gap: 10px;
	padding: 10px;
`;

export const ButtonSave = styled.button`
	background-color: #0f2849;
	color: white;
	font-weight: bold;
	padding: 10px 20px;
	border: none;
	border-radius: 8px;
	cursor: pointer;
	font-size: 14px;
	transition: background-color 0.3s;

	&:hover {
		background-color: #173765;
	}
`;

export const ButtonCancel = styled.button`
	background-color: #c3c0c0;
	color: #000000;
	font-weight: bold;
	padding: 10px 20px;
	border: none;
	border-radius: 8px;
	cursor: pointer;
	font-size: 14px;
	transition: background-color 0.3s;

	&:hover {
		background-color: #e2e2e2;
	}
`;
