import React from "react";

// Styles
import "./faq.scss";

// Children
import AccItem from "./AccItem";

const Accordion = () => {
  return (
    <div className="accordion">
      <AccItem key={1} question="What do we do?">
        <p>
          The Shortcut supports talent in establishing a career in Finland and
          accelerating their entry into the Finnish technology industry. As the
          biggest talent accelerator in the Nordics and one of the biggest
          not-for-profit talent accelerators in the world, we’re committed to
          connecting talent with startups and high-growth companies, or
          encouraging talent to consider founding a startup of their own. We do
          this through events, workshops, training sessions and internships.
        </p>
      </AccItem>
      <AccItem key={2} question="How is The Shortcut funded?">
        <p>
          The Shortcut is self-financed through donations, foundations grants,
          service provision and private partnerships.
        </p>
      </AccItem>
      <AccItem key={3} question="When was The Shortcut founded?">
        <p>
          Back in 2016, The Shortcut started as a two person team visiting
          refugee centres with a grassroot volunteer movement. We encouraged
          people to consider startups and entrepreneurship as a way of
          integrating into Finnish society faster. Now, we’ve grown into a fully
          funded organisation with over 30 team members who are determined to
          accelerate talent into employment — including you!
        </p>
      </AccItem>
      <AccItem
        key={4}
        question="I’m looking to start a career in Finland. How can The Shortcut help me?"
      >
        <p>
          We aim to help you optimise your skills and accelerate your entry into
          the Finnish job market by offering services and organising activities
          designed to help you adapt and upgrade your skills to gain a
          competitive advantage in the Finnish job market; these activities
          cover a wide range of topics from soft skills (how to write an
          effective CV, personal branding, networking) to technical skills
          necessary for the digital world we live in (coding languages, data and
          growth hacking, inbound sales and marketing, etc.).
        </p>
        <p>
          In short, we want to give you — our community — access to the soft and
          hard skills necessary to thrive in the Finnish tech industry. We offer
          our community the opportunity to build a network, as well as a
          springboard to be seen through The Shortcut’s connections in the
          Finnish startup ecosystem — almost every three out of four jobs in
          Finland are never advertised. Having the right connections in the
          field can open the door to opportunities you never even knew about!
        </p>
      </AccItem>
      <AccItem
        key={5}
        question="I’m an aspiring entrepreneur — how can you help me?"
      >
        <p>
          We are here to be the springboard for your startup or business
          venture. We organise activities aimed at people just like you, who
          want to see their business idea come to life. Our workshops aim to
          help participants turn an idea into a viable business proposal through
          coaching, hands-on guiding, and of course the ever-so-important
          networking opportunities.
        </p>
      </AccItem>
      <AccItem key={6} question="How can The Shortcut support my venture?">
        <p>
          We aim to help Finnish tech companies tap into the international
          talent pool. Through collaborating with The Shortcut, we are not only
          able to connect your company to highly-skilled talent, but provide
          your brand with visibility. You can find out more about what we can do
          for your company <a href="/">here</a>.
        </p>
      </AccItem>
      <AccItem key={7} question="How do I join The Shortcut?">
        <p>
          It’s easy! Anyone looking to join our community can do so at any time,
          completely free of charge. You can join by following us on any of our
          social media channels — you can find us on{" "}
          <a
            href="https://www.facebook.com/theshortcut/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          ,
          <a
            href="https://www.instagram.com/theshortcutorg/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          ,{" "}
          <a
            href="https://twitter.com/theshortcutorg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          , and{" "}
          <a
            href="https://www.linkedin.com/company/10622203/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>{" "}
          — or by simply visiting our Lab at Maria01! You can also become a part
          of our community through joining our community platform{" "}
          <a
            href="https://www.theshortcutcommunity.org/feed"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          .
        </p>
      </AccItem>
      <AccItem
        key={8}
        question="How do I keep up-to-date about upcoming events?"
      >
        <p>
          We post updates about upcoming events and workshops on our social
          media channels — but you can stay more easily updated about everything
          that’s going on at The Shortcut by subscribing to our{" "}
          <a href="/">newsletter</a>.
        </p>
      </AccItem>
      <AccItem key={9} question="How do I join your activities?">
        <p>
          The Shortcut organises several different kinds of activities: events,
          training programs, and internship programs. All of our activities are
          free of charge and open for anyone to join.
        </p>
        <ul>
          <li>
            Click <a href="/">here</a> to host your own event.
          </li>
          <li>
            Click <a href="/">here</a> to join as an intern.
          </li>
          <li>
            Click <a href="/">here</a> to attend our training programs.
          </li>
          <li>
            Click <a href="/">here</a> for our latest job opportunities.
          </li>
        </ul>
      </AccItem>
      <AccItem key={10} question="Can I come to the office and say hi?">
        <p>
          Of course! You’ll find us at Maria 01 startup campus at
          Lapinlahdenkatu 16 (you’ll find us at entrance 15B in the courtyard).
          We’ve got a pretty cool lab space for the community and the team — we
          even have three dishwashers! :-)
        </p>
      </AccItem>
      <AccItem
        key={11}
        question="How can I volunteer at The Shortcut events and programs?"
      >
        <p>
          We would love to have you as one of our volunteers! You can either
          visit us in our space to offer help or send us an email at{" "}
          <a href="mailto:info@theshortcut.org">info@theshortcut.org</a>. We
          often update our social media channels about volunteer requirements —
          and of course, feel free to join our{" "}
          <a
            href="https://www.facebook.com/groups/theshortcutvolunteers/"
            target="_blank"
            rel="noopener noreferrer"
          >
            volunteer group
          </a>{" "}
          on Facebook.
        </p>
      </AccItem>

      <AccItem key={12} question="Is this a co-working space?">
        <p>
          We are not a co-working space; we don’t charge rent! We describe
          ourselves as a community space where you are free to work, have small
          group meetings and suggest events. It’s ideal for people who will feel
          otherwise rather isolated with their own venture or in their job
          search.{" "}
        </p>
        <p>
          If you are a team of more than two persons, we are happy to discuss
          your engagement with us. We are always happy to have members giving
          back by sharing their expertise with the broader community in return
          for using our space on a regular basis. We welcome recruiters and
          startup doers to also visit and network with our talent; that’s how
          serendipitous encounters can take place. Just drop us a line using our{" "}
          <a href="/">contact form</a>.{" "}
        </p>
      </AccItem>
      <AccItem
        key={13}
        question="Can my startup use The Shortcut as an office space?"
      >
        <p>
          Everyone is welcome at our lab and free to work there free of charge.
          However, it all depends on the availability of space - we are a
          community space where you can come to work or have small group
          meetings but we cannot guarantee work desks, meeting rooms or other
          facilities. Inquiries about using our lab space can be made using our{" "}
          <a href="/">contact form</a>.{" "}
        </p>
      </AccItem>
      <AccItem key={14} question="Can I be a coach or a workshop giver?">
        <p>
          Definitely! Just get in touch with someone on our team, or drop us a
          line using our <a href="/">contact form</a>.{" "}
        </p>
      </AccItem>
      <AccItem
        key={15}
        question="Do you pay your coaches and workshop givers? "
      >
        <p>
          We are a not-for-profit organisation and all our coaches and workshops
          facilitators offer their services voluntarily and free of charge. It
          is the perfect way to give back to the community in an inspiring way.{" "}
        </p>
      </AccItem>
      <AccItem
        key={16}
        question="What are the requirements for my event to happen at the Lab? Can I have my event in your space even if it’s not tech or entrepreneurial related? "
      >
        <p>
          The Shortcut is a collaborative space, where we aim to expand the
          entrepreneurial mindset and tech abilities to our participants.
          However, we are open to the possibility — tell us about your event in
          an email to <a href="info@theshortcut.org">info@theshortcut.org</a>{" "}
          and we will happily answer any questions you have about organising
          your event at The Shortcut Lab; just send an email to{" "}
          <a href="info@theshortcut.org">info@theshortcut.org</a>. When writing
          your email, please include the following information about the event:
          day, time, amount of participants, briefly about the topic, and we
          will get back to you ASAP.{" "}
        </p>
      </AccItem>
      <AccItem key={17} question="Who is behind The Shortcut?">
        <p>
          The Shortcut is part of the Startup Foundation Sr., founded in 2012 by
          Finnish tech influencers, entrepreneurs, and investors. The Startup
          Foundation works to build the Nordic region towards a leading global
          startup ecosystem. Our sister organisations are Slush, Junction, Wave
          Ventures, AaltoES, Kiuas, Startuplifers, HelTech, FallUp, Dash and
          Maria01.
        </p>
        <p>
          We are a non profit organisation 100% owned by Startup Foundation. No
          individuals or companies have shares, equity or receive dividends. All
          proceeds fund our core operations.{" "}
        </p>
        <p>
          The Shortcut is a kick-ass and diverse community of full time staff
          members, interns and international talent. We all share the same
          mission: supporting each other in our pursuit of employment,
          entrepreneurship and giving back.
        </p>
      </AccItem>
      <AccItem
        key={18}
        question="Can I join The Shortcut even if I don’t have experience in tech?"
      >
        <p>
          Tech startups and high growth companies need people with a diverse
          skill set and background to bring growth — that means we need talent
          with experience in human resources, sales, product development,
          digital marketing, etc. At The Shortcut, we strive to encourage people
          to not only enhance their skills, but to transfer and update their
          skills to serve the growing Finnish tech sector and to give them a
          chance to re-invent their career; so of course, you’re more than
          welcome to join our events regardless of background! Take a look at
          our current events or workshops to see if anything sparks your
          interest.
        </p>
      </AccItem>
      <AccItem
        key={19}
        question="Can I send a job application to you? Are you hiring now?"
      >
        <p>Thank you for your interest in being part of our team!</p>
      </AccItem>
    </div>
  );
};

export default Accordion;
