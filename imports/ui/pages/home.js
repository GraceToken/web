import { Organizations } from '/imports/api/organizations/organizations.js';

import '/imports/ui/components/featured_org.js';
import './home.html';

Template.featured_orgs.helpers({
	featuredOrgs() {
		return Organizations.find();
	}
});
