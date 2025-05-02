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
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

type UserConfigProps = {
	children: ReactNode;
	onSave?: () => void;
	onCancel?: () => void;
	saveDisabled?: boolean;
};

export const UserConfig = ({ children, onSave, onCancel, saveDisabled }: UserConfigProps) => {
	const router = useRouter();
	const [homeHref, setHomeHref] = useState('/home');
	
	useEffect(() => {
		try {
				const userStr = localStorage.getItem('user');
				if (userStr) {
						const user = JSON.parse(userStr);
						if (user.is_staff) {
								setHomeHref('/homeadmin');
						}
				}
		} catch {}
	}, []);

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
		localStorage.removeItem('user');
	};

	const handleCancelClick = () => {
		if (onCancel) onCancel();
		router.push('/');
	};

	return (
		<Wrapper>
			<TopBarContainer>
				<a href="/">
					<ExitButton onClick={handleLogout}>
						<IoMdClose size={32} />
					</ExitButton>
				</a>
				<a href={homeHref}>
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
						<ButtonSave onClick={onSave} disabled={saveDisabled}>SALVAR</ButtonSave>
						<ButtonCancel onClick={handleCancelClick}>CANCELAR</ButtonCancel>
					</ButtonSection>
				</RightSection>
			</ContentContainer>
		</Wrapper>
	);
};
