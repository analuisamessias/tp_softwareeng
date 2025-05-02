import React from 'react';
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

export type HomeProps = {};

export const Home = ({}: HomeProps) => {
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
	};
		
	const disciplinas = [
		{
			id: 1,
			nome: 'Engenharia de Software',
			codigo: 'DCC094',
			dia: '2a e 4a',
			inicio: '17:00',
			fim: '18:40',
			professor: 'Marco Tulio de Oliveira',
			turma: 'TW',
			sala: 'CAD 3 - 210',
		},
		{
			id: 2,
			nome: 'Estruturas de Dados',
			codigo: 'DCC205',
			dia: '3a e 5a',
			inicio: '14:55',
			fim: '16:35',
			professor: 'Wagner Meira',
			turma: 'TN',
			sala: 'CAD 3 - 213',
		},
		{
			id: 3,
			nome: 'Cibersegurança',
			codigo: 'DCC099',
			dia: '2a e 4a',
			inicio: '17:00',
			fim: '18:40',
			professor: 'Michele Nogueira',
			turma: 'TN',
			sala: 'ICEx - 2013',
		},
		{
			id: 4,
			nome: 'Introdução aos Sistemas Lógicos',
			codigo: 'DCC114',
			dia: '2a e 6a',
			inicio: '19:00',
			fim: '20:40',
			professor: 'Marcos Augusto Menezes',
			turma: 'TA1',
			sala: 'CAD 3 - 310',
		},
	];

	return (
		<Wrapper>
			<TopBarContainer>
				<a href="/">
					<ExitButton onClick={handleLogout}>
						<IoMdClose size={32} />
					</ExitButton>
				</a>
				<a href="/userconfig">
					<MenuButton>
						<LuUserPen size={32} />
					</MenuButton>
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
							<SearchInput placeholder="Pesquisar..." />
						</SearchSection>
					</TextSection>

					<FiltersContainer>
						<FilterSelect>
							<option>Dias</option>
							<option>Segunda-feira</option>
							<option>Terça-feira</option>
							<option>Quarta-feira</option>
							<option>Quinta-feira</option>
							<option>Sexta-feira</option>
							<option>Sábado</option>
						</FilterSelect>

						<FilterSelect>
							<option>Prédio</option>
							<option>CAD 1</option>
							<option>CAD 2</option>
							<option>CAD 3</option>
							<option>ICEx</option>
							<option>FAFICH</option>
						</FilterSelect>
					</FiltersContainer>
				</LogoSection>

				<DisciplinesTable disciplinas={disciplinas} />
			</ContentContainer>
		</Wrapper>
	);
};
