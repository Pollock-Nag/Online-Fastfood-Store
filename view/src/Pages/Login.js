import { Container, Row, Col, Card, CardGroup } from 'react-bootstrap';
import Nav_Bar from '../Component/Nav_Bar';
import Signupform from '../Component/Signupform';
import Signin from '../Component/Signin';
import "../Pages/Login.css";
import "../Component/form.css";
import './Login.css';


const Login = () => {
    return (
        <div className="content">
            <>
                <Nav_Bar></Nav_Bar>
                <Container>
                    <Row>
                        <Col><Signupform></Signupform></Col>
                        <Col><br /><Signin></Signin></Col>
                    </Row>
                </Container>

            </>

        </div>
    );
}

export default Login;
