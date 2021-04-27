import React, { useEffect } from 'react';

// Styles
import css from './styles.module.scss';

import TagManager from 'react-gtm-module';

const SuccessStories = () => {
  useEffect(() => {
    TagManager.dataLayer({
      dataLayer: {
        event: 'pageView',
        url: `${window.location.pathname}${window.location.search}`,
        page: 'success-sotries',
        path: '/success',
      },
    });
  }, []);
  return (
    <div className={css.container}>
      <header>
        <h2>Success Stories</h2>
      </header>

      <section>
        <h3>
          {' '}
          {/* <span>2.</span> */}
          Elena Feklistova
        </h3>
        <img
          src='https://theshortcut.org/wp-content/uploads/2020/11/Elena-Feklistova-scaled.jpg'
          alt=''
        />
        <p>
          Elena Feklistova, an experienced investment analyst from Russia, moved to Helsinki with an
          initial thought that she would try something new and expect a shift in her career. After
          an internship at The Shortcut as a Program developer and Training coordinator, she
          ultimately ended up with a much deserved full-time job offer, working as an Anti-money
          laundering specialist at LocalBitcoins.com. This position is closely matched with her
          previous experience in banking. Such a reward for her relentless efforts for networking,
          upskilling herself and showcasing her skills. At The Shortcut Elena helped design one of
          our future products and she also organized and ran our Catalyst Program very smoothly.
        </p>
        <blockquote>
          The best thing about my internship was the confidence boost I got. When you're in The
          Shortcut, the teammates see you, they are there for you and they appreciate your inputs. I
          believe that this is very important for the start of one’s career in a new country. The
          team wants everything to be inspirational and everybody to showcase their potential as
          much as it’s possible. So we thrived to make things happen
          <cite>Elena Feklistova</cite>
        </blockquote>
      </section>

      <section>
        <h3>
          {' '}
          {/* <span>2.</span> */}
          Yevhenii Kalashnyk
        </h3>
        <img
          src='https://theshortcut.org/wp-content/uploads/2020/11/Yevhenii-Kalashnyk.jpg'
          alt=''
        />
        <p>
          Yevheni's journey began with The Shortcut's Digital prototyping Weekend in 2018.
          Initially, he joined a team with a flower rescue idea and ended up being a part of the
          winning team. As a prize, they got tickets to Junction and a session with the CEO of
          Holvi. At Junction, he met his future teammates for developing a computer game and ended
          up winning and selling their product to Kone. Currently, he is working on Tassu Passu, a
          service for kids to design their passwords by making their own stories.
        </p>
        <blockquote>
          All of the experiences were opened up by this event at The Shortcut. It's a success story
          for us because everything started with The Shortcut and Holvi and we're very thankful for
          that
          <cite>Yevhenii Kalashnyk</cite>
        </blockquote>
      </section>

      <section>
        <h3>
          {' '}
          {/* <span>2.</span> */}
          Sam Clayton
        </h3>
        <img src='https://theshortcut.org/wp-content/uploads/2020/11/Sam-Clayton.jpg' alt='' />
        <p>
          Sam Clayton participated in our Digitalization Catalyst Programme where he could gain
          extra skills and also got exposed to a work environment where he could showcase those
          skills. Later on, Sam worked as a Project Manager at The Shortcut for Talent Heist, one of
          our biggest events! He is now an Account Manager at Flowhaven.
        </p>
        <blockquote>
          The Shortcut exposed me to the world of startups where my experience could help shape a
          growing exciting company and it enabled me to build a valuable network in Finland which is
          vital. Little did I know I would find a job where I could work with world-renowned brands
          and love the job I do.
          <cite>Sam Clayton</cite>
        </blockquote>
      </section>

      <section>
        <h3>
          {' '}
          {/* <span>2.</span> */}
          Alak Dam
        </h3>
        <img src='https://theshortcut.org/wp-content/uploads/2020/11/Alak-Dam-scaled.jpeg' alt='' />
        <p>
          Alak Dam, as an Information and Communication Technology student, found The Shortcut while
          seeking an internship. After working in our Tech team on an individual project, Alak is
          now working as a front-end developer at Estate’s Logs.
        </p>
        <blockquote>
          I had the chance to grow my connections and network during my time at The Shortcut. I also
          received professional advice for my career and how I could improve myself.
          <cite>Alak Dam</cite>
        </blockquote>
      </section>

      <section>
        <h3>
          {' '}
          {/* <span>2.</span> */}
          Khaled Alwithinani
        </h3>
        <img
          src='https://theshortcut.org/wp-content/uploads/2020/11/Khaled-Alwithinani.jpeg'
          alt=''
        />
        <p>
          Khaled Alwithinani, an engineer in the field of geospatial analysis moved from London to
          Helsinki for love. Soon he decided to pursue a career in a field that has a similar
          analytical approach to solving problems but this time from a different angle. He heard
          from a friend about The Shortcut and that it's a great place to showcase your skills,
          learn new once and network with others. So he decided to apply first to our Catalyst
          Program and got in. This opportunity led him to work at The Shortcut as a Data Analyst for
          the past year. With his dynamic personality combined with utmost sincerity, Khaled became
          a very popular community member in no time and also offered Salsa sessions to our members
          in his free time. Recently, Khaled has started working as a Data Analytics Project Manager
          at Salto Digital S.L.
        </p>
        <blockquote>
          I met my current employer through a talent matchmaking event organised by The Shortcut
          known as Talent Heist. I had a chat with him which resulted in an interview and then a job
          offer. It is a perfect opportunity as I get to work between Finland and the Gulf region.
          <cite>Khaled Alwithinani</cite>
        </blockquote>
      </section>

      <section>
        <h3>
          {' '}
          {/* <span>2.</span> */}
          Reza Naeeni
        </h3>
        <img src='https://theshortcut.org/wp-content/uploads/2020/11/Reza-Naeeni.jpeg' alt='' />
        <p>
          Reza Naeeni, KU Leuven alumni and Helsinki based tech entrepreneur has a background in IT
          Business Management. Before finding his calling to take the path of entrepreneurship, Reza
          worked as a Project Manager for several years that also included his experience of working
          at a Fortune 100 company. Arriving in Finland, Reza volunteered at The Shortcut as a part
          of the Community Outreach team where he got a chance to build his network and explore
          different entrepreneurial opportunities. Before getting started, Reza wanted to explore
          the Nordic startup ecosystem and meet innovative people with diverse backgrounds. The
          Shortcut being the entry point to the active startup ecosystem in Helsinki, he naturally
          found his way to us. Now, Reza is the co-founder and CEO of Swash, a Helsinki based
          startup. Swash is a blockchain-enabled platform that makes individual data monetization
          possible, giving you control while you benefit from the value your data generates online.
        </p>
        <blockquote>
          The experience of being a part of The Shortcut’s diverse team was like a quick tour to
          everything I needed to know before starting my own venture.
          <cite>Reza Naeeni</cite>
        </blockquote>
      </section>

      <section>
        <h3>
          {' '}
          {/* <span>2.</span> */}
          Nguyen Le
        </h3>
        <img src='https://theshortcut.org/wp-content/uploads/2017/03/wing-277x300.png' alt='' />
        <p>
          After moving to Finland from Vietnam and studying marketing at Hanken School of Economics,
          Nguyen Le found her way to The Shortcut. She spent four months with us, working as an
          event production and promotion intern. She feels that her time at The Shortcut not only
          gave her knowledge and new skills, but also the confidence she needed to voice her ideas.
        </p>
        <blockquote>
          The Shortcut team values empowerment. They are nice, friendly, helpful and were always
          there for me. I appreciated their encouragement, support and how they acknowledged my
          contributions. I mean, isn’t it amazing to have someone at work telling you that you are
          awesome? I heard that often
          <cite>Nguyen Le</cite>
        </blockquote>
      </section>

      <section>
        <h3>
          {' '}
          {/* <span>3.</span> */}
          Thomas Rocca
        </h3>
        <img src='https://theshortcut.org/wp-content/uploads/2020/09/ThomasRocca.jpg' alt='' />
        <p>
          Two years ago, Thomas moved from his native Czech Republic to Finland with his partner. He
          found his way to The Shortcut through our School of Startups, and later became more
          actively involved with the community as a participant in our Catalyst program, designed to
          help our community develop the necessary skills to launch their career in Finland. Now,
          Thomas is working at Sharetribe, a startup developing software to build marketplaces like
          AirBnB.
        </p>
        <blockquote>
          The Shortcut's Christmas party in 2018 was a seminal moment: hugging and greeting friends
          throughout the night was one of the first times I felt "at home" in Finland. Second only
          to the purpose-creating structure, the community The Shortcut gave me was a gift and
          critical to me eventually finding a job.
          <cite>Thomas</cite>
        </blockquote>
      </section>

      <section>
        <h3>
          {' '}
          {/* <span>4.</span> */}
          Maya Cristina
        </h3>
        <img src='https://theshortcut.org/wp-content/uploads/2020/09/maya.jpeg' alt='' />
        <p>
          Originally from Syria, Maya Kristina came to Finland in 2016. Through a shared connection
          on LinkedIn, she came across The Shortcut. She started out as a volunteer, helping us out
          where she could - and she officially joined The Shortcut as a trainee for the marketing
          team only a few weeks later. Soon after, she kickstarted her career as a marketing
          coordinator for Caddyboo, a startup producing microfibre pocket towels.
        </p>
        <blockquote>
          During my time at The Shortcut, I got the chance to grow my connections and network. I got
          professional advice for my career and how to improve myself, and I got to practice
          marketing which is my specialty and passion. Whenever I had an idea, I was always
          encouraged to propose it, and my ideas were taken seriously – that’s something I really
          appreciated about The Shortcut.
          <cite>Maya Kristina</cite>
        </blockquote>
      </section>

      <section>
        <h3>
          {' '}
          {/* <span>5.</span> */}
          Noemi Poget
        </h3>
        <img src='https://theshortcut.org/wp-content/uploads/2020/09/Noemi.png' alt='' />
        <p>
          The Swiss-born Noemi came to Finland in 2018 with a resume full of experiences; holding a
          degree in Ancient Greek Language and Literature, she went on to work as an internal
          reporter for the International Committee of the Red Cross, and later saved lives working
          as a paramedic. After coming to Finland, she took on the odd number of jobs including
          waitressing and cleaning and eventually made her way to The Shortcut as a Marketing &amp;
          Communications intern, bringing inspiring content to our blog. Now, she’s a full-time
          Community Manager at Maria 01!
        </p>
        <blockquote>
          With my background, I thought people might look at me strangely because I was doing so
          many different things, but my logic was always to work with people. I wanted to know how
          people lived their lives and to learn their stories. When I moved to Finland, I discovered
          that I was good at networking. At The Shortcut, I had the chance to meet and connect with
          so many great people. But maybe the most meaningful thing I learned from The Shortcut was
          confidence.
          <br />I finally felt like all the previous work I had done mattered and was important, and
          that has really made a big difference.
          <cite>Noemi</cite>
        </blockquote>
      </section>

      <section>
        <h3>
          {' '}
          {/* <span>6.</span> */}
          Esmeé Xavier
        </h3>
        <img src='https://theshortcut.org/wp-content/uploads/2020/09/esmee.png' alt='' />
        <p>
          From being a Catalyst Programme participant to an active Marketing intern at The Shortcut,
          Esmeé showed great dedication and true professionalism. We are not surprised that she soon
          found a job in her own field. During her internship, Esmeé handled the marketing of our
          talent matchmaking event Talent Heist as a Marketing Coordinator. Throughout her work, she
          realized that there was a lot of room in the tech startup world for her skill set, which
          is a mix of a journalism background and newfound love for marketing. Determined to thrive
          in the startup ecosystem, she pivoted her competencies, then found herself an opportunity
          at AppGyver with a Content Marketing Manager role.
        </p>
        <blockquote>
          I was blown away by how diverse it is — and not just people from different countries, but
          also a huge variety of professional backgrounds! It made the whole learning experience
          more enriching and extremely valuable
          <cite>Esmeé</cite>
        </blockquote>
      </section>

      <section>
        <h3>
          {' '}
          {/* <span>6.</span> */}
          Chengjing Jounio
        </h3>
        <img src='https://theshortcut.org/wp-content/uploads/2020/09/chengjing.jpg' alt='' />
        <p>
          Chengjing Jounio, associated with The Shortcut as a student intern, has recently got her
          well-deserved job at Beneq Oy as a Controller. For the last two years, she has also been
          running her own travel agency with a partner in Finland. Chengjing was very inspired by
          the success as well as challenging stories of real practitioners being shared in our
          workshops and events. Even after the internship, Chengjing continued as a volunteer at The
          Shortcut and participated in several events to continuously upskill herself.
        </p>
        <blockquote>
          All core team members were like mentors to me, especially Anne. I was heard, and I was
          supported. There was a good circle of positive feedback on the team as well. All these
          recognitions and positive feedbacks still give me the power to go forward.
          <cite>Chengjing Jounio</cite>
        </blockquote>
      </section>

      <section>
        <h3>
          {/* <span>1.</span>  */}
          Ekaterina
        </h3>
        <img src='https://theshortcut.org/wp-content/uploads/2019/01/Ekaterina.jpeg' alt='' />
        <p>
          Originally from Russia, Ekaterina is a professional in International Market Development.
          Two years ago, The Shortcut encouraged her to develop a business idea during the Digital
          Prototyping Weekend – little did she know that, soon after, she and her team would be
          distinguished for her business idea at development runway Ultrahack.
        </p>
        <blockquote>
          The Shortcut motivated me to give it a shot. I can’t say that I am not confident about my
          skills – but entrepreneurship… I didn’t know it was my thing, I didn’t know it was
          something I could try.
          <cite>Ekaterina</cite>
        </blockquote>
      </section>
    </div>
  );
};

export default SuccessStories;
