'use client';

import React, { useState, useEffect } from 'react';
import { Title, Form, Input, Button, LinkText } from './RegisterForm.styles';
import { Register } from '../../templates/Register/Register';
import { useRouter } from 'next/navigation';

export const RegisterForm = () => {
	const [fullName, setFullName] = useState('');
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
			const response = await fetch('http://localhost:8000/api/users/', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					nome: fullName,
					email: email,
					password: password
				}),
			});
			if (!response.ok) {
				const errorData = await response.json();
				throw new Error(errorData.message || 'Erro ao registrar');
			}
			const data = await response.json();
			localStorage.setItem('user', JSON.stringify(data));

			const credentials = btoa(`${email}:${password}`);
			const loginResponse = await fetch('http://localhost:8000/api/auth/login/', {
				method: 'POST',
				headers: {
						'Authorization': `Basic ${credentials}`,
						'Content-Type': 'application/json',
				},
			});
			if (!loginResponse.ok) {
				const errorData = await loginResponse.json();
				throw new Error(errorData.message || 'Erro ao fazer login');
			}
			const loginData = await loginResponse.json();
			localStorage.setItem('token', loginData.token);

			router.push('/home');
		} catch (err: any) {
				setError(err.message || 'Erro ao registrar');
		}
	};

	return (
		<Register>
			<Title>Faça seu cadastro no DCC Hub</Title>
			<Form onSubmit={handleSubmit}>
				<Input
					type="text"
					placeholder="Nome completo"
					value={fullName}
					onChange={e => setFullName(e.target.value)}
					required
				/>
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
				<Button type="submit">CADASTRAR</Button>
				{error && <span style={{ color: 'red' }}>{error}</span>}
				<LinkText href="/">Já possui uma conta? Faça login</LinkText>
			</Form>
		</Register>
	);
};
