import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 100%;
	min-height: 100vh;
	background-color: #ffffff;
`;

export const ContentContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-start;
	padding: 40px;
	gap: 60px;

	@media (max-width: 768px) {
		flex-direction: column;
		align-items: center;
		padding: 20px;
	}
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

export const LeftSection = styled.div`
	flex: 1;
	background-color: none;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 16px;

	input {
		padding: 10px;
		border-radius: 8px;
		border: 1px solid #ccc;
	}

	button {
		background-color: #0f2849;
		color: white;
		border: none;
		border-radius: 8px;
		padding: 10px;
		cursor: pointer;

		&:hover {
			background-color: #173765;
		}
	}
`;

export const EditImage = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	gap: 30px;
`;

export const Button = styled.button`
	background-color: #0f2849;
	color: white;
	font-weight: bold;
	padding: 10px 20px;
	border: none;
	border-radius: 8px;
	cursor: pointer;
	font-size: 15px;
	transition: background-color 0.3s;

	&:hover {
		background-color: #173765;
	}
`;

export const ButtonExcluir = styled.button`
	background-color: #c3c0c0;
	color: #000000;
	font-weight: bold;
	padding: 10px 20px;
	border: none;
	border-radius: 8px;
	cursor: pointer;
	font-size: 15px;
	transition: background-color 0.3s;

	&:hover {
		background-color: #e2e2e2;
	}
`;
