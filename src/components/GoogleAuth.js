import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn, signOut } from '../actions'

class GoogleAuth extends Component {
    /**
     * Initialize state isSingedIn to null since
     * we don't know if the user is signed in or not at 
     * this point
     */
    // state = { isSignedIn: null }; <-- this was moved to redux
    /**
     * Create Google authentication instance and 
     * update state when authenticaion changes
     */
    componentDidMount() {
        try {
            window.gapi.load('client:auth2', () => {
                window.gapi.client.init({
                    clientId:
                        '367091204754-l29l51emratmrmit1bjhqhj7ash64rj2.apps.googleusercontent.com',
                    scope: 'email'
                }).then(() => {
                    this.auth = window.gapi.auth2.getAuthInstance();
                    //this.setState({ isSignedIn: this.auth.isSignedIn.get() }) <-- moved to redux
                    this.onAuthChange(this.auth.isSignedIn.get());
                    this.auth.isSignedIn.listen(this.onAuthChange);
                });
            });
        } catch (err) {
            console.log("An error occured " + err)
        }
    }
    /**
     * Update state when authentication changes
     * changed this to use redux actions
     */
    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn();
        }
        else {
            this.props.signOut();
        }
    }
    /**
     * Call the gapi signIn method to log in with google oauth2
     */
    onSignInClick = () => {
        this.auth.signIn();
    }
    /**
     * Call the gapi signOut method
     */
    onSignOutClick = () => {
        this.auth.signOut();
    }
    /**
     * Render button appropriate to authentication state
     */
    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return (
                <button className="ui loading google plus button">
                    <i className="google icon"></i>
                </button>
            );
        } else if (this.props.isSignedIn) {
            return (
                <button className="ui google plus button" onClick={this.onSignOutClick}>
                    <i className="google icon"></i>
                    Sign Out
                </button>
            );
        }
        else {
            return (
                <button className="ui google plus button" onClick={this.onSignInClick}>
                    <i className="google icon"></i>
                    Sign In With Google
                </button>
            );
        }
    }


    render() {
        return (
            <div>
                {this.renderAuthButton()}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn };
};
export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
