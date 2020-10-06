import React, { useState } from "react";
import ReactModal from "react-modal";
// // Styles
import css from "./styles.module.scss";
import { MdClose } from "react-icons/md";
import striptags from "striptags";

const Talent = ({ data }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [resultData, setResultData] = useState("");
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: "50px",
    },
  };

  return (
    <div className={css.talent}>
      <div onClick={openModal} className={css.talentCard}>
        <img src={data.image} alt="" />
        <div className={css.info}>
          <h4 className={css.name}>{data.name}</h4>
          <p>{data.hashtags}</p>
          <div className={css.links}>
            <a href={`mailto:${data.email}`}>
              <img
                src="https://theshortcut.org/wp-content/uploads/2019/10/email-icon-01.png"
                alt="mail-icon"
              ></img>
            </a>
            <a href={data.linkedInProf}>
              {" "}
              <img
                src="https://theshortcut.org/wp-content/uploads/2019/10/linkedin-2.png"
                alt="linkedin-icon"
              />
            </a>
          </div>
        </div>
      </div>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className={css.modalContainer}>
          <button onClick={closeModal} className={css.modalClose}>
            <MdClose />
          </button>
          <h4 className={css.modalName}>{data.name}</h4>
          <div className={css.modalLinks}>
            <a href={`mailto: ${data.email}`}>
              <img
                src="https://theshortcut.org/wp-content/uploads/2019/10/email-icon-01.png"
                alt="mail-icon"
              ></img>
            </a>
            <a href={data.linkedInProf}>
              <img
                src="https://theshortcut.org/wp-content/uploads/2019/10/linkedin-2.png"
                alt="linkedin-icon"
              />
            </a>
          </div>

          <div className={css.modalContent}>{striptags(data.content)}</div>
        </div>
      </ReactModal>
    </div>
  );
};
ReactModal.setAppElement("#root");
export default Talent;
