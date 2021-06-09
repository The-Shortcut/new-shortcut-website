import React from 'react';

// Styles
import './styles.scss';

// Children
import AccItem from './AccItem';

const Accordion = () => {
  return (
    <div className='accordion'>
      <h3 style={{ marginLeft: 20, fontStyle: 'italic' }}>BEFORE APPLYING</h3>
      <AccItem key={1} question='Who can apply?'>
        <div>
          <p>
            If you are: · unemployed or at risk of losing your job and also registered as a
            jobseeker with the TE-office or local government pilot on employment; · Determined and
            driven to start your own business in Finland; · Under 30 years of age; · Fluent in
            spoken and written English; · Can commit to all 6 weeks of the program, then you are
            exactly what we are looking for! Apply to BYOB program either by filling in an
            electronic application via THIS LINK or by filling a paper application with the TE
            Office / local government pilot on employment (the course number is 699751) . If needed,
            you can find the paper application (TEM601) at www.suomi.fi. If you fill in an
            electronic application without strong identification (e.g. online banking codes), you
            must confirm your application at the TE Office or local government pilot before the end
            of the application period.
          </p>
          <p style={{ fontWeight: 'bold' }}>
            The selection to the program will be made on the basis of the applications, so please
            fill the application form carefully, tell us about your reasons for applying to the
            program and also describe your business idea.
          </p>
          <p style={{ fontWeight: 'bold' }}>
            Please note that by leaving an application to this program you commit to taking part in
            the program should you be selected. If you withdraw from the program without a valid
            reason, your right to unemployment benefit will be reviewed by TE Office / local
            government pilot.
          </p>
        </div>
      </AccItem>
      <AccItem key={2} question='What are the selection criteria?'>
        <ul style={{ marginLeft: 20 }}>
          <li>
            You strongly believe that entrepreneurship is the best way for you to reach your goals.
          </li>
          <li>You have a business idea.</li>
          <li>You have a plan to register a company.</li>
          <li>
            You are ready to dedicate a significant amount of time to your venture and attend a
            6-week full-time program that will support you to get there
          </li>
        </ul>
      </AccItem>
      <AccItem key={3} question='How many participants are selected?'>
        <div>
          <p>
            Up to 30 participants will be selected. To ensure the best quality and program outcomes,
            we select only individuals that we believe will benefit the most from BYOB.
          </p>
        </div>
      </AccItem>
      <AccItem key={4} question='Do I need to know the basics of startups or investing beforehand?'>
        <div>
          <p>
            It is nice to have some knowledge about the startup world, but it is not mandatory. You
            will have the chance to experience it yourself through the program, so don’t worry!
          </p>
        </div>
      </AccItem>
      <AccItem
        key={5}
        question='Is the program going to be held online or in person? Is Covid-19 going to affect BYOB?'>
        <div>
          <p>
            The program is designed as a “hybrid” model – we plan to have most of the
            workshops/activities in person taking place at Maria01 (in safety!) plus just a few
            workshops might take place online. This will help you get to know the other participants
            and benefit from face-to-face interaction with coaches and mentors.
          </p>
          <p>
            However, due to the uncertainty of the pandemic situation, there might be some changes
            if the circumstances won’t be considered safe anymore. This will not affect the
            effectiveness and efficiency of the program.
          </p>
        </div>
      </AccItem>
      <h3 style={{ margin: '2em 0 0.5em 0.5em', fontStyle: 'italic' }}>THE APPLICATION PROCESS</h3>
      <AccItem key={6} question='What is the enrollment process like?'>
        <div>
          <p>The selection process of BYOB includes 2 rounds:</p>
          <ul style={{ marginLeft: 40 }}>
            <li>1st round: Online application.</li>
            <li>2nd round: Online interview with The Shortcut. </li>
          </ul>
        </div>
      </AccItem>
      <AccItem key={7} question='What is the application timeline?'>
        <ul style={{ marginLeft: 25 }}>
          <li>
            The online application opens on <strong>27th May</strong> and ends on{' '}
            <strong>23rd August.</strong>
          </li>
          <li>
            The selected participants will receive the interview invitation at the latest by{' '}
            <strong>27th August.</strong>
          </li>
          <li>You have a plan to register a company.</li>
          <li>
            The online interview takes place between <strong>30th August to 3rd September.</strong>
          </li>
          <li>
            The final decision will be announced on <strong>6th September.</strong>
          </li>
        </ul>
      </AccItem>

      <AccItem key={8} question='How will I find out if I am selected?'>
        <div>
          <p>You will receive the decision from TE-Office.</p>
        </div>
      </AccItem>
      <AccItem key={9} question='Can I postpone my participation or attend part-time?'>
        <div>
          <p>
            Unfortunately, you cannot postpone nor attend part-time. If for any reason you can no
            longer participate, please contact us and we’ll cancel your place. We require full
            participation from attendees throughout the entire course.
          </p>
        </div>
      </AccItem>
      <h3 style={{ margin: '2em 0 0.5em 0.5em', fontStyle: 'italic' }}>ABOUT THE PROGRAM</h3>
      <AccItem key={10} question='What is the language used in the program?'>
        <div>
          <p>English is the official language used in BYOB.</p>
        </div>
      </AccItem>
      <AccItem key={11} question='What does the program content include?'>
        <div>
          <p>
            The program will help you develop the fundamental skills needed to create a viable
            company.
          </p>
          <p>
            It will be divided into workshops, which will be covering a broad range of disciplines:
            problem &amp; idea validation, business &amp; customer development, sales &amp; funding,
            financial &amp; legal aspects, as well as branding &amp; marketing. Besides the
            workshops, you will be given hands-on assignments, which will help you to develop your
            business idea, put into practice the teachings, and navigate the ecosystem.
          </p>
        </div>
      </AccItem>

      <AccItem key={12} question='How long is the program?'>
        <div>
          <p>
            The program lasts for 30 working days, from 13th September to 22nd October 2020. The
            workshops and activities will be held <strong>Monday - Friday from 10am - 16pm</strong>
          </p>
        </div>
      </AccItem>

      <AccItem key={13} question='Is there any fee for the program? '>
        <div>
          <p>No, B.Y.O.B is totally free for all participants. </p>
        </div>
      </AccItem>

      <AccItem
        key={14}
        question='Can I form a team with other participants during the program if we have similar business ideas?'>
        <div>
          <p>
            Yes, team formation can happen naturally during the program if the participants wish to.
          </p>
        </div>
      </AccItem>

      <AccItem key={15} question='What can I expect from B.Y.O.B?'>
        <ul style={{ marginLeft: 25 }}>
          <li>
            At the end of the program, you will have a ready-to-go MVP and you will get the
            opportunity to set up your own company.
          </li>
          <li>
            Chance to pitch the idea to a wide audience. Get critical feedback and take your project
            to the next level.
          </li>
          <li>You will have the possibility to meet investors and people with the same mindset.</li>
          <li>
            Gain a better understanding of the Finnish startup ecosystem and you will receive advice
            and guidance from its top entrepreneurs.
          </li>
        </ul>
      </AccItem>

      <AccItem key={16} question='Why should I choose B.Y.O.B over other programs?'>
        <ul style={{ marginLeft: 25 }}>
          <li>
            We have a wide network and are well-connected to the tech startup Ecosystem in Finland
            and you will get to develop your business as well as connect with the best doers in the
            field.
          </li>
          <li>
            ·It is a Holistic program. BYOB will cover various topics, such as idea and problem
            validation; business and customer development; value proposition and sales; marketing
            and growth Hacking; as well as financial and legal aspects.
          </li>
          <li>
            Receive 1-on-1 mentorship and guidance, gain access to extensive professional networks
            by working in the heart of the Maria 01 startup campus.
          </li>
          <li>
            After the training program has finished you will still be an established Shortcut
            community member and can continue to use our services to support your development and
            growth.
          </li>
        </ul>
      </AccItem>
    </div>
  );
};

export default Accordion;
