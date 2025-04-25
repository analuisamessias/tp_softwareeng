import styled, { css } from 'styled-components';

export const Container = styled.div`
	display: flex;
	height: 100vh;
	background-color: #f8f8f8;
`;

export const LeftSection = styled.div`
	flex: 1;
	background-color: none;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Logo = styled.img`
	width: 200px;
`;

export const RightSection = styled.div`
	flex: 1;
	background-color: cleanWhite;
	padding: 6.73rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Title = styled.h1`
	color: #0f2849;
	font-size: 1.8rem;
	margin-bottom: 3rem;
	text-align: center;
	font-family: 'Barlow', sans-serif;
	font-weight: 700;
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	width: 300px;
	gap: 1rem;
`;

export const Input = styled.input`
	padding: 0.75rem;
	border: 1px solid #ccc;
	border-radius: 6px;
	font-size: 1rem;
`;

export const Button = styled.button`
	background-color: #0f2849;
	color: white;
	padding: 0.75rem;
	border: none;
	border-radius: 6px;
	font-weight: bold;
	cursor: pointer;

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
