import PatientRegistration from "../../containers/PatientRegistration";

interface IProps {
  userLoggedIn: boolean,
}

function PatientRegisterPage(props: IProps) {
  return <PatientRegistration {...props} />;
}
export default PatientRegisterPage;
