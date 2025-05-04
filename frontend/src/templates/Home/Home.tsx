import React, { useEffect, useState } from 'react';
import { TopBarContainer } from '../../components/TopBar/TopBar.styles';
import {
    Wrapper,
    ContentContainer,
    LogoSection,
    WelcomeText,
    SearchSection,
    SearchInput,
    FiltersContainer,
    TextSection,
    FilterSelect,
} from './Home.styles';
import { ExitButton, MenuButton } from '../../components/TopBar/TopBar.styles';
import { DisciplinesTable } from '../../components/DisciplinesTable/DisciplinesTable';
import { IoMdClose } from 'react-icons/io';
import { LuUserPen } from 'react-icons/lu';
import { useRouter } from 'next/navigation';

export type HomeProps = {};

export const Home = ({}: HomeProps) => {
    const [disciplinas, setDisciplinas] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [search, setSearch] = useState('');
    const [filtroDia, setFiltroDia] = useState('');
    const [filtroSala, setFiltroSala] = useState('');
    const router = useRouter();

    const handleLogout = async () => {
      console.log("logging out");
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

    useEffect(() => {
        const fetchDisciplinas = async () => {
            setLoading(true);
            setError('');
            try {
                const token = localStorage.getItem('token');
                const response = await fetch('http://localhost:8000/api/disciplines/', {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                });
                if (!response.ok) throw new Error('Erro ao buscar disciplinas');
                const data = await response.json();
                setDisciplinas(data);
            } catch (err: any) {
                setError(err.message || 'Erro ao buscar disciplinas');
            } finally {
                setLoading(false);
            }
        };
        fetchDisciplinas();
    }, []);

    const disciplinasFiltradas = disciplinas.filter((disciplina) => {
        const searchLower = search.toLowerCase();
        const nomeMatch = disciplina.nome.toLowerCase().includes(searchLower);
        const profMatch = disciplina.nome_professor?.toLowerCase().includes(searchLower);

        const diaMatch = filtroDia ? disciplina.dias.toLowerCase().includes(filtroDia.toLowerCase()) : true;
        const salaMatch = filtroSala ? disciplina.sala.toLowerCase().includes(filtroSala.toLowerCase()) : true;

        return (nomeMatch || profMatch) && diaMatch && salaMatch;
    });

    return (
        <Wrapper>
            <TopBarContainer>
                <a href="/userconfig">
                    <MenuButton>
                        <LuUserPen size={32} />
                    </MenuButton>
                </a>
                <a href="/">
                    <ExitButton onClick={(e) => { e.preventDefault(); handleLogout(); }}>
                        <IoMdClose size={32} />
                    </ExitButton>
                </a>
            </TopBarContainer>

            <ContentContainer>
                <LogoSection>
                    <img
                        src="/logodcchub.svg"
                        alt="Logo DCC Hub"
                        width="200"
                        height="150"
                    />

                    <TextSection>
                        <WelcomeText>
                            Seja bem vindo(a)! <br /> Pesquise por uma disciplina, professor
                            ou use os filtros.
                        </WelcomeText>

                        <SearchSection>
                            <SearchInput
                                placeholder="Pesquisar..."
                                value={search}
                                onChange={e => setSearch(e.target.value)}
                            />
                        </SearchSection>
                    </TextSection>

                    <FiltersContainer>
                        <FilterSelect value={filtroDia} onChange={e => setFiltroDia(e.target.value)}>
                            <option value="">Dias</option>
                            <option value="2a">2a</option>
                            <option value="3a">3a</option>
                            <option value="4a">4a</option>
                            <option value="5a">5a</option>
                            <option value="6a">6a</option>
                        </FilterSelect>

                        <FilterSelect value={filtroSala} onChange={e => setFiltroSala(e.target.value)}>
                            <option value="">Prédio</option>
                            <option value="CAD1">CAD1</option>
                            <option value="CAD2">CAD2</option>
                            <option value="CAD3">CAD3</option>
                            <option value="ICEx">ICEx</option>
                            <option value="FAFICH">FAFICH</option>
                        </FilterSelect>
                    </FiltersContainer>
                </LogoSection>

                {loading ? (
                    <p>Carregando disciplinas...</p>
                ) : error ? (
                    <p style={{ color: 'red' }}>{error}</p>
                ) : (
                    <DisciplinesTable disciplinas={disciplinasFiltradas} />
                )}
            </ContentContainer>
        </Wrapper>
    );
};