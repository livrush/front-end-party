# Front End Party website

## Setup

```sh
git clone git@github.com:frontEndParty/frontendparty-v2.git
cd front-end-party
yarn
yarn start
```

## Develop

### Styling

Styles are written in Sass, compiled using Compass. If you have Compass installed you can compile Sass by running `yarn style` from the root directory.

### Images

Images that will be accessed through stylesheets should be stored in `/src/assets`. They can be accessed by relative file paths.

Images that will be accessed through javascript should be stored in `/public/images`. They can be accessed through absolute paths, relative to `/public`.

## Archive

The `/src/archive` folder contains multiple json files of #FEP relevant info.

### Links

This file contains important links for Front End Party, particularly the Meetup page, other social media links, and any sponsor/host websites.

### Meetups

This file contains an **array** of all previous meetups using the following object structure:

```js
{
  "id": 1,
  "date": "June 23, 2029",
  "meetup": "https://www.meetup.com/FrontEndParty/events/qkftvqyzhbfc/",
  "talks": [
    {
      "presenter": "Person McFace",
      "title": "A Great Presentation about Front End Tech",
      "description": "Listen to Person McFace speak about Front End Tech"
    },
  ]
}
```

### Organizers

This file contains an **array** of all organizers for the meetup using the following object structure:

```js
{
  "name": "Organizee McPerson",
  "headshot": "/images/headshots/organizee-mcperson.png",
  "emoji": "\uD83C\uDF8A",
  "social": {
    "website": "",
    "linkedin": "",
    "github": "",
    "twitter": ""
  }
},
```

Emojis, chosen by organizer, should be provided using **Javascript Escape** values. [Here is a site that can help you find these codes.](https://www.charbase.com/1f38a-unicode-confetti-ball) Extra social media can be added, but should be adjusted in the `Organizers` component to reflect and display them.

### Presenters

This file contains an **object** of all presenters for the meetup using the following object structure:

```js
  "Person McFace": {
    "name": "Person McFace",
    "headshot": "/images/headshots/person-mcface.png",
    "position": "",
    "social": {
      "website": "",
      "github": "",
      "twitter": ""
    }
  },
```

These objects are dynamically accessed for the current speaker lineup, so it's important they are well attended.

## Deploy

The website is deployed on Heroku. All you should need to do is:

* set a `heroku` git remote
* run `yarn deploy`

Ask the other organizers if you need the heroku remote.
