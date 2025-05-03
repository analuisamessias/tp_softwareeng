import React from 'react';
import { useRouter } from 'next/navigation';
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
	dias: string;
	inicio: string;
	fim: string;
	turma: string;
	nome_professor: string;
	sala: string;
};

type DisciplinesTableAdminProps = {
	disciplinas: Disciplina[];
};

export const DisciplinesTableAdmin = ({
	disciplinas,
}: DisciplinesTableAdminProps) => {
	const router = useRouter();

	const handleEdit = (id: number) => {
			router.push(`/edit/discipline/${id}`);
	};

	const handleDelete = async (id: number) => {
			if (!window.confirm('Tem certeza que deseja apagar esta disciplina?')) return;
			try {
					const token = localStorage.getItem('token');
					const response = await fetch(`http://localhost:8000/api/disciplines/${id}/`, {
							method: 'DELETE',
							headers: {
									'Authorization': `Bearer ${token}`,
									'Content-Type': 'application/json',
							},
					});
					if (!response.ok) {
							const errorData = await response.json();
							alert(errorData.message || 'Erro ao apagar disciplina');
							return;
					}

					window.location.reload();
					alert('Disciplina apagada com sucesso!');
			} catch (err: any) {
					alert('Erro ao apagar disciplina');
			}
	};

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
															<AdminButtonsContainer>
																	<EditButton onClick={() => handleEdit(disciplina.id)}>
																			Editar
																	</EditButton>
																	<DeleteButton onClick={() => handleDelete(disciplina.id)}>
																			Apagar
																	</DeleteButton>
															</AdminButtonsContainer>
													</TableCell>
											</TableRow>
									))}
							</tbody>
					</StyledTable>
			</TableContainer>
	);
};