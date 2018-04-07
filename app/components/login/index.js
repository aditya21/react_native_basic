import React, { Component } from 'react';
import { 
    View,
    Text,
    TextInput
 } from 'react-native';
import { connect } from 'react-redux';
import { Container, Header, Content, Form, Item, Input, Label, Button } from 'native-base';
import { login } from '../../actions/auth';
class Login extends Component {
    constructor(props){
        super(props);

        this.state = {
            username: '',
            password: ''
        }
        
    }

    getLogin(){
        this.props.onLogin(this.state.username, this.state.password);
        
    }

    checkLogin(){
        console.log(this.props.isLoggedIn)
    }

    render() {
        return (
            <Container>
                <Header />
                <Content>
                    <Form>
                        <Item floatingLabel>
                        <Label>Username</Label>
                        <Input
                            keyboardType = 'email-address'
                            value={this.state.username}
                            onChangeText={(text) =>this.setState({ username: text }) }
                        />
                        </Item>
                        <Item floatingLabel>
                        <Label>Password</Label>
                        <Input 
                            secureTextEntry = {true}
                            value={this.state.password}
                            onChangeText={(text) =>this.setState({ password: text }) }   
                        />
                        </Item>
                        <View style={{paddingTop: 10}} />
                        <View style={{padding: 10}}>
                            <Button block danger onPress={() => this.getLogin()}>
                                <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 16}}>Login</Text>
                            </Button>
                        </View>

                        <View style={{paddingTop: 10}} />
                        <View style={{padding: 10}}>
                            <Button block success onPress={() => this.checkLogin()}>
                                <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 16}}>Check Login</Text>
                            </Button>
                        </View>
                    </Form>
                </Content>
            </Container>                   
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isLoggedIn: state.auth.isLoggedIn
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
            onLogin: (username, password)=> {dispatch(login(username, password));} 
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);