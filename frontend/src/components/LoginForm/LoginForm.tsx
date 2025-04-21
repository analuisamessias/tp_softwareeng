'use client';

import { Auth } from '../../templates/Auth/Auth';
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
} from './LoginForm.styles';

export const LoginForm = () => {
	return (
		<Auth>
			<Title>Bem vindo(a) ao portal do DCC HUB</Title>
			<Form>
				<Input type="email" placeholder="E-mail" />
				<Input type="password" placeholder="Senha" />
				<Button>ENTRAR</Button>
				<LinkText href="./auth/register">Cadastre-se no DCC HUB</LinkText>
			</Form>
		</Auth>
	);
};

//CRIAR FORMULÁRIO DE LOGIN
