import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { Button, Form, Col, Row } from 'react-bootstrap';
import '../css/style.css';
import { loginAction } from '../actions/action';

function Login(props) {
    const [isValid, setIsValid] = useState(false);
    const [login, setLogin] = useState({ username: "", password: "" });

    const onFnf = () => {
        alert("This functionality is yet to be implemented.")
    }

    const handleLoginChange = (e) => {
        let tempLogin = Object.assign({}, login, { [e.target.name]: e.target.value });
        setLogin(tempLogin);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.login(login);
    }

    useEffect(() => {
        if (!isValid) {
            document.body.style.background = "url('/Images/bg2.jpg') no-repeat center center fixed";
            document.body.style.backgroundSize = "cover";
        }
    }, [isValid])

    return (
        <>
            {props.authState ? <Navigate to="/purchasedItems" /> : <div className="form-layout">
                <div className={"panel-heading"}>
                    <div className="panel-heading-left">
                        <h3>Sign up now</h3>
                        <p>Get access to your orders and chat for support.</p>
                    </div>
                    <div className="panel-heading-right">
                        <span className="glyphicon glyphicon-pencil"></span>
                    </div>
                </div>
                <div id="divLogin" className={"bgImage panel-body"}>
                    <Form horizontal="true" onSubmit={handleSubmit}>
                        <Form.Group controlId="formHorizontalUsername" className="mb-2">
                            <Col sm={12}>
                                <Form.Control size="lg" name="username" className="input-lg" onChange={handleLoginChange} type="text" placeholder="Enter Username" autoComplete='off' />
                            </Col>
                        </Form.Group>

                        <Form.Group controlId="formHorizontalPassword" className="mb-2">
                            <Col sm={12}>
                                <Form.Control size="lg" name="password" className="input-lg" onChange={handleLoginChange} type="password" placeholder="Password" autoComplete='off' />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row}>
                            <Col sm={4}>
                                <Button className="ml1 ms-4" variant="success" type="submit"> Sign in </Button>
                            </Col>
                            <Col sm={8}>
                                <Button className="ms-5" variant="link" onClick={onFnf}> Terms and Conditions </Button>
                            </Col>
                        </Form.Group>
                    </Form>
                </div>
            </div>}
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        authState: state.login.isAuthed
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: (data) => dispatch(loginAction(data))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

// handleLoginChange方法解释
    // e.target是什么? 为什么要用e.target.name?
    // e.target是一个对象，包含了事件的信息，比如事件的类型，事件的目标，事件的坐标等等
    // e.target.name是事件的目标的name属性，这里是input的name属性，所以e.target.name就是input的name属性
    // e.target是input标签吗？不是，e.target是input标签的父元素，也就是form标签
    // 所以onChange事件是在form标签上触发的，而不是input标签上触发的
    // 为什么要用e.target.name?
    // 因为我们要根据input的name属性来确定是哪个input发生了变化，然后根据name属性来更新state
    // 为什么要用e.target.value?
    // 因为我们要根据input的value属性来确定input的值，然后根据value属性来更新state