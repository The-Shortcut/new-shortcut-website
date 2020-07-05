import React from "react";

// Styles
import css from "./styles.module.scss";

const SuccessStories = () => {
  return (
    <div className={css.container}>
      <header>
        <h2>Success stories</h2>
      </header>

      <section>
        <h3>
          <span>1.</span> Ekaterina
        </h3>
        <p>
          Originally from Russia, Ekaterina is a professional in International
          Market Development. Two years ago, The Shortcut encouraged her to
          develop a business idea during the Digital Prototyping Weekend –
          little did she know that, soon after, she and her team would be
          distinguished for her business idea at development runway Ultrahack.
        </p>
        <blockquote>
          The Shortcut motivated me to give it a shot. I can’t say that I am not
          confident about my skills – but entrepreneurship… I didn’t know it was
          my thing, I didn’t know it was something I could try.
          <cite>Ekaterina</cite>
        </blockquote>
      </section>

      <section>
        <h3>
          {" "}
          <span>2.</span>Nguyen Le
        </h3>
        <p>
          After moving to Finland from Vietnam and studying marketing at Hanken
          School of Economics, Nguyen Le found her way to The Shortcut. She
          spent four months with us, working as an event production and
          promotion intern. She feels that her time at The Shortcut not only
          gave her knowledge and new skills, but also the confidence she needed
          to voice her ideas.
        </p>
        <blockquote>
          The Shortcut team values empowerment. They are nice, friendly, helpful
          and were always there for me. I appreciated their encouragement,
          support and how they acknowledged my contributions. I mean, isn’t it
          amazing to have someone at work telling you that you are awesome? I
          heard that often.
          <cite>Nguyen Le</cite>
        </blockquote>
      </section>

      <section>
        <h3>
          {" "}
          <span>3.</span>Thomas
        </h3>
        <p>
          Two years ago, Thomas moved from his native Czech Republic to Finland
          with his partner. He found his way to The Shortcut through our School
          of Startups, and later became more actively involved with the
          community as a participant in our Catalyst program, designed to help
          our community develop the necessary skills to launch their career in
          Finland. Now, Thomas is working at Sharetribe, a startup developing
          software to build marketplaces like AirBnB.
        </p>
        <blockquote>
          The Shortcut's Christmas party in 2018 was a seminal moment: hugging
          and greeting friends throughout the night was one of the first times I
          felt "at home" in Finland. Second only to the purpose-creating
          structure, the community The Shortcut gave me was a gift and critical
          to me eventually finding a job.
          <cite>Thomas</cite>
        </blockquote>
      </section>

      <section>
        <h3>
          {" "}
          <span>4.</span>Maya Kristina
        </h3>
        <p>
          Originally from Syria, Maya Kristina came to Finland in 2016. Through
          a shared connection on LinkedIn, she came across The Shortcut. She
          started out as a volunteer, helping us out where she could - and she
          officially joined The Shortcut as a trainee for the marketing team
          only a few weeks later. Soon after, she kickstarted her career as a
          marketing coordinator for Caddyboo, a startup producing microfibre
          pocket towels.
        </p>
        <blockquote>
          During my time at The Shortcut, I got the chance to grow my
          connections and network. I got professional advice for my career and
          how to improve myself, and I got to practice marketing which is my
          specialty and passion. Whenever I had an idea, I was always encouraged
          to propose it, and my ideas were taken seriously – that’s something I
          really appreciated about The Shortcut.
          <cite>Maya Kristina</cite>
        </blockquote>
      </section>

      <section>
        <h3>
          {" "}
          <span>5.</span>Noemi
        </h3>
        <p>
          The Swiss-born Noemi came to Finland in 2018 with a resume full of
          experiences; holding a degree in Ancient Greek Language and
          Literature, she went on to work as an internal reporter for the
          International Committee of the Red Cross, and later saved lives
          working as a paramedic. After coming to Finland, she took on the odd
          number of jobs including waitressing and cleaning and eventually made
          her way to The Shortcut as a Marketing & Communications intern,
          bringing inspiring content to our blog. Now, she’s a full-time
          Community Manager at Maria 01!
        </p>
        <blockquote>
          With my background, I thought people might look at me strangely
          because I was doing so many different things, but my logic was always
          to work with people. I wanted to know how people lived their lives and
          to learn their stories. When I moved to Finland, I discovered that I
          was good at networking. At The Shortcut, I had the chance to meet and
          connect with so many great people. But maybe the most meaningful thing
          I learned from The Shortcut was confidence. <br />I finally felt like
          all the previous work I had done mattered and was important, and that
          has really made a big difference.
          <cite>Noemi</cite>
        </blockquote>
      </section>
    </div>
  );
};

export default SuccessStories;
