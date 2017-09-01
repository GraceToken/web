import './featured_org.html';

Template.featuredOrg.helpers({
	truncate(text) {

		console.log(text);
		if (text.length < 140) {
			return text;
		}
		return text.slice(0, 140) + '...';
	}
});
