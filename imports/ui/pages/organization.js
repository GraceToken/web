import { Organizations } from '/imports/api/organizations/organizations.js';

import './organization.html';
import './organization.css';

// Template.organization_show.onCreated(function() {
//   this.getOrgId = () => FlowRouter.getParam('_id');
// });

Template.organization_show.helpers({
	org() {
		return Organizations.findOne({ _id: FlowRouter.getParam('_id') });
	}
});
