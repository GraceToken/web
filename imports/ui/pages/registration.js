import { FlowRouter } from 'meteor/kadira:flow-router';

import './registration.html';

Template.user_register.events({
	'submit .register-form': function(e){
		e.preventDefault();
		var email = $('[name=email]').val();
		var first_name = $('[name=first_name]').val();
		var last_name = $('[name=last_name]').val();
		var password = $('[name=password]').val();
		Accounts.createUser({
			email: email,
			password: password,
			profile: {
				first_name: first_name,
				last_name: last_name,
			}
		}, function(error) {
			if (error) {
				console.log(error.reason);
			}
			else {
				FlowRouter.redirect('/');	
			}
		});
	}
});

Template.user_login.events({
	'submit .login-form': function(event){
		event.preventDefault();
		var email = $('[name=email]').val();
		var password = $('[name=password]').val();
		Meteor.loginWithPassword(email, password, function(error) {
			if(error){
				console.log(error.reason);
			} else {
				FlowRouter.redirect('/');
			}
		});
	}
});
