import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
	${({ theme }) => css`
		display: inline;
		grid-template-columns: 1fr 1fr;
		color: #ffffff;

		${media.lessThan('medium')`
      display: flex;
    `}
	`}
`;

export const ContentContainer = styled.div`
	margin-top: 70px;
	padding: 20px;
	width: 100%;
	max-width: 1200px;
`;

export const LogoSection = styled.div`
	display: flex;
	align-items: start;
	gap: 20px;
	margin-bottom: 30px;
`;

export const WelcomeText = styled.h2`
	font-size: 1rem;
	color: #000000;
	font-weight: 600;
`;

// Barra de pesquisa
export const SearchInput = styled.input`
	padding: 0 20px;
	border: 1px solid #ccc;
	border-radius: 10px;
	font-size: 0.9rem;
	width: 450px;
	height: 40px;
	margin-top: 20px;
	margin-bottom: 20px;
	outline: none;
	color: #000000;
`;

export const TextSection = styled.div`
	display: flex;
	flex-direction: column;
`;

export const SearchSection = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 35px;
`;

// Parte dos Filtros
export const FiltersContainer = styled.div`
	display: flex;
	gap: 40px;
	margin-top: 97px;
	margin-left: 40px;
`;

export const FilterSelect = styled.select`
	width: 180px;
	height: 40px;
	border-radius: 10px;
	border: 1px solid #ccc;
	padding: 0 10px;
	font-size: 0.9rem;
	outline: none;
	background-color: #e0e0e0;

	&:focus {
		border-color: #0f2849;
	}
`;

// Parte da Tabela
export const TableContainer = styled.div`
	margin-top: 40px;
	overflow-x: auto;
`;
