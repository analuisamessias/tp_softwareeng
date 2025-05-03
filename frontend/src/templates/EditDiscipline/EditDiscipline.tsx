import React, { useEffect, useState } from 'react';
import { TopBarContainer, ExitButton, MenuButton } from '../../components/TopBar/TopBar.styles';
import { Wrapper, ContentContainer } from '../AddDiscipline/AddDiscipline.styles';
import { IoMdClose } from 'react-icons/io';
import { FaHome } from 'react-icons/fa';
import { DisciplinesForm } from '../../components/DisciplinesForm/DisciplinesForm';
import {
    ButtonSection,
    ButtonSave,
    ButtonCancel,
} from '../../components/DisciplinesForm/DisciplinesForm.styles';

export const EditDiscipline = ({ id }: { id: string }) => {
    const [initialValues, setInitialValues] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    useEffect(() => {
        const fetchDisciplina = async () => {
            setLoading(true);
            setError('');
            try {
                const token = localStorage.getItem('token');
                const response = await fetch(`http://localhost:8000/api/disciplines/${id}/`, {
					headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                });
                if (!response.ok) throw new Error('Erro ao buscar disciplina');
                const data = await response.json();
                setInitialValues(data);
            } catch (err: any) {
                setError(err.message || 'Erro ao buscar disciplina');
            } finally {
                setLoading(false);
            }
        };
        fetchDisciplina();
    }, [id]);

    const handleSubmit = async (disciplina: any) => {
        setError('');
        setSuccess('');
        setLoading(true);
        try {
            const token = localStorage.getItem('token');
            const body: any = {
              codigo: disciplina.codigo,
              nome: disciplina.nome,
              turma: disciplina.turma,
              sala: disciplina.sala,
              inicio: disciplina.inicio,
              fim: disciplina.fim,
              dias: disciplina.dias,
            };

            if (disciplina.professor !== '' && disciplina.professor !== null && disciplina.professor !== undefined) {
              body.professor = disciplina.professor;
            }

            const response = await fetch(`http://localhost:8000/api/disciplines/${id}/`, {
                method: 'PATCH',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Erro ao editar disciplina');
            }
            setSuccess('Disciplina editada com sucesso!');
        } catch (err: any) {
            setError(err.message || 'Erro ao editar disciplina');
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
                    <ExitButton>
                        <IoMdClose size={32} />
                    </ExitButton>
                </a>
            </TopBarContainer>
            <ContentContainer>
                <DisciplinesForm
                    onSubmit={handleSubmit}
                    loading={loading}
                    error={error}
                    success={success}
                    initialValues={initialValues}
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