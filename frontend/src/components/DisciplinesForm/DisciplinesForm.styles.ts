import styled from 'styled-components';
import { css } from 'styled-components';
import media from 'styled-media-query';

export const InfoDisciplines = styled.div`
	margin-top: 40px;
	overflow-x: auto;
	margin-left: 40px;
`;

export const Title = styled.h1`
	color: #0f2849;
	font-size: 1.6rem;
	margin-bottom: 1.5rem;
	text-align: start;
	margin-left: 40px;
	font-family: 'Barlow', sans-serif;
	font-weight: 700;
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	width: 800px;
	gap: 1rem;
	margin-left: 40px;
`;

export const FormCod = styled.div`
	display: flex;
	flex-direction: column;
	width: 400px;
	gap: 1rem;
	margin-top: 20px;
	margin-left: 40px;
`;

export const FormDias = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 1rem;
	width: 300px;
	margin-left: 40px;
	margin-top: 20px;
	${media.lessThan('medium')`
		width: 100%;
	`}
`;

export const FormSala = styled.div`
	display: grid;
	flex-direction: column;
	gap: 1rem;
	width: 400px;
	margin-left: 40px;
	margin-top: 20px;
	${media.lessThan('medium')`
		width: 100%;
	`}
`;

export const Input = styled.input`
	padding: 0.5rem;
	border: 1px solid #ccc;
	border-radius: 6px;
	font-size: 1rem;
`;

export const Select = styled.select`
	padding: 0.5rem;
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
	transition: background-color 0.3s;

	&:hover {
		background-color: #1a3355;
	}
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
	margin-top: 20px;
	margin-left: 70px;

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
	margin-top: 20px;
	margin-left: 70px;

	&:hover {
		background-color: #e2e2e2;
	}
`;
