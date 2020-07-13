import React from "react";

// Styles
import css from "./styles.module.scss";

export default function Press() {
  return (
    <div>
      <div className={css.container}>
        <header>
          <div>
            {" "}
            <h2>For media</h2>
            <p>
              As the biggest talent accelerator in the Nordics and one of the
              biggest not-for-profit talent accelerators in the world, we’re
              committed to connecting talent with startups and high-growth
              companies, or encouraging talent to consider founding a startup of
              their own. We do this through events, workshops, training sessions
              and internships.
            </p>
          </div>
          <div>
            <img
              src={require("../../../assets/illustrations/2.png")}
              alt="illustration"
            />
          </div>
        </header>

        <div className={css.links}>
          <div className={css.contact}>
            <h3>Press contact</h3>
            <p>
              For interview requests or questions about services, please
              contact:
            </p>
            <a href="mailto:info@theshortcut.org">info@theshortcut.org</a>
          </div>

          <div className={css.brand}>
            <h3>Brand assets</h3>
            <p>
              These materials are intended for press-related use only. Please
              respect guidelines and instructions while using the materials.
            </p>
            <a
              href="http://theshortcut.org/wp-content/uploads/2017/02/the-Shortcut-logo-files.zip"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <img
                  src={require("../../../assets/icons/link.png")}
                  alt="illustration"
                  style={{ width: "20px", marginRight: "3px" }}
                />
              </span>{" "}
              The Shortcut logo files
            </a>
          </div>

          <div className={css.clippings}>
            {" "}
            <h3>Press clippings</h3>
            <ul>
              <li>
                <a
                  href="https://theshortcut.org/wp-content/uploads/2017/02/talouselama-2.12.16.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    <img
                      src={require("../../../assets/icons/link.png")}
                      alt="illustration"
                      style={{ width: "20px", marginRight: "3px" }}
                    />
                  </span>{" "}
                  Talouselämä 2.12.16
                </a>
              </li>
              <li>
                <a
                  href="https://theshortcut.org/wp-content/uploads/2017/02/Demokraatti_4_5_17.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    <img
                      src={require("../../../assets/icons/link.png")}
                      alt="illustration"
                      style={{ width: "20px", marginRight: "3px" }}
                    />
                  </span>{" "}
                  Demokraatti 4.5.17
                </a>
              </li>
              <li>
                <a
                  href="https://theshortcut.org/wp-content/uploads/2017/02/Plan-International-16.5.17.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    <img
                      src={require("../../../assets/icons/link.png")}
                      alt="illustration"
                      style={{ width: "20px", marginRight: "3px" }}
                    />
                  </span>{" "}
                  Plan International 16.5.17
                </a>
              </li>
              <li>
                <a
                  href="https://theshortcut.org/wp-content/uploads/2017/02/Helsingin-Sanomat-19.5.17.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    <img
                      src={require("../../../assets/icons/link.png")}
                      alt="illustration"
                      style={{ width: "20px", marginRight: "3px" }}
                    />
                  </span>{" "}
                  Helsingin Sanomat 19.5.17
                </a>
              </li>
              <li>
                <a
                  href="https://theshortcut.org/wp-content/uploads/2017/02/Slush-19.5.17.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    <img
                      src={require("../../../assets/icons/link.png")}
                      alt="illustration"
                      style={{ width: "20px", marginRight: "3px" }}
                    />
                  </span>
                  Slush 19.5.17
                </a>
              </li>
            </ul>
          </div>
          <div className={css.materials}>
            {" "}
            <h3>Press materials</h3>
            <ul>
              <li>
                {" "}
                <a
                  href="https://theshortcut.org/wp-content/uploads/2017/02/Press-release_International.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    <img
                      src={require("../../../assets/icons/link.png")}
                      alt="illustration"
                      style={{ width: "20px", marginRight: "3px" }}
                    />
                  </span>{" "}
                  Press release (international)
                </a>
              </li>
              <li>
                <a
                  href="https://theshortcut.org/wp-content/uploads/2017/02/Press-release_Finnish.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <span>
                    <img
                      src={require("../../../assets/icons/link.png")}
                      alt="illustration"
                      style={{ width: "20px", marginRight: "3px" }}
                    />
                  </span>{" "}
                  Press release (Finnish)
                </a>
              </li>
              <li>
                <a
                  href="https://theshortcut.org/wp-content/uploads/2017/02/Background_The_Shortcut.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    <img
                      src={require("../../../assets/icons/link.png")}
                      alt="illustration"
                      style={{ width: "20px", marginRight: "3px" }}
                    />
                  </span>{" "}
                  The Shortcut background
                </a>
              </li>
            </ul>
          </div>

          {/* Section for any miscellaneous mentions
          <div className={css.other}>
            <h3>About us around the web</h3>
          </div> */}
        </div>
      </div>
    </div>
  );
}
