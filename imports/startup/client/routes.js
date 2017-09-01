import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import to load these templates
import '../../ui/layouts/layout.js';
import '../../ui/pages/campaign.js';
import '../../ui/pages/campaigns_index.js';
import '../../ui/pages/organization.js';
import '../../ui/pages/organizations_index.js';
import '../../ui/pages/home.js';
import '../../ui/pages/registration.js';
import '../../ui/pages/new_campaign.js';
import '../../ui/pages/new_organization.js';

FlowRouter.route('/campaigns/:_id', {
  name: 'Campaigns.show',
  action: function() {
    BlazeLayout.render('layout', { main: 'campaign_page' });
  },
});

FlowRouter.route('/campaign/new', {
  name: 'Campaigns.new',
  action: function() {
    BlazeLayout.render('layout', { main: 'new_campaign_page' });
  },
});

FlowRouter.route('/campaigns', {
  name: 'Campaigns.index',
  action: function() {
    BlazeLayout.render('layout', { main: 'campaigns_index_page' });
  },
});

FlowRouter.route('/organizations', {
  name: 'Organizations.index',
  action: function() {
    BlazeLayout.render('layout', { main: 'organizations_index_page' });
  },
});

FlowRouter.route('/organizations/:_id', {
  name: 'Organizations.show',
  action: function() {
    BlazeLayout.render('layout', { main: 'organization_show' });
  },
});

FlowRouter.route('/organization/new', {
  name: 'Organizations.new',
  action: function() {
    BlazeLayout.render('layout', { main: 'new_organization_page' });
  },
});

FlowRouter.route('/users/register', {
  name: 'Users.new',
  action: function() {
    BlazeLayout.render('layout', { main: 'user_register' });
  },
});

FlowRouter.route('/users/login', {
  name: 'Sessions.new',
  action: function() {
    BlazeLayout.render('layout', { main: 'user_login' });
  },
});

FlowRouter.route('/', {
  name: 'App.home',
  action: function() {
    BlazeLayout.render('homeLayout', { main: 'home' });
  },
});
