'use client';

import React, { useState, useEffect } from 'react';
import {
    Title,
    Form,
    Input,
    InfoDisciplines,
    FormSala,
    FormDias,
    FormCod,
    Select
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
    initialValues?: {
        codigo: string;
        nome: string;
        turma: string;
        sala: string;
        inicio: string;
        fim: string;
        dias: string;
        professor: number;
    };
};

export const DisciplinesForm = ({ onSubmit, loading, error, success, initialValues}: DisciplinesFormProps) => {
    const [codigo, setCodigo] = useState(initialValues?.codigo || '');
    const [nome, setNome] = useState(initialValues?.nome || '');
    const [turma, setTurma] = useState(initialValues?.turma || '');
    const [sala, setSala] = useState(initialValues?.sala || '');
    const [inicio, setInicio] = useState(initialValues?.inicio || '');
    const [fim, setFim] = useState(initialValues?.fim || '');
    const [dias, setDias] = useState(initialValues?.dias || '');
    const [professor, setProfessor] = useState<number | ''>(initialValues?.professor || '');
    const [professores, setProfessores] = useState([]);

    useEffect(() => {
        if (initialValues) {
            setCodigo(initialValues.codigo || '');
            setNome(initialValues.nome || '');
            setTurma(initialValues.turma || '');
            setSala(initialValues.sala || '');
            setInicio(initialValues.inicio || '');
            setFim(initialValues.fim || '');
            setDias(initialValues.dias || '');
            setProfessor(initialValues.professor || '');
        }
    }, [initialValues]);

    useEffect(() => {
      const fetchProfessores = async () => {
          try {
              const token = localStorage.getItem('token');
              const response = await fetch('http://localhost:8000/api/professores/', {
                  headers: {
                      'Authorization': `Bearer ${token}`,
                      'Content-Type': 'application/json',
                  },
              });
              if (!response.ok) throw new Error('Erro ao buscar disciplinas');
              const data = await response.json();
              setProfessores(data);
          } catch (err: any) {
              // setError(err.message || 'Erro ao buscar professores');
          } finally {
              // setLoading(false);
          }
      };
      fetchProfessores();
    }, []);

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
            professor: professor === '' ? undefined : Number(professor),
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
                <Select                
                    value={professor}
                    onChange={e => setProfessor(e.target.value === '' ? '' : Number(e.target.value))}
                    required
                >
                  <option disabled value=''>Selecione um professor...</option>
                  {professores.map((p) => <option value={p.id}>{p.nome}</option>)}
                </Select>
                <Input type="text" placeholder="Turma" value={turma} onChange={e => setTurma(e.target.value)} required />
                <Input type="text" placeholder="Prédio - Sala" value={sala} onChange={e => setSala(e.target.value)} required />
                {error && <span style={{ color: 'red' }}>{error}</span>}
                {success && <span style={{ color: 'green' }}>{success}</span>}
            </Form>
        </InfoDisciplines>
    );
};