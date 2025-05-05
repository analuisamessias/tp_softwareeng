import React, { useState } from 'react';
import { TopBarContainer, ExitButton, MenuButton } from '../../components/TopBar/TopBar.styles';
import { Wrapper, ContentContainer } from './AddDiscipline.styles';
import { IoMdClose } from 'react-icons/io';
import { FaHome } from 'react-icons/fa';
import { DisciplinesForm } from '../../components/DisciplinesForm/DisciplinesForm';
import {
    ButtonSection,
    ButtonSave,
    ButtonCancel,
} from '../../components/DisciplinesForm/DisciplinesForm.styles';
import { useRouter } from 'next/navigation';

export const AddDiscipline = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const router = useRouter();
    
    const handleLogout = async () => {
        const token = localStorage.getItem('token');
        if (token) {
            await fetch('http://localhost:8000/api/auth/logout/', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });
        }
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        router.push('/');
    };

    const handleCreateDiscipline = async (disciplina: any) => {
        setError('');
        setSuccess('');
        setLoading(true);
        try {
            const token = localStorage.getItem('token');
            const response = await fetch('http://localhost:8000/api/disciplines/', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(disciplina),
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Erro ao criar disciplina');
            }
            setSuccess('Disciplina criada com sucesso!');
        } catch (err: any) {
            setError(err.message || 'Erro ao criar disciplina');
        } finally {
            setLoading(false);
        }
    };

    const handleCancel = () => {
        window.location.href = '/homeadmin';
    };

    return (
        <Wrapper>
            <TopBarContainer>
                <a href="/homeadmin">
                    <MenuButton>
                        <FaHome size={32} />
                    </MenuButton>
                </a>
                <a href="/">
                    <ExitButton onClick={(e) => { e.preventDefault(); handleLogout(); }}>
                        <IoMdClose size={32} />
                    </ExitButton>
                </a>
            </TopBarContainer>
            <ContentContainer>
                <DisciplinesForm
                    onSubmit={handleCreateDiscipline}
                    loading={loading}
                    error={error}
                    success={success}
                />
                <ButtonSection>
                    <ButtonSave
                        onClick={() => {
                            const form = document.querySelector('form');
                            if (form) form.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
                        }}
                        disabled={loading}
                    >
                        SALVAR
                    </ButtonSave>
                    <ButtonCancel onClick={handleCancel}>CANCELAR</ButtonCancel>
                </ButtonSection>
            </ContentContainer>
        </Wrapper>
    );
};