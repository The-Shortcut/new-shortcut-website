import axios from "axios";

const searchResult = async (searchValue, talents, type) => {
  try {
    const search_value = await searchValue;
    const final = [];
    if (type === "All") {
      await talents.forEach((each) => {
        if (
          each.title.rendered
            .toLowerCase()
            .includes(search_value.toLowerCase()) ||
          each.content.rendered
            .toLowerCase()
            .includes(search_value.toLowerCase()) ||
          each.hashtags.toLowerCase().includes(search_value.toLowerCase())
        ) {
          final.push(each);
        }
      });
    } else if (type === "Name") {
      await talents.forEach((each) => {
        if (
          each.title.rendered.toLowerCase().includes(search_value.toLowerCase())
        ) {
          final.push(each);
        }
      });
    } else if (type === "Content") {
      await talents.forEach((each) => {
        if (
          each.content.rendered
            .toLowerCase()
            .includes(search_value.toLowerCase())
        ) {
          final.push(each);
        }
      });
    } else {
      await talents.forEach((each) => {
        if (each.hashtags.toLowerCase().includes(search_value.toLowerCase())) {
          final.push(each);
        }
      });
    }
    console.log("final is ", final);
    return [...final];
  } catch (err) {
    console.log(err);
  }
};

export default searchResult;
