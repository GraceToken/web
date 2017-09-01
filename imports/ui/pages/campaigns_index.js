import { Campaigns } from '/imports/api/campaigns/campaigns.js';

import '../components/list_campaign.js';
import './campaigns_index.html';

Template.campaigns_index_page.helpers({
	campaigns: function() {
		return Campaigns.find();
	}
});
