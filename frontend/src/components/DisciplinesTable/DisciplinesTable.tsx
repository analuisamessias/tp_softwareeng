import React from 'react';
import {
	TableContainer,
	StyledTable,
	TableRow,
	TableCell,
	TableTitle,
	TableNameColumns,
	TableButton,
} from './DisciplinesTable.styles';
import { FaMapMarkerAlt } from 'react-icons/fa';

export type Disciplina = {
	id: number;
	nome: string;
	codigo: string;
	horario: string;
	professor: string;
	sala: string;
};

type DisciplinesTableProps = {
	disciplinas: Disciplina[];
};

export const DisciplinesTable = ({ disciplinas }: DisciplinesTableProps) => {
	return (
		<TableContainer>
			<StyledTable>
				<thead>
					<TableRow>
						<TableNameColumns>DISCIPLINA</TableNameColumns>
						<TableNameColumns>CÓDIGO</TableNameColumns>
						<TableNameColumns>HORÁRIO</TableNameColumns>
						<TableNameColumns>PROFESSOR</TableNameColumns>
						<TableNameColumns>SALA</TableNameColumns>
						<TableNameColumns></TableNameColumns>
					</TableRow>
				</thead>
				<tbody>
					{disciplinas.map((disciplina) => (
						<TableRow key={disciplina.id}>
							<TableCell>{disciplina.nome}</TableCell>
							<TableCell>{disciplina.codigo}</TableCell>
							<TableCell>{disciplina.horario}</TableCell>
							<TableCell>{disciplina.professor}</TableCell>
							<TableCell>{disciplina.sala}</TableCell>
							<TableCell>
								<TableButton>
									<FaMapMarkerAlt size={16} />
									Encontre a sala
								</TableButton>
							</TableCell>
						</TableRow>
					))}
				</tbody>
			</StyledTable>
		</TableContainer>
	);
};
