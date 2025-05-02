'use client';

import React, { useEffect, useState } from 'react';
import { Title, Form, Input } from './Perfil.styles';
import { UserConfig } from '../../templates/UserConfig/UserConfig';

export const Perfil = () => {
    const [id, setId] = useState<number | null>(null);
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [originalNome, setOriginalNome] = useState('');
    const [originalEmail, setOriginalEmail] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    useEffect(() => {
        setLoading(true);
        setError('');
        try {
            const userStr = localStorage.getItem('user');
            if (!userStr) throw new Error('Usuário não encontrado no localStorage');
            const user = JSON.parse(userStr);
            setId(user.id);
            setNome(user.nome);
            setEmail(user.email);
            setOriginalNome(user.nome);
            setOriginalEmail(user.email);
        } catch (err: any) {
            setError(err.message || 'Erro ao carregar usuário');
        } finally {
            setLoading(false);
        }
    }, []);

    const isChanged = () =>
        nome !== originalNome ||
        email !== originalEmail ||
        senha.length > 0;

    // Função para salvar alterações, chamada pelo botão "SALVAR" do UserConfig
    const handleSave = async () => {
        setError('');
        setSuccess('');
        try {
            const token = localStorage.getItem('token');
            if (!id) throw new Error('ID do usuário não encontrado.');
            const body: any = {};
            if (nome !== originalNome) body.nome = nome;
            if (email !== originalEmail) body.email = email;
            if (senha.length > 0) body.password = senha;

            const response = await fetch(`http://localhost:8000/api/users/${id}/`, {
                method: 'PATCH',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Erro ao atualizar usuário');
            }
            const updatedUser = await response.json();
						localStorage.setItem('user', JSON.stringify(updatedUser));
						setNome(updatedUser.nome);
						setEmail(updatedUser.email);
						setOriginalNome(updatedUser.nome);
						setOriginalEmail(updatedUser.email);
						setSenha('');
						setSuccess('Dados atualizados com sucesso!');
        } catch (err: any) {
            setError(err.message || 'Erro ao atualizar usuário');
        }
    };

    // Função para cancelar alterações, chamada pelo botão "CANCELAR" do UserConfig
    const handleCancel = () => {
        setNome(originalNome);
        setEmail(originalEmail);
        setSenha('');
        setError('');
        setSuccess('');
    };

    return (
        <UserConfig
            onSave={handleSave}
            onCancel={handleCancel}
            saveDisabled={!isChanged() || loading}
        >
            <Title>Edite suas informações</Title>
            <Form>
                <Input
                    type="text"
                    placeholder="Nome completo"
                    value={nome}
                    onChange={e => setNome(e.target.value)}
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
                    placeholder="Nova Senha"
                    value={senha}
                    onChange={e => setSenha(e.target.value)}
                />
                {error && <span style={{ color: 'red' }}>{error}</span>}
                {success && <span style={{ color: 'green' }}>{success}</span>}
            </Form>
        </UserConfig>
    );
};