import React from 'react';
import Content from './Content';
import links from '../archive/links';

const CodeOfConduct = () => {
  return (
    <div className="code-of-conduct">
      <h1>Code of Conduct</h1>
      <Content emoji="&#127760;" title="Purpose">
        <p>
          Front-End Party is dedicated to being inclusive to the largest
          number of people, with the most varied and diverse backgrounds
          possible. As such, we strive to provide a friendly, safe and
          welcoming environment for all, regardless of gender, gender identity
          and expression, sexual orientation, ability, physical appearance,
          body size, race, ethnicity, age, socioeconomic status, and religion
          (or lack thereof).
        </p>
        <p>
          This code of conduct outlines our expectations for all those who
          participate in our community, as well as the consequences for
          unacceptable behavior.
        </p>
        <p>
          We invite all those who participate in Front-End Party to help us
          create safe and positive experiences for everyone.
        </p>
      </Content>
      <Content emoji="&#9989;" title="Expected Behavior">
        <p>
          The following behaviors are expected and requested of all community
          members, participants, and attendees:
        </p>
        <ul>
          <li>
            Exercise consideration and respect in your speech and actions.
          </li>
          <li>Attempt cooperation before conflict.</li>
          <li>
            Refrain from demeaning, discriminatory, or harassing behavior and
            speech.
          </li>
          <li>
            Alert community leaders if you notice a dangerous situation,
            someone in distress, or violations of this Code of Conduct, even
            if they seem inconsequential.
          </li>
          <li>
            Remember that community event venues may be shared with members of
            the public; please be respectful to all patrons of these
            locations.
          </li>
        </ul>
      </Content>
      <Content emoji="&#10062;" title="Unacceptable Behavior">
        <p>
          Harassment is unacceptable within our community, including all
          participants and attendees. Harassment includes, but is not limited
          to:
        </p>
        <ul>
          <li>
            Violence, threats of violence or violent language directed against
            another person.
          </li>
          <li>
            Sexist, racist, homophobic, transphobic, ableist or otherwise
            discriminatory jokes and language.
          </li>
          <li>
            Verbal comments that reinforce social structures of domination
            related to gender, gender identity and expression, sexual
            orientation, disability, physical appearance, body size, race,
            age, religion
          </li>
          <li>
            Posting or displaying sexually explicit or violent material.
          </li>
          <li>
            Posting or threatening to post other people's personally
            identifying information ("doxing").
          </li>
          <li>
            Personal insults, particularly those related to gender, sexual
            orientation, race, religion, or disability.
          </li>
          <li>Inappropriate or unwelcome photography or recording.</li>
          <li>
            Inappropriate physical contact. You should have someone's consent
            before touching them.
          </li>
          <li>
            Unwelcome sexual attention. This includes, sexualized comments or
            jokes; inappropriate touching, groping, and unwelcome sexual
            advances.
          </li>
          <li>
            Deliberate intimidation, stalking or following (online or in
            person).
          </li>
          <li>
            Sustained disruption of community events, including talks and
            presentations.
          </li>
          <li>Advocating for, or encouraging, any of the above behavior.</li>
        </ul>
      </Content>
      <Content emoji="&#9940;" title="Weapons Policy">
        <p>
          No weapons will be allowed at Front-End Party events, community
          spaces, or in other spaces covered by the scope of this Code of
          Conduct. Weapons include but are not limited to guns, explosives
          (including fireworks), and large knives such as those used for
          hunting or display, as well as any other item used for the purpose
          of causing injury or harm to others. Anyone seen in possession of
          one of these items will be asked to leave immediately, and will only
          be allowed to return without the weapon. Community members are
          further expected to comply with all state and local laws on this
          matter.
        </p>
      </Content>
      <Content
        emoji="&#128695;"
        title="Consequences of Unacceptable Behavior"
      >
        <p>
          Unacceptable behavior from any community member, including sponsors
          and those with decision-making authority, will not be tolerated.
        </p>
        <p>
          Anyone asked to stop unacceptable behavior is expected to comply
          immediately.
        </p>
        <p>
          If any community member, participant, or attendee engages in
          unacceptable behavior, the community organizers may take any action
          they deem appropriate, up to and including a temporary ban or
          permanent expulsion from the community and/or event without warning
          (and without refund in the case of a paid event).
        </p>
      </Content>
      <Content emoji="&#128227;" title="Reporting">
        <p>
          If you are subject to or witness unacceptable behavior, feel unsafe
          or unwelcome, or have any other concerns, please notify a community
          organizer as soon as possible by either directly contacting the
          organizers or filing an anonymous report:
        </p>
        <h3>Direct Reporting</h3>
        Directly contact one of the organizers in person or through Meetup’s
        messaging system:
        <ul>
          <li>
            <a
              className="rainbow-text link-delay"
              href={`${links.meetup}/members/52557152`}
              aria-Go to ="See Cameron Sampson's Meetup account"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cameron Sampson
            </a>
          </li>
          <li>
            <a
              className="rainbow-text link-delay"
              href={`${links.meetup}/members/185213572`}
              aria-Go to ="See Steven Achord's Meetup account"
              target="_blank"
              rel="noopener noreferrer"
            >
              Steven Achord
            </a>
          </li>
          <li>
            <a
              className="rainbow-text link-delay"
              href={`${links.meetup}/members/209914925`}
              aria-label="Go to Olivia Sabo-Rush's Meetup account"
              target="_blank"
              rel="noopener noreferrer"
            >
              Olivia Sabo-Rush
            </a>
          </li>
        </ul>
        <h3>Anonymous Reporting</h3>
        <p>Anonymously report a concern here.</p>
        <p>
          We can’t follow up an anonymous report with you directly, but we
          will fully investigate it and take whatever action is necessary to
          prevent a recurrence.
        </p>
        <p>
          Additionally, community organizers are available to help community
          members engage with local law enforcement or to otherwise help those
          experiencing unacceptable behavior feel safe. In the context of
          in-person events, organizers will also provide escorts as desired by
          the person experiencing distress.
        </p>
      </Content>
      <Content emoji="&#128159;" title="License and attribution">
        <p>
          Portions of text derived from{' '}
          <a
            className="rainbow-text link-delay"
            href="http://citizencodeofconduct.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Citizen Code of Conduct
          </a>
          , and{' '}
          <a
            className="rainbow-text link-delay"
            href="https://2018.jsconf.eu/code-of-conduct"
            target="_blank"
            rel="noopener noreferrer"
          >
            JS Conf EU
          </a>
          .
        </p>
      </Content>
    </div>
  );
};

export default CodeOfConduct;
