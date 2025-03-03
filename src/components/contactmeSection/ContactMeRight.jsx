import React from "react";
import ContactsInfo from "./ContactsInfo";
import ContactSocial from "./ContactSocial";

const ContactMeRight = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-12">
      <img
        src="../../public/images/email-image.png"
        alt=""
        className="max-w[300px]"
      />
      <ContactsInfo></ContactsInfo>
      <ContactSocial></ContactSocial>
    </div>
  );
};

export default ContactMeRight;
