import React from "react";

// Styles
import "./styles.scss";

// Children
import AccItem from "./AccItem";

const Accordion = () => {
  return (
    <div className="accordion">
      <AccItem key={1} question="Talent Pool / Recruitment Service">
      <div>
          <p>Are you recruiting? Look no further.</p>
          <p>
            The Shortcut is the largest Talent Accelerator in the Nordics. Our
            Talent Pool is made up of highly skilled professionals ranging from
            Software Developers, to Project Managers, to Digital Marketers (and
            everything in between). We’ve successfully placed our alumni in
            exciting companies like Holvi, Kodit.io, Sievo and many more.
          </p>

          <blockquote>
            [Candidate] has been an amazing asset to our team.
            <cite> Juho Makkonen, CEO of Sharetribe</cite>
          </blockquote>
        </div>
      </AccItem>
      <AccItem key={2} question="Talent Heist">
      <div>
          <p>
            Are you looking for an innovative and disruptive recruitment
            solution?{" "}
          </p>
          <p>
            Talent Heist is our holistic matchmaking event that connects highly
            skilled talent to companies. It is a unique opportunity to
            diversify, bring innovative ideas to your company, and tap into
            Talent in a cost-effective way. In 2019, among others, Smartly,
            Sievo, Hoxhunt and Supermetrics successfully screened &amp; hired
            candidates.{" "}
          </p>

          <blockquote>
            The Talent Heist was exactly the type of creative recruitment event
            we had been looking for. We met a wide range of skilled candidates
            in a relaxed setting on day 1, and on day 2 were able to continue
            some of these conversations in a more professional setting. We’re
            considering building this event into our future talent pipeline!
            <cite>Päivi Järvenpää, Partnerships Lead, OP Labs</cite>
          </blockquote>
          <p>
            {" "}
            Are you convinced? <a href="/">Get in touch with us!</a>
          </p>
        </div>
      </AccItem>
      <AccItem key={3} question="Skills Training, Workshops &amp; Webinars by Startup Doers">
      <div>
          <p>
            We are strong believers that knowledge is not only exchanged at
            universities or schools but also through communities. All our
            workshops and webinars are held by startup doers, highly successful
            individuals who have walked the entrepreneurial journey, who run
            startups that have turned into scale-ups.
          </p>
          <p>
            Are you looking for a creative solution to brush up your skills in
            the thematics of tech, talent and entrepreneurship?{" "}
            <a href="/">Get in touch with us!</a>{" "}
          </p>

          <blockquote>
            We were co-organizer in The Shortcut’s School of Startups event. One
            of our teachers gave a workshop.[…] The Shortcut Team was well
            organised and available to answer any questions that we had. Thank
            you!
            <cite>
              Myunggi Suh, Head of Brand &amp; Marketing, AVP (Aalto Venture
              Program)
            </cite>
          </blockquote>
        </div>
      </AccItem>
      <AccItem
        key={4}
        question="Tech Training"
      >
<div>
          <p>
            At The Shortcut, we believe in fast hands-on learning, building our
            skills, and adaptation. We are not a school, but we do take learning
            very seriously and have been providing training since 2016. Our goal
            is to provide people with the skills which are needed in today and
            in the future. From data science to full-stack and docker, we have
            usefully built training programs with companies such as Mozilla,
            Microsoft, Amazon Webservices and Eficode.
          </p>
        </div>
      </AccItem>
      <AccItem
        key={5}
        question="Entrepreneurial Mindset"
      >
        <div>
          <p>
            From Idea Development to Digital Prototyping, an entrepreneurial
            mindset is an innovation asset that each company fosters in their
            organisation. As a sister organisation to Junction &amp; Slush, we
            are deeply rooted in the Finnish startup ecosystem. We have been
            innovative, thinking lean and disruptive since our inception. With
            our well-curated programs, we immerse our participants in the
            entrepreneurial mindset, to think big, to work for hands-on &amp; to
            be lean!
          </p>

          <blockquote>
            At Icebreaker we understand the importance of running events like
            Digital Prototyping Week and were pleased to partner with The
            Shortcut to deliver it. Not only did we get to support some great
            business ideas but the workshop helped increase our company’s
            visibility amongst Finland’s future founders. Would highly recommend
            it.
            <cite>Mari Luukkainen, Head of Marketing, Icebreaker.vc</cite>
          </blockquote>
        </div>
      </AccItem>

      <AccItem
        key={6}
        question="Integration Success Program"
      >
<div>
          <p>
            When it comes to the realities of the job market, there is a very
            serious and real shortage of high-skilled workers, especially in the
            tech sector. However attraction is not the only problem, retention
            is. This is why the Shortcut started to build the integration
            success Program (ISP). The Shortcut Integration Success Program
            connects international talent, including the spouses of
            international knowledge workers, with their new, local, social and
            professional environment in a community-driven way.<br/>
            For the local business community, The Shortcut Integration Success
            Program improves talent retention and bridges the gap between
            businesses that need talented, skilled employees and highly-skilled
            international talent who are driven, resilient and ready to
            contribute to the Finnish labour market. The Shortcut Community is
            made up of 120 nationalities: We understand the social and
            professional integration needs of your international employees and
            their partners.
          </p>
          <blockquote>
            The Shortcut conceptualised and delivered a two-day workshop to
            empower participants from Supercell’s talented spouse group into
            their own entrepreneurial projects. It was a great success. The Team
            were approachable, professional and client orientated. They took the
            time to listen and accommodate all of our requests. We’re looking
            forward to collaborating with them again in the future.
            <cite>Melanie Dower, Relocation &amp; Onboarding, Supercell</cite>
          </blockquote>
          <p>
            Are you looking to enhance your relocation experience &amp; increase
            your ROI with employee retention?{" "}
            <a href="/">Get in touch with us!</a>{" "}
          </p>
        </div>
      </AccItem>
    </div>
  );
};

export default Accordion;
