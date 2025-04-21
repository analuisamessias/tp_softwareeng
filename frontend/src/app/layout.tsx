import type { Metadata } from 'next';
import { Epilogue } from 'next/font/google';

const epilogue = Epilogue({
	weight: ['100', '400', '500', '600', '700', '800'],
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'DCC Hub',
	description: 'Page DCC Hub',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
