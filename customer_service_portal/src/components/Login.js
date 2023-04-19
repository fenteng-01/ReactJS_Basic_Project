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
        // let tempLogin = Object.assign({}, login, { [e.target.name]: e.target.value });
        let tempLogin = { ...login, [e.target.name]: e.target.value}
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

// TODO:
// className={"panel-heading"} 和 className="panel-heading-left" 的区别是什么?
    // className={"panel-heading"} 是把panel-heading这个字符串作为className的值
    // className="panel-heading-left" 是把panel-heading-left这个字符串作为className的值

// TODO:
// <Form horizontal="true" onSubmit={handleSubmit}>
    // horizontal="true" 这个属性是什么意思?
        // horizontal="true" 是一个布尔值, 用来表示是否水平排列表单,如果为true, 则表单会水平排列, 如果为false, 则表单会垂直排列。
        // 会受外层div的样式影响吗，如果会，那么这个属性有什么用? 
            // 会受外层div的样式影响, 如果外层div的样式是水平排列, 则表单会水平排列, 如果外层div的样式是垂直排列, 则表单会垂直排列。
// TODO:
    // Form.Group使用react-bootstrap.
    // 链接是: https://react-bootstrap.github.io/components/forms/#forms-form-group
// Form.Control不需要value属性吗?
    // Form.Control不需要value属性, 因为Form.Control是一个受控组件, 它的值是由state来控制的。
// 为什么要使用Form.Group? 
    // Form.Group是一个容器组件, 它的作用是把表单元素包裹起来, 使得表单元素之间有一定的间距。
    // 一个Form.Group放置多个放置多个Form.Control写法.
    // 需要注意的是，在包含多个表单控件的情况下，我们应该始终为每个表单控件设置唯一的 id 属性，并将 id 属性与 Form.Label 和 Form.Control 组件的 htmlFor 和 id 属性配对。
    // 这样做的好处是可以提高表单控件的可访问性和可维护性。例如：
        // <Form.Group controlId="formBasicName">
        //     <Form.Label htmlFor="firstName">First Name</Form.Label>
        //     <Form.Control type="text" id="firstName" placeholder="First Name" />
        //     <Form.Label htmlFor="lastName">Last Name</Form.Label>
        //     <Form.Control type="text" id="lastName" placeholder="Last Name" />
        // </Form.Group>

// className="input-lg" 是什么意思?
    // className="input-lg" 是把input-lg这个字符串作为className的值。
    // 会有什么样的效果?
        // 会使得表单元素的高度变大。

// TODO:
// <Col sm={12}> 和 <Col sm={4}> 的区别是什么?
    // <Col sm={12}> 是把sm这个属性的值设置为12, 表示在屏幕宽度小于等于576px时, 该Col组件占据12个单位的宽度。
    // <Col sm={4}> 是把sm这个属性的值设置为4, 表示在屏幕宽度小于等于576px时, 该Col组件占据4个单位的宽度。
// TODO:
// className="ml1 ms-4" 是什么意思?
    // className="ml1 ms-4" 是把ml1和ms-4这两个字符串作为className的值。
    // ml1是margin-left的缩写, ms-4是margin-start的缩写。
        // margin-left: 0.25rem;
        // margin-start: 1rem;

