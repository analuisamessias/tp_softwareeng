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
import { IoMdClose, IoMdMenu } from 'react-icons/io';

export type HomeProps = {};

export const Home = ({}: HomeProps) => {
	const disciplinas = [
		{
			id: 1,
			nome: 'Engenharia de Software',
			codigo: 'DCC094',
			horario: '2a e 4a - 14:55/16:35',
			professor: 'Marco Tulio de Oliveira',
			sala: 'CAD 3 - 210',
		},
		{
			id: 2,
			nome: 'Estruturas de Dados',
			codigo: 'DCC205',
			horario: '3a e 5a - 14:55/16:35',
			professor: 'Wagner Meira',
			sala: 'CAD 3 - 213',
		},
		{
			id: 3,
			nome: 'Cibersegurança',
			codigo: 'DCC099',
			horario: '2a e 4a - 17:00/18:40',
			professor: 'Michele Nogueira',
			sala: 'ICEx - 2013',
		},
		{
			id: 4,
			nome: 'Introdução aos Sistemas Lógicos',
			codigo: 'DCC114',
			horario: '2a e 6a - 19:00/20:40',
			professor: 'Marcos Augusto Menezes',
			sala: 'CAD 3 - 310',
		},
	];

	return (
		<Wrapper>
			<TopBarContainer>
				<a href="/">
					<ExitButton>
						<IoMdClose size={32} />
					</ExitButton>
				</a>
				<MenuButton>
					<IoMdMenu size={32} />
				</MenuButton>
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
