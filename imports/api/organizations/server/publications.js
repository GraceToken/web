import { Meteor } from 'meteor/meteor';

import { Organizations } from '../organizations.js';

Meteor.publish('organizations', function listsPublic() {
  return Organizations.find({
    userId: { $exists: false },
  });
});
