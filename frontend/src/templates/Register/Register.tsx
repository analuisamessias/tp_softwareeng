import { ReactNode } from 'react';
import {
	LeftSection,
	RightSection,
} from '../../components/RegisterForm/RegisterForm.styles';
import Image from 'next/image';
import { Wrapper, Content, TopBar, BottomBar } from './Register.styles';

type RegisterProps = {
	children: ReactNode;
};

export const Register = ({ children }: RegisterProps) => {
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
