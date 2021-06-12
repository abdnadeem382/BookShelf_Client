import React, { Component } from 'react'
import {connect} from 'react-redux';
import {loginUser} from '../../actions'

class Login extends Component {
    
    state={
        email:'',
        password:'',
        error:'',
        success: false
    }

    handleInputEmail=(e)=>{
        this.setState({email:e.target.value});
    }

    handleInputPass=(e)=>{
        this.setState({password:e.target.value});
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.user.login.isAuth){
            this.props.history.push('/user')
        }
    }

    submitForm=(e)=>{
        e.preventDefault();
        this.props.dispatch(loginUser(this.state));
    }
    render() {
        let user = this.props.user;
        return (
            <div className='rl_container'>
                <form onSubmit={this.submitForm}>
                    <h2>Log In Here</h2>
                    <div className="form_element">
                        <input 
                        type="email"
                        placeholder="Enter your email here"
                        value={this.state.email}
                        onChange={this.handleInputEmail}
                        ></input>
                    </div>

                    <div className="form_element">
                        <input 
                        type="password"
                        placeholder="Enter your password here"
                        value={this.state.password}
                        onChange={this.handleInputPass}
                        ></input>
                    </div>
                    
                    <button type="submit">Log In</button>
                    <div className="error">
                        {user.login ?
                        <div>
                            {user.login.message}
                        </div> 
                        :null}
                    </div>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        user: state.user
    }
}

export default connect(mapStateToProps)(Login)
