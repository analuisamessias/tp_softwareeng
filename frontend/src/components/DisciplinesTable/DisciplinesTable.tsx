import React from 'react';
import {
	TableContainer,
	StyledTable,
	TableRow,
	TableCell,
	TableNameColumns,
	TableButton,
} from './DisciplinesTable.styles';
import { FaMapMarkerAlt } from 'react-icons/fa';

export type Disciplina = {
	id: number;
	nome: string;
	codigo: string;
	dias: string;
	inicio: string;
	fim: string;
	nome_professor: string;
	sala: string;
	turma: string;
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
						<TableNameColumns>DIA</TableNameColumns>
						<TableNameColumns>INÍCIO</TableNameColumns>
						<TableNameColumns>FIM</TableNameColumns>
						<TableNameColumns>TURMA</TableNameColumns>
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
							<TableCell>{disciplina.dias}</TableCell>
							<TableCell>{disciplina.inicio}</TableCell>
							<TableCell>{disciplina.fim}</TableCell>
							<TableCell>{disciplina.turma}</TableCell>
							<TableCell>{disciplina.nome_professor}</TableCell>
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
