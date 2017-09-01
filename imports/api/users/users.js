import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Organizations } from '../organizations/organizations.js';
import { Campaigns } from '../campaigns/campaigns.js'; 
export const Users = Meteor.users;

Users.schema = new SimpleSchema({
	_id: { 
		type: String, regEx: SimpleSchema.RegEx.Id 
	},
	first_name: { 
		type: String 
	},
	last_name: { 
		type: String 
	},
	email: { 
		type: String 
	},
	password: { 
		type: String 
	},
	createdAt: {
		type: Date,
		denyUpdate: true
	},
	updatedAt: {
		type: Date,
	},
});

Users.attachSchema(Users.schema);

Meteor.users.helpers({
	organizations: function() {
		return Organizations.find({ userId: this._id });
	}
});
