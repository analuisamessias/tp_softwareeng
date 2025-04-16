import { LoginForm } from '../components/LoginForm/LoginForm';
import { Auth } from '../templates/Auth/Auth';

export default async function LoginPage() {
	return (
		<Auth>
			<LoginForm />
		</Auth>
	);
}
