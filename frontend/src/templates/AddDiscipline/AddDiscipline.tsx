import React, { ReactNode } from 'react';
import { TopBarContainer } from '../../components/TopBar/TopBar.styles';
import { ExitButton, MenuButton } from '../../components/TopBar/TopBar.styles';
import { Wrapper, ContentContainer } from './AddDiscipline.styles';
import { IoMdClose } from 'react-icons/io';
import { FaHome } from 'react-icons/fa';
import { DisciplinesForm } from '../../components/DisciplinesForm/DisciplinesForm';
import {
	ButtonSection,
	ButtonSave,
	ButtonCancel,
} from '../../components/DisciplinesForm/DisciplinesForm.styles';

interface AddDisciplineProps {
	children: ReactNode;
}

export const AddDiscipline = ({ children }: AddDisciplineProps) => {
	return (
		<Wrapper>
			<TopBarContainer>
				<a href="/">
					<ExitButton>
						<IoMdClose size={32} />
					</ExitButton>
				</a>
				<a href="/home">
					<MenuButton>
						<FaHome size={32} />
					</MenuButton>
				</a>
			</TopBarContainer>
			<ContentContainer>
				<DisciplinesForm />
				<ButtonSection>
					<ButtonSave>SALVAR</ButtonSave>
					<ButtonCancel>CANCELAR</ButtonCancel>
				</ButtonSection>
			</ContentContainer>
		</Wrapper>
	);
};
