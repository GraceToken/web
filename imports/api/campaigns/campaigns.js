import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Organizations } from '/imports/api/organizations/organizations.js';

export const Campaigns = new Mongo.Collection('campaigns');

Meteor.methods({
	createCampaign(campaign) {
		// check(campaign, Campaign.simpleSchema() );
		try {
			let campaignId = Campaigns.insert(campaign);
			return { _id: campaignId };
		} catch(exception) {
			return exception;
		}
	}
});

Campaigns.schema = new SimpleSchema({
	_id: { 
		type: String, regEx: SimpleSchema.RegEx.Id 
	},
	name: {
		type: String
	},
	website_url: { 
		type: String 
	},
	facebook_url: { 
		type: String, optional: true 
	},
	twitter_url: { 
		type: String, optional: true
	},
	email: { 
		type: String 
	},
	image_url: { 
		type: String 
	},
	short_description: { 
		type: String
	},
	description: { 
		type: String 
	},
	organizationId: { 
		type: String, regEx: SimpleSchema.RegEx.Id 
	},
	goal: {
		type: Number,
		decimal: true
	},
	raised: {
		type: Number,
		decimal: true
	},
	reward: {
		type: Number,
		decimal: true
	},
	startTime: {
		type: Date
	},
	endTime: {
		type: Date
	}
});

Campaigns.attachSchema(Campaigns.schema);

Campaigns.helpers({
	organization: function() {
		return Organizations.findOne({ _id: this.organizationId });
	}
});
