'use client';

import React, { useState } from 'react';
import {
    Title,
    Form,
    Input,
    InfoDisciplines,
    FormSala,
    FormDias,
    FormCod,
} from './DisciplinesForm.styles';

type DisciplinesFormProps = {
    onSubmit: (disciplina: {
        codigo: string;
        nome: string;
        turma: string;
        sala: string;
        inicio: string;
        fim: string;
        dias: string;
        professor: number;
    }) => void;
    loading?: boolean;
    error?: string;
    success?: string;
};

export const DisciplinesForm = ({ onSubmit, loading, error, success }: DisciplinesFormProps) => {
    const [codigo, setCodigo] = useState('');
    const [nome, setNome] = useState('');
    const [turma, setTurma] = useState('');
    const [sala, setSala] = useState('');
    const [inicio, setInicio] = useState('');
    const [fim, setFim] = useState('');
    const [dias, setDias] = useState('');
    const [professor, setProfessor] = useState<number | ''>('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({
            codigo,
            nome,
            turma,
            sala,
            inicio,
            fim,
            dias,
            professor: typeof professor === 'string' ? Number(professor) : professor,
        });
    };

    return (
        <InfoDisciplines>
            <Title>Cadastro e Edição de Disciplinas</Title>
            <Form onSubmit={handleSubmit}>
                <Input type="text" placeholder="Nome da Disciplina" value={nome} onChange={e => setNome(e.target.value)} required />
                <Input type="text" placeholder="Código da Disciplina" value={codigo} onChange={e => setCodigo(e.target.value)} required />
                <Input type="text" placeholder="Dias - Ex: '2a e 4a'" value={dias} onChange={e => setDias(e.target.value)} required />
                <Input type="text" placeholder="Início" value={inicio} onChange={e => setInicio(e.target.value)} required />
                <Input type="text" placeholder="Fim" value={fim} onChange={e => setFim(e.target.value)} required />
                <Input
                    type="number"
                    placeholder="ID Professor"
                    value={professor}
                    onChange={e => setProfessor(e.target.value === '' ? '' : Number(e.target.value))}
                    required
                />
                <Input type="text" placeholder="Turma" value={turma} onChange={e => setTurma(e.target.value)} required />
                <Input type="text" placeholder="Prédio - Sala" value={sala} onChange={e => setSala(e.target.value)} required />
                {error && <span style={{ color: 'red' }}>{error}</span>}
                {success && <span style={{ color: 'green' }}>{success}</span>}
            </Form>
        </InfoDisciplines>
    );
};