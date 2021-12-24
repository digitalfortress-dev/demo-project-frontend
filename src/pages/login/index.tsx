import Login from '../../containers/Login';

interface ILogin {
  logIn: () => void,
}

function LoginPage(props: ILogin) {
  return <Login {...props} />
}
export default LoginPage;
