import React from "react";

// Styles
import css from "./styles.module.scss";

export default function TermsOfServices() {
  return (
    <div>
      <div className={css.container}>
        <header>
          <h2>The Shortcut Terms of Services</h2>
          <div>
            <img
              src={require("../../assets/icons/security.png")}
              alt="visual"
            />
          </div>
        </header>

        <p>
          Hello and welcome to our website. We have posted these terms and
          conditions to be in compliance with numerous laws that regulate the
          operation of an Internet website. The terms and conditions cover a
          variety of important issues, including the protection of copyrighted
          material and other intellectual property, and the presentation,
          collection and use of information.
        </p>

        <p>
          These terms and conditions apply to your use of this website
          <a href="/">(https://theshortcut.org/)</a> and they also apply to: (a)
          all websites owned and/or provided by The Startup Shortcut Oy
          including all services offered through these sites and/or any other
          The Startup Shortcut Oy website (the “Services”); (b) all software
          offerings and applications owned and/or provided by The Startup
          Shortcut Oy and/or available on or through these site or any other The
          Startup Shortcut Oy website (the “Software”); and (c) all web pages,
          data, text, images, photographs, illustrations, graphics, audio,
          video, and documents including articles, marketing materials, press
          releases and other information and content available on or through
          this site or any The Startup Shortcut Oy website.
        </p>
        <p>
          Your continued participation on The Startup Shortcut Oy’s sites
          indicates your acceptance of this Terms &amp; Conditions, including
          your acceptance of the Privacy Policy and of the collection, use,
          disclosure, management and storage of your Personal Information (as
          defined in the Privacy Policy).
        </p>

        <h3>
          <span>1.</span> Terms
        </h3>
        <p>
          By accessing the website at <a href="/">https://theshortcut.org/</a>,
          you are agreeing to be bound by these terms of service, all applicable
          laws and regulations, and agree that you are responsible for
          compliance with any applicable local laws. If you do not agree with
          any of these terms, you are prohibited from using or accessing this
          site. The materials contained in this website are protected by
          applicable copyright and trademark law.
        </p>

        <h3>
          <span>2.</span> Use License
        </h3>
        <p>
          Permission is granted to temporarily download one copy of the
          materials (information or software) on The Startup Shortcut Oy’s
          website for personal, non-commercial transitory viewing only. This is
          the grant of a license, not a transfer of title, and under this
          license you may not:
        </p>
        <ul>
          <li>&mdash; modify or copy the materials;</li>
          <li>
            &mdash; use the materials for any commercial purpose, or for any
            public display (commercial or noncommercial);
          </li>
          <li>
            &mdash; attempt to decompile or reverse engineer any software
            contained on The Startup Shortcut Oy’s website;
          </li>
          <li>
            &mdash; remove any copyright or other proprietary notations from the
            materials;
          </li>
          <li>
            &mdash; or transfer the materials to another person or “mirror” the
            materials on any other server.
          </li>
        </ul>
        <p>
          This license shall automatically terminate if you violate any of these
          restrictions and may be terminated by The Startup Shortcut Oy at any
          time. Upon terminating your viewing of these materials or upon the
          termination of this license, you must destroy any downloaded materials
          in your possession whether in electronic or printed format.
        </p>

        <h3>
          <span>3.</span> Disclaimer
        </h3>
        <p>
          The materials on The Startup Shortcut Oy’s website are provided on an
          ‘as is’ basis. The Startup Shortcut Oy makes no warranties, expressed
          or implied, and hereby disclaims and negates all other warranties
          including, without limitation, implied warranties or conditions of
          merchantability, fitness for a particular purpose, or non-infringement
          of intellectual property or other violation of rights.
        </p>
        <p>
          Further, The Startup Shortcut Oy does not warrant or make any
          representations concerning the accuracy, likely results, or
          reliability of the use of the materials on its website or otherwise
          relating to such materials or on any sites linked to this site.
        </p>

        <h3>
          <span>4.</span> Limitations
        </h3>
        <p>
          In no event shall The Startup Shortcut Oy or its suppliers be liable
          for any damages (including, without limitation, damages for loss of
          data or profit, or due to business interruption) arising out of the
          use or inability to use the materials on The Startup Shortcut
          Oy&rsquo;s website, even if The Startup Shortcut Oy or a The Startup
          Shortcut Oy authorized representative has been notified orally or in
          writing of the possibility of such damage. Because some jurisdictions
          do not allow limitations on implied warranties, or limitations of
          liability for consequential or incidental damages, these limitations
          may not apply to you.
        </p>

        <h3>
          <span>5.</span> Accuracy of materials
        </h3>
        <p>
          The materials appearing on The Startup Shortcut Oy&rsquo;s website
          could include technical, typographical, or photographic errors. The
          Startup Shortcut Oy does not warrant that any of the materials on its
          website are accurate, complete or current. The Startup Shortcut Oy may
          make changes to the materials contained on its website at any time
          without notice. However The Startup Shortcut Oy does not make any
          commitment to update the materials.
        </p>
        <h3>
        <span>6.</span> Links
        </h3>
        <p>
          The Startup Shortcut Oy has not reviewed all of the sites linked to
          its website and is not responsible for the contents of any such linked
          site. The inclusion of any link does not imply endorsement by The
          Startup Shortcut Oy of the site. Use of any such linked website is at
          the user&rsquo;s own risk.
        </p>
        <h3>
        <span>7.</span> Modifications
        </h3>
        <p>
          The Startup Shortcut Oy may revise these terms of service for its
          website at any time without notice. By using this website you are
          agreeing to be bound by the then current version of these terms of
          service.
        </p>
        <h3>
        <span>8.</span> Governing Law
        </h3>
        <p>
          These terms and conditions are governed by and construed in accordance
          with the laws of Finland and you irrevocably submit to the exclusive
          jurisdiction of the courts in that State or location.
        </p>
      </div>
    </div>
  );
}
