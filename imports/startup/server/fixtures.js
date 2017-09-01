import { Meteor } from 'meteor/meteor';
import seeder from '../../modules/server/seeder.js';
import { Campaigns } from '../../api/campaigns/campaigns.js';
import { Organizations } from '../../api/organizations/organizations.js';

// Seed data
Meteor.startup(() => {
  seeder(Meteor.users, {
    environments: ['development', 'staging'],
    wipe: true,
    data: [
      {
        email: 'test@grace.com',
        password: 'foobar',
        profile: {
          first_name: 'Jon',
          last_name: 'Smith'
        }
      }
    ]
  });

  // Featured Organizations
  seeder(Organizations, {
    environments: ['development', 'staging'],
    wipe: true,
    data: [
      {
        name: 'Against Malaria Foundation',
        userId: Meteor.users.findOne()._id,
        website_url: 'https://www.againstmalaria.com/',
        facebook_url: 'https://www.facebook.com/AgainstMalaria/',
        twitter_url: 'https://twitter.com/AgainstMalaria',
        email: 'RMather@AgainstMalaria.com',
        image_url: 'https://www.againstmalaria.com/images/logo_AMF.gif',
        short_description: 'AMF (againstmalaria.com) provides funding for long-lasting insecticide-treated net (LLIN) distributions (for protection against malaria) in developing countries.',
        description: "**What do they do?**\n AMF (againstmalaria.com) provides funding for long-lasting insecticide-treated net (LLIN) distributions (for protection against malaria) in developing countries.\n\n**Does it work?**\n There is strong evidence that distributing nets reduces child mortality and malaria cases. AMF has relatively strong reporting requirements for its distribution partners and provides a level of public disclosure and tracking of distributions that we have not seen from any other net distribution charity. AMF's post-distribution surveys have generally found positive results, but have some methodological limitations.\n\n**What do you get for your dollar?**\n We estimate that the cost to purchase and distribute an AMF-funded net is $4.35 in Malawi, $5.92 in the Democratic Republic of the Congo (DRC), and $5.14 in Ghana (the three countries that AMF has completed large-distributions in). We also very roughly estimate, based on past and planned distributions, that the cost per net in distributions AMF may fund with additional donations is $4.85. The numbers of malaria cases prevented and lives saved are a function of a number of difficult to estimate factors, which we discuss in detail below.\n\n**Is there room for more funding?**\nWe estimate that AMF could productively use or commit a maximum of between $78 million (50% confidence) and $191 million (5% confidence) in additional unrestricted funding in its next budget year. We are most confident in the value of the funds for the first $11 million it receives, but we expect funds to continue to be valuable, though possibly somewhat less cost-effective, above that level."
      },
      {
        name: 'Schistosomiasis Control Initiative (SCI)',
        userId: Meteor.users.findOne()._id,
        website_url: '#',
        facebook_url: '#',
        twitter_url: '#',
        email: '#',
        image_url: 'https://www.imperial.ac.uk/ImageCropToolT4/imageTool/uploaded-images/SCI-logo-no-Imperial_RGB--tojpeg_1488560697231_x2.jpg',
        short_description: 'The Schistosomiasis Control Initiative advocates for, funds, provides technical assistance to, and monitors government-run deworming programs.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        name: 'Give Directly',
        userId: Meteor.users.findOne()._id,
        website_url: '#',
        facebook_url: '#',
        twitter_url: '#',
        email: '#',
        image_url: 'https://yt3.ggpht.com/-GyKWNgFSoqU/AAAAAAAAAAI/AAAAAAAAAAA/Xxais_j7L68/s900-c-k-no-mo-rj-c0xffffff/photo.jpg',
        short_description: 'GiveDirectly (givedirectly.org) transfers cash to households in developing countries via mobile phone-linked payment services. It targets extremely low-income households.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        name: 'Deworm the World Initiative',
        userId: Meteor.users.findOne()._id,
        website_url: '#',
        facebook_url: '#',
        twitter_url: '#',
        email: '#',
        image_url: 'https://static1.squarespace.com/static/546f9316e4b0ced8102e4c74/t/547117d3e4b031c87aee695f/1503696439860/%253Fformat=1500w',
        short_description: 'What do they do? The Deworm the World Initiative (evidenceaction.org/#deworm-the-world), led by Evidence Action, advocates for, supports, and evaluates government-run school-based deworming programs.',
        description: '**What do they do?**\n The Deworm the [World Initiative](evidenceaction.org/#deworm-the-world), led by Evidence Action, advocates for, supports, and evaluates government-run school-based [deworming programs](http://www.givewell.org/international/technical/programs/deworming).\n\n**Does it work?**\n We believe there is relatively strong evidence for the positive impact of deworming. Deworm the World sends monitors to schools during and after deworming to determine whether the programs it supports have reached a large proportion of children targeted. We have reviewed data from its two largest programs and one new program, which overall indicate strong results. '
      }
    ]
  });


  // Normal Organiations
  seeder(Organizations, {
    environments: ['development', 'staging'],
    wipe: false,
    modelCount: 20,
    model(index, f) {
      let faker = f.faker;
      return {
        name: faker['lorem'].words(1) + ' Foundation',
        website_url: '#',
        facebook_url: '#',
        twitter_url: '#',
        email: faker.internet.email(),
        image_url: 'http://via.placeholder.com/300x300',
        short_description: faker['lorem'].sentences(),
        description: faker.lorem.sentences(),
        userId: Meteor.users.findOne()._id,
      };
    },
  });

  seeder(Campaigns, {
    environments: ['development', 'staging'],
    wipe: true,
    modelCount: 20,
    model(index, f) {
      let faker = f.faker;
      return {
        name: faker['lorem'].words(1) + ' Fundraiser',
        website_url: '#',
        facebook_url: '#',
        twitter_url: '#',
        email: '#',
        image_url: 'http://via.placeholder.com/300x300',
        short_description: faker['lorem'].sentences(),
        description: faker.lorem.sentences(),
        organizationId: Organizations.findOne()._id,
        goal: 100000,
        raised: 0,
        reward: 0.05,
        startTime: faker.date.future(),
        endTime: faker.date.future()
      };
    },
  });
});
