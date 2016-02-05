import Auth from 'meteor/training-manager:auth-api';
import { notify } from 'meteor/training-manager:lib-web';

let auth = Riot.observable();

auth.login = function authLogin({email, password}) {
  Auth.login(email, password, function loginCb(error) {
    if (error) auth.trigger('login-error', error);
    else auth.trigger('login-success', {email, password});
  });
};


auth.signup = function authSignup({email, password, org}) {
  Auth.signup({email, org, password}, function signupCb(error) {
    if (error) auth.trigger('signup-error', error );
    else auth.trigger('signup-success', { email, org, password });
  });
};

auth.on('login-error', function onLoginError( error ) {
  notify.error( error.reason );
});

auth.on('login-success', function onLoginSuccess() {
  FlowRouter.go( '/dashboard' );
});

auth.on('signup-error', function onSignupError(error) {
  notify.error( error.reason );
});

auth.on('signup-success', function onSignupSuccess({email, password}) {
  auth.login(email, password);
});

export default auth;
