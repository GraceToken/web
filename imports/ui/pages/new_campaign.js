import { Organizations } from '/imports/api/organizations/organizations.js';
import { Campaigns } from '/imports/api/campaigns/campaigns.js';
import '/imports/api/users/users.js';

import './new_campaign.html';


Template.new_campaign_page.onRendered(function() {
	$('#startTime').datepicker({ minDate: 0 });
	$('#endTime').datepicker({ minDate: 0 });
});

Template.new_campaign_page.helpers({
	orgs: function() {
		return Meteor.user().organizations().fetch();
	}
});

Template.new_campaign_page.events({
	'submit .new-campaign-form': function(e){
		e.preventDefault();
		let params = {
			name: $('.new-campaign-form [name=name]').val(),
			email: $('.new-campaign-form [name=email]').val(),
			image_url: $('.new-campaign-form [name=image_url]').val(),
			organizationId: $('.new-campaign-form [name=organizationId]').val(),
			short_description: $('.new-campaign-form [name=short_description]').val(),
			description: $('.new-campaign-form [name=description]').val(),
			goal: $('.new-campaign-form [name=goal]').val(),
			website_url: $('.new-campaign-form [name=website_url]').val(),
			facebook_url: $('.new-campaign-form [name=facebook_url]').val(),
			twitter_url: $('.new-campaign-form [name=twitter_url]').val(),
			raised: 0,
			reward: $('.new-campaign-form [name=reward]').val(),
			startTime: $('.new-campaign-form [name=startTime]').val(),
			endTime: $('.new-campaign-form [name=endTime]').val()
		};

		Meteor.call('createCampaign', params, function(error, response) {
			if (error) {
				// handle errors
			}

			FlowRouter.redirect('/campaigns/' + response._id);
		});
	}
});
