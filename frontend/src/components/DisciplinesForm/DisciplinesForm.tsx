'use client';

import React from 'react';
import { Title, Form, Input } from './DisciplinesForm.styles';
import { AddDiscipline } from '../../templates/AddDiscipline/AddDiscipline';

export const DisciplinesForm = () => {
	return (
		<AddDiscipline>
			<Title>Cadastro e Edição de Disciplinas</Title>
			<Form>
				<Input type="text" placeholder="Código" />
				<Input type="text" placeholder="Nome da Disciplina" />
				<Input type="text" placeholder="Turma" />
				<Input type="text" placeholder="Início" />
				<Input type="text" placeholder="Fim" />
				<Input type="email" placeholder="Professor" />
				<Input type="email" placeholder="Prédio" />
				<Input type="email" placeholder="Sala" />
			</Form>
		</AddDiscipline>
	);
};
