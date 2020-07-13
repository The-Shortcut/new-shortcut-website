import React from "react";
import css from "./styles.module.scss";
import AnchorLink from "react-anchor-link-smooth-scroll";

const ForPartners = () => {
  return (
    <div className={css.container}>
      <header>
        <h2>For partners</h2>
      </header>
      <main>
        <p>
          With a robust set of acquisition, skill-stacking and community
          services, The Shortcut’s main objective is to scale our offering to
          allow partners to acquire the right talent, retain the best people,
          and expand employees’ skill sets to facilitate entrepreneurship,
          growth and innovation. If you are intrested in partnering with us, get
          in touch with <a href="mailto:piia@theshortcut.org">Piia Kuosmanen</a>
          .
        </p>
        <div>
          <div>
            <h3>Learn about our initiatives:</h3>
            <ul>
              <li>
                {" "}
                <AnchorLink href="#talentpool">
                  Talent Pool / Recruitment Service
                </AnchorLink>
              </li>
              <li>
                <AnchorLink href="#talentheist"> Talent Heist</AnchorLink>
              </li>
              <li>
                {" "}
                <AnchorLink href="#startupdoers">
                  Skills Training, Workshops & Webinars by Startup Doers
                </AnchorLink>
              </li>
              <li>
                <AnchorLink href="#tech">Tech Training</AnchorLink>
              </li>
              <li>
                <AnchorLink href="#entrepreneur">
                  Entrepreneurial Mindset
                </AnchorLink>
              </li>
            </ul>
          </div>
          <div>
            <img src={require("../../assets/illustrations/4.png")} alt="" />
          </div>
        </div>
      </main>

      <section id="talentpool">
        <h3>
          <span>1.</span>
          Talent Pool / Recruitment Service
        </h3>
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
      </section>

      <section id="talentheist">
        <h3>
          <span>2.</span>Talent Heist
        </h3>
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
            Sievo, Hoxhunt and Supermetrics successfully screened & hired
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
      </section>
      <section id="startupdoers">
        <h3>
          <span>3.</span>Skills Training, Workshops & Webinars by Startup Doers
        </h3>

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
              Myunggi Suh, Head of Brand & Marketing, AVP (Aalto Venture
              Program)
            </cite>
          </blockquote>
        </div>
      </section>
      <section id="tech">
        <h3>
          <span>4.</span>Tech Training
        </h3>
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
      </section>
      <section id="entrepreneur">
        <h3>
          <span>5.</span>Entrepreneurial Mindset
        </h3>
        <div>
          <p>
            From Idea Development to Digital Prototyping, an entrepreneurial
            mindset is an innovation asset that each company fosters in their
            organisation. As a sister organisation to Junction & Slush, we are
            deeply rooted in the Finnish startup ecosystem. We have been
            innovative, thinking lean and disruptive since our inception. With
            our well-curated programs, we immerse our participants in the
            entrepreneurial mindset, to think big, to work for hands-on & to be
            lean!
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
      </section>
      <section id="retention">
        <h3>
          <span>6.</span>Integration Success Program
        </h3>
        <div>
          <p>
            When it comes to the realities of the job market, there is a very
            serious and real shortage of high-skilled workers, especially in the
            tech sector. However attraction is not the only problem, retention
            is. This is why the Shortcut started to build the integration
            success Program (ISP). The Shortcut Integration Success Program
            connects international talent, including the spouses of
            international knowledge workers, with their new, local, social and
            professional environment in a community-driven way.
          </p>
          <p>
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
            <cite>Melanie Dower, Relocation & Onboarding, Supercell</cite>
          </blockquote>
          <p>
            Are you looking to enhance your relocation experience & increase
            your ROI with employee retention?{" "}
            <a href="/">Get in touch with us!</a>{" "}
          </p>
        </div>
      </section>
    </div>
  );
};

export default ForPartners;
