'use client';

import { ReactNode } from 'react';

type AuthProps = {
	children: ReactNode;
};

export const Auth = ({ children }: AuthProps) => {
	return (
		<div>
			<title>DCC HUB</title>
			{children}
		</div>
	);
};
