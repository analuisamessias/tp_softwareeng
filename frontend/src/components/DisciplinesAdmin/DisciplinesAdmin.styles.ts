import styled from 'styled-components';

export const TableContainer = styled.div`
	margin-top: 40px;
	overflow-x: auto;
	margin-left: 40px;
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
	padding: 10px 20px 10px 20px;
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

export const AdminButtonsContainer = styled.div`
	display: flex;
	gap: 8px;
	justify-content: center;
`;

export const EditButton = styled.button`
	background-color: #173765;
	color: white;
	font-size: 14px;
	font-weight: 600;
	border: none;
	border-radius: 4px;
	padding: 6px 12px;
	cursor: pointer;
	transition: background-color 0.3s;

	&:hover {
		background-color: #0f2849;
	}
`;

export const DeleteButton = styled.button`
	background-color: #d9534f;
	color: white;
	font-size: 14px;
	font-weight: 600;
	border: none;
	border-radius: 4px;
	padding: 6px 12px;
	cursor: pointer;
	transition: background-color 0.3s;

	&:hover {
		background-color: #d90404;
	}
`;
