'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { LoginForm } from '../components/LoginForm/LoginForm';

export default async function LoginPage() {
	const router = useRouter();

	useEffect(() => {
			const token = localStorage.getItem('token');
			if (token) {
					router.push('/home');
			}
	}, [router]);

	return <LoginForm />;
}
