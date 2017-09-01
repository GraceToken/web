import { Organizations } from '/imports/api/organizations/organizations.js';

import './new_organization.html';

Template.new_organization_page.helpers({
	orgs: function() {
		return Meteor.user().organizations().fetch();
	}
});

Template.new_organization_page.events({
	'submit .new-org-form': function(e){
		e.preventDefault();
		let params = {
			name: $('.new-org-form [name=name]').val(),
			userId: Meteor.userId(),
			email: $('.new-org-form [name=email]').val(),
			image_url: $('.new-org-form [name=image_url]').val(),
			short_description: $('.new-org-form [name=short_description]').val(),
			description: $('.new-org-form [name=description]').val(),
			website_url: $('.new-org-form [name=website_url]').val(),
			facebook_url: $('.new-org-form [name=facebook_url]').val(),
			twitter_url: $('.new-org-form [name=twitter_url]').val()
		};

		Meteor.call('createOrg', params, function(error, response) {
			if (error) {
				// handle errors
				console.log(error);
			}

			FlowRouter.redirect('/organizations/' + response._id);
		});
	}
});
