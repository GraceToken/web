import { Organizations } from '/imports/api/organizations/organizations.js';

import './organizations_index.html';
import '../components/featured_org.js';

Template.organizations_index_page.helpers({
	featuredOrgs() {
		return Organizations.find();
	}
});
