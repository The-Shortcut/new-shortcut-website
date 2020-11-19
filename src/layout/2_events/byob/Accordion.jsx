import React from "react";

// Styles
import "./styles.scss";

// Children
import AccItem from "./AccItem";

const Accordion = () => {
  return (
    <div className="accordion">
      <AccItem
        key={1}
        question="What kind of information do I need to fill in the application?"
      >
        <div>
          <p>
            The application questions include information about your business
            idea, future goals, motivation, and professional background. They
            are important to us because they give us the chance to get to know
            you better!
          </p>
        </div>
      </AccItem>
      <AccItem key={2} question="Who can apply?">
        <div>
          <p>
            Anyone can apply to BE YOUR OWN BOSS. If you want to become an
            entrepreneur, you have a business idea in mind, you are determined
            and deeply desire to create your own business, you are who we are
            looking for!{" "}
          </p>
          <p>
            Please note that BYOB works best for individuals. We do not accept
            teams.{" "}
          </p>
        </div>
      </AccItem>
      <AccItem key={3} question="What are the selection criteria?">
        <div>
          <p>
            You strongly believe that entrepreneurship is the best way for you
            to reach your goals.{" "}
          </p>
          <p>You have a business idea.</p>
          <p>You have a plan to register a company.</p>
          <p>
            You are ready to dedicate a significant amount of time to your
            venture and attend a 3-week program that will support you get there
            (~ Monday to Friday, from 10.00 to 15.30).
          </p>
        </div>
      </AccItem>
      <AccItem key={4} question="How many participants are selected?">
        <div>
          <p>
            Up to 30 participants will be selected. To ensure the best quality
            and program outcomes, we select only individuals that we believe
            will benefit the most from BYOB.
          </p>
        </div>
      </AccItem>
      <AccItem
        key={5}
        question="Do I need to know the basics of startups or investing beforehand?"
      >
        <div>
          <p>
            It is nice to have some knowledge about the startup world, but it is
            not mandatory. You will have the chance to experience it yourself
            through the program, so don’t worry!
          </p>
        </div>
      </AccItem>

      <AccItem
        key={6}
        question="Is the program going to be held online or in person? Is Covid-19 going to affect BYOB?"
      >
        <div>
          <p>
            The program is designed as a “hybrid” model – some of the workshops
            will be held online, but there will also be some
            workshops/activities taking place “offline” at Maria01 (in safety!).
            This will help you get to know the other participants and benefit
            from face-to-face interaction with coaches and mentors.
            <br />
            However, due to the uncertainty of the pandemic situation, there
            might be some changes if the circumstances won’t be considered safe
            anymore. This will not affect the effectiveness and efficiency of
            the program.
          </p>
        </div>
      </AccItem>

      <AccItem key={7} question="What is the enrollment process like?">
        <div>
          <p>The selection process of BYOB includes 2 rounds:</p>
          <p>
            1st round: Online application. <br />
            2nd round: Online interview with The Shortcut.
          </p>
        </div>
      </AccItem>

      <AccItem key={8} question="What is the application timeline?">
        <div>
          <p>
            The online application opens on 1st September and ends on 16th
            October.
          </p>
          <p>
            The selected participants will receive the interview invitation at
            the latest by 16th October.
          </p>
          <p>The online interview takes place between 19th to 23rd October.</p>
          <p>The final decision will be announced on 26th October.</p>
        </div>
      </AccItem>

      <AccItem key={9} question="How can I apply?">
        <div>
          <p>
            You can apply by filling up the following form:{" "}
            <a href="https://forms.gle/8UrFBb9bqTNqYbfG6">
              https://forms.gle/8UrFBb9bqTNqYbfG6
            </a>
          </p>
        </div>
      </AccItem>

      <AccItem key={10} question="How will I find out if I am selected?">
        <div>
          <p>
            For each round, you will receive an email from The Shortcut
            informing whether you will proceed. <br />
            The final announcement will be made on 26th October.
          </p>
        </div>
      </AccItem>

      <AccItem
        key={11}
        question="Can I postpone my participation or attend part-time?"
      >
        <div>
          <p>
            Unfortunately, you cannot postpone nor attend part-time. If for any
            reason you can no longer participate, please contact us and we’ll
            cancel your place. We require full participation from attendees
            throughout the entire course.
          </p>
        </div>
      </AccItem>

      <AccItem key={12} question="What is the language used in the program?">
        <div>
          <p>English is the official language used in BYOB.</p>
        </div>
      </AccItem>

      <AccItem key={13} question="What does the program content include?">
        <div>
          <p>
            The program will help you develop the fundamental skills needed to
            create a viable company.
          </p>
          <p>
            It will be divided into workshops, which will be covering a broad
            range of disciplines: problem &amp; idea validation, business &amp;
            customer development, sales &amp; funding, financial &amp; legal
            aspects, as well as branding &amp; marketing. Besides the workshops,
            you will be given hands-on assignments, which will help you to
            develop your business idea, put into practice the teachings, and
            navigate the ecosystem.
          </p>
        </div>
      </AccItem>

      <AccItem key={14} question="How long is the program?">
        <div>
          <p>
            The program lasts for 15 working days, from 9th to 27th November
            2020. The workshops will be held 3 days a week (Monday, Tuesday and
            Thursday), approximately 5 hours a day (10-15.30). However, keep in
            mind that you will need some extra time each week, in order to
            complete tasks and develop your project.
          </p>
        </div>
      </AccItem>

      <AccItem key={15} question="Is there any fee for the program? ">
        <div>
          <p>No, BYOB is totally free for all participants. </p>
        </div>
      </AccItem>

      <AccItem
        key={16}
        question="Can I form a team with other participants during the program if we have similar business ideas?"
      >
        <div>
          <p>
            Yes, team formation can happen naturally during the program if the
            participants wish to.
          </p>
        </div>
      </AccItem>

      <AccItem key={17} question="What can I expect from BYOB?">
        <div>
          <p>
            At the end of the program, you will have a ready-to-go MVP and you
            will get the opportunity to set up your own company (in less than a
            month!)
          </p>
          <p>
            Chance to pitch the idea to a wide audience. Get critical feedback
            and take your project to the next level.
          </p>
          <p>
            You will have the possibility to meet investors and people with the
            same mindset.
          </p>
          <p>
            Gain a better understanding of the Finnish startup ecosystem and you
            will receive advice and guidance from its top entrepreneurs.
          </p>
        </div>
      </AccItem>

      <AccItem
        key={18}
        question="Why should I choose BYOB over other programs?"
      >
        <div>
          <p>We are the biggest talent accelerator in the Nordics.</p>
          <p>
            We have a wide network and are well-connected to the tech startup
            ecosystem in Finland and you will get to develop your business as
            well as connect with the best doers in the field.
          </p>
          <p>
            It is a holistic program. BYOB will cover different topics, such as:
            idea and problem validation, business and customer development,
            value proposition and sales, marketing and growth hacking, as well
            as financial and legal aspects.
          </p>
          <p>BYOB is completely free.</p>
        </div>
      </AccItem>

      <AccItem key={19} question="How can I find out more about the program?">
        <div>
          <p>
            You can always contact our program manager at{" "}
            <a href="mailto:events@theshortcut.org">events@theshortcut.org</a>
          </p>
        </div>
      </AccItem>
    </div>
  );
};

export default Accordion;
