const meetups = require('../archive/meetups.json');

const talks = meetups.reduce((talks, meetup) => {
  return talks.concat(meetup.talks.flat());
}, []);

const speakers = talks.map(talk => talk.presenter);

function uniq(array) {
  const result = [];
  array.forEach(val => {
    val.split(',').forEach(name => {
      name = name.trim();
      if (!result.includes(name)) {
        result.push(name);
      }
    })
  });
  return result;
}

const unique = uniq(speakers).sort();

const mapped = unique.reduce((map, name) => {
  return {
    ...map,
    [name]: {
      name,
      headshot: "",
      position: "",
      social: {
        website: "",
        github: "",
        twitter: ""
      }
    }
  }
}, {})

console.log(JSON.stringify(mapped));
