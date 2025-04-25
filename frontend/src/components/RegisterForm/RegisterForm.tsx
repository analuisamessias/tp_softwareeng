'use client';

import React from 'react';
import {
	Container,
	LeftSection,
	RightSection,
	Logo,
	Title,
	Form,
	Input,
	Button,
	LinkText,
} from './RegisterForm.styles';
import { Register } from '../../templates/Register/Register';

export const RegisterForm = () => {
	return (
		<Register>
			<Title>Faça seu cadastro no DCC Hub</Title>
			<Form>
				<Input type="text" placeholder="Nome completo" />
				<Input type="text" placeholder="Curso" />
				<Input type="text" placeholder="Matrícula" />
				<Input type="email" placeholder="E-mail" />
				<Input type="email" placeholder="Confirme seu e-mail" />
				<Input type="password" placeholder="Senha" />
				<Input type="password" placeholder="Confirme sua senha" />
				<Button>CADASTRAR</Button>
				<LinkText href="/">Já possui uma conta? Faça login</LinkText>
			</Form>
		</Register>
	);
};

//CRIAR FORMULÁRIO DE CADASTRO
