import axios from "axios";
import FormData from "form-data";
import { store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

const helper = (email, message, subject, name, API, invalid) => {
  if (name.length > 0 && message.length > 0 && email.length > 0 && !invalid) {
    // console.log("clicked submit btn");
    // console.log("data is ", name, email, subject, message);

    let data = new FormData();
    data.append("your-name", name);
    data.append("your-email", email);
    data.append("your-subject", subject);
    data.append("your-message", message);

    let config = {
      method: "post",
      url: API,

      data: data,
    };

    axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data));
        store.addNotification({
          title: `Thank you ${name}.`,
          message: "Your message has now been sent.",
          type: "success",
          insert: "center",
          container: "center",
          animationIn: ["animate__animated", "animate__fadeIn"],
          animationOut: ["animate__animated", "animate__fadeOut"],
          dismiss: {
            duration: 4000,
            showIcon: true,
          },
        });
      })
      .catch(function (error) {
        console.log(error);
      });
    return true;
  } else {
    // console.log("falling in else");
    store.addNotification({
      title: "Warning",
      message: "Please check if you have entered the right information!",
      type: "danger",
      insert: "center",
      container: "center",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 4000,
        showIcon: true,
      },
    });
    return false;
  }
};
export default helper;
