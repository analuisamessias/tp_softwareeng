'use client';

import { Auth } from '../../templates/Auth/Auth';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Title, Form, Input, Button, LinkText } from './LoginForm.styles';

export const LoginForm = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const router = useRouter();

	useEffect(() => {
		const token = localStorage.getItem('token');
		if (token) {
				router.push('/home');
		}
	}, [router]);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setError('');
		try {
			const credentials = btoa(`${email}:${password}`);
			const response = await fetch('http://localhost:8000/api/auth/login/', {
				method: 'POST',
				headers: {
						'Authorization': `Basic ${credentials}`,
						'Content-Type': 'application/json',
				},
			});
			if (!response.ok) {
				const errorData = await response.json();
				throw new Error(errorData.message || 'Credenciais inválidas');
			}
			const data = await response.json();
			localStorage.setItem('token', data.token);
			localStorage.setItem('user', JSON.stringify(data.user));
			router.push('/home');
		} catch (err: any) {
				setError(err.message || 'Erro ao fazer login');
		}
	};

	return (
		<Auth>
			<Title>Bem vindo(a) ao portal do DCC HUB</Title>
			<Form onSubmit={handleSubmit}>
				<Input
					type="email"
					placeholder="E-mail"
					value={email}
					onChange={e => setEmail(e.target.value)}
					required
				/>
				<Input
					type="password"
					placeholder="Senha"
					value={password}
					onChange={e => setPassword(e.target.value)}
					required
				/>
				<Button type="submit">ENTRAR</Button>
				{error && <span style={{ color: 'red' }}>{error}</span>}
				<LinkText href="./auth/register">Cadastre-se no DCC HUB</LinkText>
			</Form>
		</Auth>
	);
};