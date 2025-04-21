import { ReactNode } from 'react';
import {
	LeftSection,
	RightSection,
} from '../../components/LoginForm/LoginForm.styles';
import Image from 'next/image';
import { Wrapper, Content, TopBar, BottomBar } from './Auth.styles';

type AuthProps = {
	children: ReactNode;
};

export const Auth = ({ children }: AuthProps) => {
	return (
		<Wrapper>
			<TopBar />
			<Content>
				<LeftSection>
					<Image
						src="/logodcchub.svg"
						width="400"
						height="300"
						alt="Logo DCC Hub"
					/>
				</LeftSection>
				<RightSection>{children}</RightSection>
			</Content>
			<BottomBar />
		</Wrapper>
	);
};
