import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { check } from 'meteor/check';

export const Organizations = new Mongo.Collection('organizations');

Meteor.methods({
	createOrg(org) {
		try {
			let orgId = Organizations.insert(org);
			return { _id: orgId };
		} catch(exception) {
			return exception;
		}
	}
});

Organizations.schema = new SimpleSchema({
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
	userId: { 
		type: String, regEx: SimpleSchema.RegEx.Id 
	}
});

Organizations.attachSchema(Organizations.schema);

Organizations.helpers({
	
});
