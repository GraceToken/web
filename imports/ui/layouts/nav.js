import './nav.html';
import './nav.css';

Template.nav.events({
	'click .logout': function(e) {
		e.preventDefault();
		Meteor.logout();
		FlowRouter.redirect('/users/login');
	}
})