import React, { useEffect, useState } from "react";
import Talent from "./Talent";
import axios from "axios";

// // Styles
import css from "./styles.module.scss";

const TalentList = () => {
  const [talents, setTalents] = useState("");

  useEffect(() => {
    helper();
  }, []);

  const helper = async () => {
    const talentsData = await axios.get(
      `https://theshortcut.org/wp-json/wp/v2/talents?per_page=100&_embed`
    );
    console.log("Talents are ", talentsData.data);

    setTalents(talentsData.data);
    console.log("helloo");
  };

  const dataFromStore =
    talents &&
    talents.map((i) => {
      const arrayTalents = {};
      arrayTalents.id = i.id;
      arrayTalents.name = i.title.rendered;
      arrayTalents.type = i.type;
      arrayTalents.linkedInProf = i.linkedin_profile;
      arrayTalents.email = i.email;
      arrayTalents.hashtags = i.hashtags;
      arrayTalents.image = i._embedded["wp:featuredmedia"]["0"].source_url;
      return arrayTalents;
    });
  console.log("talents are ", dataFromStore);

  return (
    <div className={css.list}>
      {dataFromStore &&
        dataFromStore.map((talent, i) => <Talent key={i} data={talent} />)}
    </div>
  );
};

export default TalentList;
