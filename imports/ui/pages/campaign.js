import { Campaigns } from '/imports/api/campaigns/campaigns.js';

import './campaign.html';
import './campaign.css';

function currentCampaign() {
	return Campaigns.findOne({ _id: FlowRouter.getParam('_id') });
};

Template.campaign_page.helpers({
	campaign() {
		return currentCampaign();
	},
	org() {
		console.log(currentCampaign().organization());
		return currentCampaign().organization();
	},
	raisedPercentage() {
		let campaign = currentCampaign();
		return 100 * campaign.raised / campaign.goal;
	}
});
