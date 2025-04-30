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
	AddButton,
} from './HomeAdmin.styles';
import { ExitButton, MenuButton } from '../../components/TopBar/TopBar.styles';
import { DisciplinesTableAdmin } from '../../components/DisciplinesAdmin/DisciplinesAdmin';
import { IoMdClose } from 'react-icons/io';
import { LuUserPen } from 'react-icons/lu';
import { MdAddBox } from 'react-icons/md';

export const HomeAdmin = () => {
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
	];

	return (
		<Wrapper>
			<TopBarContainer>
				<a href="/">
					<ExitButton>
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
							Olá, administrador! <br /> Você pode editar ou remover disciplinas
							da lista abaixo.
						</WelcomeText>

						<SearchSection>
							<SearchInput placeholder="Pesquisar..." />
						</SearchSection>
					</TextSection>

					<FiltersContainer>
						<AddButton>
							<MdAddBox size={20} />
							Adicionar Disciplina
						</AddButton>
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

				<DisciplinesTableAdmin disciplinas={disciplinas} />
			</ContentContainer>
		</Wrapper>
	);
};
