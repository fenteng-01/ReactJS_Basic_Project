import Login from './Login';

function LoginForm(props) {
    // props就是store里面的state
    return (
        <>
            <div>
                <a href="/" style={{ "paddingLeft": "15px" }}>
                    <img alt="csp1" width="auto" height="75px" src="/images/csp1.png" />
                </a>
            </div>
            <div className="jumbotron" style={{ "opacity": "0.85" }}>
                <div className="container">
                    <h1>Customer Service Portal</h1>
                    <p>Your one point contact for issues related to the purchased products.</p>
                </div>
            </div>
            <div className="container" id="wrap">
                <div className={"row bgClass"} style={{ "marginTop": "15px", "marginBottom": "45px" }}>
                    <div className={"col-lg-5 offset-lg-7"}>
                        <Login history={props.history} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginForm;

// <Login history={props.history} /> 的作用是把history传递给Login组件
    // 这样Login组件就可以通过props.history来访问history对象了
    // 这样就可以在Login组件中使用history.push()方法来跳转页面了
    // 也可以在Login组件中使用history.goBack()方法来返回上一个页面了
    // 也可以在Login组件中使用history.goForward()方法来跳转到下一个页面了
    // 也可以在Login组件中使用history.go()方法来跳转到指定页面了
    // 也可以在Login组件中使用history.replace()方法来替换当前页面了
    // 也可以在Login组件中使用history.listen()方法来监听页面跳转了
    // 但是我没看到有使用history方法的地方, 为什么要传递history对象呢?
        // 因为Login组件中有一个函数onFnf, 这个函数是用来跳转到Terms and Conditions页面的
        // 这个函数是在Login组件中定义的, 但是Login组件中没有history对象, 所以要把history对象传递给Login组件
        // 这样Login组件就可以使用history对象了
        // 这样就可以在Login组件中使用history.push()方法来跳转页面了