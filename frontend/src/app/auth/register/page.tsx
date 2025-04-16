import { RegisterForm } from '../../../components/RegisterForm/RegisterForm';
import { Auth } from '../../../templates/Auth/Auth';

export default async function RegisterPage() {
	return (
		<Auth>
			<RegisterForm />
		</Auth>
	);
}
