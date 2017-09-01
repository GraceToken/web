import './list_campaign.html';
import './list_campaign.css';

Template.list_campaign.helpers({
	decimalToPercent(decimal) {
		return decimal * 100;
	}
});
