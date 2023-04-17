import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { Button, Form, Col, Row } from 'react-bootstrap';
import '../css/style.css';
import { loginAction } from '../actions/action';

// 这个props哪里传来的? 从<Provider>传过来
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
        // props.login是在下面mapDispatchToProps定义的, 用来调用loginAction函数
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

// state.login.isAuthed哪来的? 
    // reducers/index.js的const login = (state = initState, action)里的case issueConstants.LOGIN:
const mapStateToProps = (state) => {
    return {
        authState: state.login.isAuthed
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        // 这个login是定义在了props里的,参数data从handleSubmit里的props.login(login)
        // 为什么这里也要dispatch? 因为loginAction是一个函数, 要用dispatch来调用这个函数
        // 再解释的详细点, loginAction是一个函数, 要用dispatch来调用这个函数, 这个函数的参数是data, data是从handleSubmit里的props.login(login)传过来的
        // 这么做是为了什么? 因为这个函数是在reducers/index.js里定义的, 要用dispatch来调用这个函数
        login: (data) => dispatch(loginAction(data))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);








// connect(mapStateToProps, mapDispatchToProps)(Login)理解
    // connect(mapStateToProps, mapDispatchToProps)是一个高阶函数
    // connect(mapStateToProps, mapDispatchToProps)(Login)是一个函数
        // 这个函数的参数是Login组件
        // 这个函数的返回值是一个新的组件
            // 这个新的组件的props里有mapStateToProps和mapDispatchToProps的返回值
        // 这个新的组件的props里有Login组件的props
            // 这个新的组件的props里有dispatch,state,history,location,match等

// 我自己的理解
    // connect(mapStateToProps, mapDispatchToProps)是一个高阶函数
    // connect(mapStateToProps, mapDispatchToProps)(Login)是一个函数
    // 这个函数的参数是Login组件
    // 这个函数的返回值是一个新的组件
    // 这个新的组件的props里有mapStateToProps和mapDispatchToProps的返回值
    // 这个新的组件的props里有Login组件的props
    // 这个新的组件的props里有dispatch,state,history,location,match等


// props.login(login); // 是调用的reducers/index.js的const login = (state = initState, action)里的case issueConstants.LOGIN: