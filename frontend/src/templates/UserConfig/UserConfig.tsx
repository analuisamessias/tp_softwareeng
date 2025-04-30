import {
	LeftSection,
	RightSection,
} from '../../components/Perfil/Perfil.styles';
import {
	Wrapper,
	ContentContainer,
	EditImage,
	Button,
	ButtonExcluir,
} from '../UserConfig/UserConfig.styles';
import { TopBarContainer } from '../../components/TopBar/TopBar.styles';
import { ReactNode } from 'react';
import {
	PerfilIcon,
	Title,
	ButtonSection,
	ButtonCancel,
	ButtonSave,
} from '../../components/Perfil/Perfil.styles';
import { FaUserCircle } from 'react-icons/fa';
import { ExitButton, MenuButton } from '../../components/TopBar/TopBar.styles';
import { IoMdClose } from 'react-icons/io';
import { FaHome } from 'react-icons/fa';

type UserConfigProps = {
	children: ReactNode;
};

export const UserConfig = ({ children }: UserConfigProps) => {
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
				<LeftSection>
					<Title>Edite sua foto de perfil</Title>
					<PerfilIcon>
						<FaUserCircle size={200} />
					</PerfilIcon>
					<EditImage>
						<Button>ALTERAR IMAGEM</Button>
						<ButtonExcluir>EXCLUIR FOTO</ButtonExcluir>
					</EditImage>
				</LeftSection>
				<RightSection>
					{children}
					<ButtonSection>
						<ButtonSave>SALVAR</ButtonSave>
						<ButtonCancel>CANCELAR</ButtonCancel>
					</ButtonSection>
				</RightSection>
			</ContentContainer>
		</Wrapper>
	);
};
