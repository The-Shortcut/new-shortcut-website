import React from "react";

// Styles
import css from "./styles.module.scss";

export default function DataDescription() {
  return (
    <div>
      <div className={css.container}>
        <header>
          <h2>
            Description of personal data file in accordance with Personal Data
            Act (523/1999) 10 §
          </h2>
          <div></div>
        </header>

        <h3>
          <span>1. </span> Controller
        </h3>
        <p>
          The Startup Shortcut Oy <span>(Business ID 2759222-9)</span>
          <br />
          Lapinlahdenkatu 16, 15B
          <br />
          00180 Helsinki
        </p>

        <h3>
          <span>2.</span> Contact person
        </h3>
        <p>
          Anne Badan
          <br />
          Contact Information
          <br />
          <a href="mailto:anne@theshortcut.org">anne@theshortcut.org</a>
        </p>

        <h3>
          <span>3.</span> Name of the register
        </h3>
        <p>
          The Startup Shortcut Oy&rsquo;s register of persons participating in
          the activities or events organized by The Startup Shortcut Oy.
        </p>

        <h3>
          {" "}
          <span>4.</span> The purpose for processing the personal data
        </h3>
        <p>
          The purpose of the register is to keep track of people attending the
          events organized by The Startup Shortcut Oy in order to collect data
          based on which the events may be further developed.
        </p>
        <p>
          In addition, the purpose of processing personal data is to send
          newsletters to the user by The Startup Shortcut Oy.
        </p>
        <p>
          Other purpose of the processing of personal data is to collect the
          general statistical information of the visitors for the development of
          the service on the
          <a href="https://theshortcut.org/"> https://theshortcut.org/</a>{" "}
          website of the The Startup Shortcut Oy.
        </p>
        <p>
          The data may also be used for marketing of events and other activities
          organized by The Startup Shortcut Oy.
        </p>

        <h3>
          <span>5.</span> Content of the register
        </h3>
        <p>
          The register contains information about persons signed for newsletter
          or registered/attending events organized by The Startup Shortcut Oy.
        </p>
        <p>The following information types may be handled in the register:</p>
        <p>
          Basic information on the persons who have attended or registered for
          events organized by The Startup Shortcut Oy, such as
        </p>
        <p>&minus; first and last names</p>
        <p>&minus; contact information</p>
        <p>&minus; nationality</p>
        <p>&minus; age</p>
        <p>&minus; occupation</p>
        <p>Information relating to events, such as,</p>
        <p>&minus; information on attended events</p>
        <p>&minus; information on given information</p>
        <p>
          The register may contain amendment information in relation to all
          types of data listed above.
        </p>
        <p>
          The Startup Shortcut Oy collects information about the user through
          third-party services, Google Analytics, Eventbrite, Mailchimp and
          Sendinblue services.
        </p>
        <h4>Google Analytics:</h4>
        <p>
          <a href="http://www.google.com/intl/fi/policies/privacy">
            http://www.google.com/intl/fi/policies/privacy
          </a>
        </p>
        <h4>Eventbrite:</h4>
        <p>
          <a href="https://www.eventbrite.com/terms-of-service">
            https://www.eventbrite.com/terms-of-service
          </a>
        </p>
        <h4>Sendinblue:</h4>
        <p>
          <a href="https://www.sendinblue.com/legal/privacypolicy/">
            https://www.sendinblue.com/legal/privacypolicy/
          </a>
        </p>
        <h4>Mailchimp</h4>
        <p>https://mailchimp.com/legal/privacy/</p>

        <h3>
          <span>6.</span> Regular sources of information
        </h3>
        <p>
          The information is collected in connection with the events organized
          by The Startup Shortcut Oy, including registration therefore and
          information given in the events. Information may further be collected
          when a person on his or her own initiative expresses a wish to, partly
          or wholly, not to attend events organized by or receive marketing from
          The Startup Shortcut Oy.
        </p>
        <h3>
          <span>7.</span> Regular destinations of disclosed data
        </h3>
        <p>
          Personal data contained in the register may be disclosed to competent
          authorities in accordance with and pursuant to the applicable laws.
        </p>
        <h3>
          <span>8.</span> Transfer of data to countries outside the EU or the
          EEA
        </h3>
        <p>
          Data included in the register may be transferred outside EU member
          states or the EEA if it is necessary for the aforementioned handling
          of personal data or the appropriate technical processing of personal
          data. Applicable data protection legislation will be complied with in
          connection with such transfer.
        </p>
        <h3>
          <span>9.</span> The principles how the register is secured
        </h3>
        <p>
          Personal data in electronic format is protected by generally accepted
          technical methods, such as firewalls, user names and passwords.
          Backups of the register are made on a regular basis. Material
          containing personal data in any other format is stored in premises
          with restricted unauthorized access.
        </p>
        <p>
          Data in the register may only be handled by persons employed by the
          controller, who, from time to time, need to handle the data as part of
          their professional tasks and the investigation of the report in
          question.
        </p>
        <p>
          The company takes account of applicable laws and provisions issued by
          the authorities as well as industry association guidelines in order to
          ensure the confidential treatment of personal data.
        </p>
        <h3>
          <span>10.</span> Rights of the registered person
        </h3>
        <p>
          The data subject has in accordance with Section 26 of the Personal
          Data Act, right of access to the data on him/her by contacting the
          controller in person or in written and personally signed form.
        </p>
        <p>
          The data subject has in accordance with Section 29 of the Personal
          Data Act, the right to demand that the controller rectifies, removes
          or supplements data in the register that is erroneous, unnecessary,
          incomplete or obsolete, taking into consideration the exclusions
          referred to above. If the controller does not accept the data
          subject&rsquo;s request to have the data rectified, a written
          certificate of this shall be issued to the data subject.
        </p>
      </div>
    </div>
  );
}
