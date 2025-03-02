import { Logo } from '../components';
import RegisterWrapper from '../assets/wrappers/RegisterAndLoginPage';
import { Link } from 'react-router-dom';
import { FormRow } from '../components';
import rowItems from '../utils/loginFields';

const Login = () => {
  return (
    <RegisterWrapper>
      <form className="form">
        <Logo />
        {rowItems.map((item, index) => (
          <FormRow
            key={index}
            id={item.name}
            name={item.name}
            labelName={item.labelName}
            type={item.type}
            isRequired={item.isRequired}
          />
        ))}
        <button type="submit" className="btn btn-block">
          submit
        </button>
        <p>
          Need to Register?
          <Link to="/register" className="member-btn">
            Register
          </Link>
        </p>
      </form>
    </RegisterWrapper>
  );
};

export default Login;
