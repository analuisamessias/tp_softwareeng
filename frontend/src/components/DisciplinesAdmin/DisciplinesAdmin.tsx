import React from 'react';
import {
	TableContainer,
	StyledTable,
	TableRow,
	TableCell,
	TableTitle,
	TableNameColumns,
	AdminButtonsContainer,
	EditButton,
	DeleteButton,
} from './DisciplinesAdmin.styles';

export type Disciplina = {
	id: number;
	nome: string;
	codigo: string;
	dia: string;
	inicio: string;
	fim: string;
	turma: string;
	professor: string;
	sala: string;
};

type DisciplinesTableAdminProps = {
	disciplinas: Disciplina[];
};

export const DisciplinesTableAdmin = ({
	disciplinas,
}: DisciplinesTableAdminProps) => {
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
							<TableCell>{disciplina.dia}</TableCell>
							<TableCell>{disciplina.inicio}</TableCell>
							<TableCell>{disciplina.fim}</TableCell>
							<TableCell>{disciplina.turma}</TableCell>
							<TableCell>{disciplina.professor}</TableCell>
							<TableCell>{disciplina.sala}</TableCell>
							<TableCell>
								<AdminButtonsContainer>
									<EditButton>Editar</EditButton>
									<DeleteButton>Apagar</DeleteButton>
								</AdminButtonsContainer>
							</TableCell>
						</TableRow>
					))}
				</tbody>
			</StyledTable>
		</TableContainer>
	);
};
