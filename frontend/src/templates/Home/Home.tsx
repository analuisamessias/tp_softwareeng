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
import { Button } from '../../components/TopBar/TopBar.styles';

export type HomeProps = {};

export const Home = ({}: HomeProps) => {
	return (
		<Wrapper>
			<TopBarContainer>
				<a href="/">
					<Button>
						<img
							src="https://png.pngtree.com/png-vector/20220601/ourmid/pngtree-exit-icon-design-outline-style-button-warning-close-vector-png-image_36915374.png"
							alt="Menu"
							style={{
								width: '32px',
								height: '30px',
								background: 'transparent',
							}}
						/>
					</Button>
				</a>
				<Button>
					<img
						src="https://cdn-icons-png.flaticon.com/128/8212/8212733.png"
						alt="Menu"
						style={{ width: '32px', height: '30px', background: 'transparent' }}
					/>
				</Button>
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
							<option>2a feira</option>
							<option>3a feira</option>
							<option>4a feira</option>
							<option>5a feira</option>
							<option>6a feira</option>
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
			</ContentContainer>
		</Wrapper>
	);
};
