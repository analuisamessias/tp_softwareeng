'use client';

import React from 'react';
import {
	Title,
	Form,
	Input,
	InfoDisciplines,
	FormSala,
	FormDias,
	FormCod,
} from './DisciplinesForm.styles';

export type Disciplina = {
	id: number;
	nome: string;
	codigo: string;
	dia: string;
	inicio: string;
	fim: string;
	professor: string;
	sala: string;
	turma: string;
};

type DisciplinesFormProps = {
	disciplinas: Disciplina[];
};

export const DisciplinesForm = ({ disciplinas }: DisciplinesFormProps) => {
	return (
		<InfoDisciplines>
			<Title>Cadastro e Edição de Disciplinas</Title>
			<Form>
				<Input type="text" placeholder="Nome da Disciplina" />
			</Form>
			<FormCod>
				<Input type="text" placeholder="Código da Disciplina" />
			</FormCod>
			<FormDias>
				<Input type="text" placeholder="Dias - Ex: '2a e 4a'" />
				<Input type="text" placeholder="Início" />
				<Input type="text" placeholder="Fim" />
			</FormDias>
			<FormSala>
				<Input type="text" placeholder="Professor" />
				<Input type="text" placeholder="Turma" />
				<Input type="text" placeholder="Prédio - Sala" />
			</FormSala>
		</InfoDisciplines>
	);
};
