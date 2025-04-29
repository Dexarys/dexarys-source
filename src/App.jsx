import { useState, useEffect } from "react";
import Loader from "./components/loader/Loader";
import Navigation from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";
import HomePage from "./pages/HomePage";

import "./App.css";
import base from "./database/base.json";

const App = ({ env }) => {
  const [state, setState] = useState({
    isLoading: true,
    isWebsiteOpen: true,
    isShowAlert: true,
    msgAlert: "",
    msgCitation: "",
    msgAuthor: "",
    biography: "",
    email: "",
    phone: "",
    copyright: "",
    interest: "",
    hobbies: "",
  });

  useEffect(() => {
    setState({
      isLoading: false,
      isWebsiteOpen: base.website_open,
      isShowAlert: base.website_alert.show_alert,
      msgAlert: base.website_alert.message_alert,
      msgCitation: base.website_description.citation,
      msgAuthor: base.website_description.author,
      biography: base.website_description.biography,
      email: base.website_description.email,
      phone: base.website_description.phone,
      copyright: base.website_description.copyright,
      interest: base.website_description.interest,
      hobbies: base.website_description.hobbies,
    });
  }, []);

  if (state.isLoading) {
    return <Loader />;
  }

  if (!state.isWebsiteOpen) {
    return <div>Site closed</div>;
  }

  return (
    <div>
      <Navigation
        isShowAlert={state.isShowAlert}
        msgAlert={state.msgAlert}
        msgCitation={state.msgCitation}
        msgAuthor={state.msgAuthor}
      />
      <HomePage
        isEmail={state.email}
        isPhone={state.phone}
        env={env}
        biography={state.biography}
        interest={state.interest}
        hobbies={state.hobbies}
      />
      <Footer isCopyright={state.copyright} />
    </div>
  );
};

export default App;
