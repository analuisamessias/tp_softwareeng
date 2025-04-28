import styled from 'styled-components';

export const TableContainer = styled.div`
	margin-top: 40px;
	overflow-x: auto;
`;

export const StyledTable = styled.table`
	width: 100%;
	border-collapse: collapse;
	grid-template-columns: repeat(6, 1fr);
`;

export const TableRow = styled.tr`
	border-bottom: 1px solid #ccc;
	background-color: #eeeeef;

	&:hover {
		background-color: #e2e2e2;
	}
`;

export const TableCell = styled.td`
	padding: 10px 10px 10px 10px;
	text-align: center;
	font-size: 0.95rem;
	font-weight: 100;
	color: #000000;
	font-family: sans-serif;
	font-weight: 500;
`;

export const TableTitle = styled.div`
	display: grid;
	grid-template-columns: repeat(6, 1fr);
	padding: 8px 0px 8px 0px;
	background-color: transparent;
	text-align: center;
	border-bottom: 2px solid #ccc;
	justify-content: space-between;
	gap: 20px;
`;

export const TableNameColumns = styled.th`
	padding: 12px;
	text-align: center;
	font-size: 1rem;
	font-weight: bolder;
	color: #0f2849;
	background-color: #ffffff;
	font-family: sans-serif;
`;

export const TableButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 6px;
	padding: 8px 12px;
	background-color: #0f2849;
	color: #ffffff;
	border: none;
	border-radius: 8px;
	cursor: pointer;
	font-size: 0.9rem;
	font-weight: 500;
	transition: background-color 0.3s;

	&:hover {
		background-color: #173765;
	}
`;
