const searchResult = (search_value, talents, type) => {
  try {
    const final = [];
    if (type === "All") {
      talents.forEach((each) => {
        if (
          each.name.toLowerCase().includes(search_value.toLowerCase()) ||
          each.content.toLowerCase().includes(search_value.toLowerCase()) ||
          each.hashtags.toLowerCase().includes(search_value.toLowerCase())
        ) {
          final.push(each);
        }
      });
    } else if (type === "Name") {
      talents.forEach((each) => {
        if (each.name.toLowerCase().includes(search_value.toLowerCase())) {
          final.push(each);
        }
      });
    } else if (type === "Content") {
      talents.forEach((each) => {
        if (each.content.toLowerCase().includes(search_value.toLowerCase())) {
          final.push(each);
        }
      });
    } else {
      talents.forEach((each) => {
        if (each.hashtags.toLowerCase().includes(search_value.toLowerCase())) {
          final.push(each);
        }
      });
    }

    return [...final];
  } catch (err) {
    console.log(err);
  }
};

export default searchResult;
