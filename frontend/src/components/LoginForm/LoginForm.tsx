import { Auth } from '../../templates/Auth/Auth';

export type LoginFormProps = {};

export const LoginForm = ({}: LoginFormProps) => {
	return (
		<Auth>
			<div>
				<h2>Insira suas credenciais</h2>
			</div>

			<form>
				<label htmlFor="email">Email</label>
				<input type="email" id="email" name="email" required />
				<label htmlFor="password">Senha</label>
				<input type="password" id="password" name="password" required />
				<button type="submit">Entrar</button>
			</form>
		</Auth>
	);
};

//CRIAR FORMULÁRIO DE LOGIN
