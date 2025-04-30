'use client';

import React from 'react';
import { Title, Form, Input } from './Perfil.styles';
import { UserConfig } from '../../templates/UserConfig/UserConfig';

export const Perfil = () => {
	return (
		<UserConfig>
			<Title>Edite suas informações</Title>
			<Form>
				<Input type="text" placeholder="Nome completo" />
				<Input type="text" placeholder="Curso" />
				<Input type="text" placeholder="Matrícula" />
				<Input type="email" placeholder="Novo e-mail" />
				<Input type="email" placeholder="Confirme seu e-mail" />
				<Input type="password" placeholder="Nova Senha" />
				<Input type="password" placeholder="Confirme sua senha" />
			</Form>
		</UserConfig>
	);
};
