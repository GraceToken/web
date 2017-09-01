import { Meteor } from 'meteor/meteor';

import { Campaigns } from '../campaigns.js';

Meteor.publish('campaigns', function campaignsPublic() {
  return Campaigns.find({
    userId: { $exists: false },
  });
});
