import { store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import axios from "axios";

const helper = (API_TOKEN, email, setEmail) => {
  let config = {
    method: "post",
    url: "https://api.sendinblue.com/v3/contacts",
    headers: {
      "Content-Type": "application/json",
      "api-key": API_TOKEN,
    },
    data: JSON.stringify({ email: email }),
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));

      store.addNotification({
        title: `Thank you.`,
        message: "Your email has now been added.",
        type: "success",
        insert: "top",
        container: "bottom-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 5000,
          showIcon: true,
        },
      });
      document.getElementById("email").value = "";
      setEmail("");
    })
    .catch(function (error) {
      console.log(error);
      console.log("emails exists");
      store.addNotification({
        title: `Warning`,
        message: "Your email already exixts!.",
        type: "warning",
        insert: "top",
        container: "bottom-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 5000,
          showIcon: true,
        },
      });
    });
};
export default helper;
