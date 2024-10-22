import React from "react";
import ContactHeader from "../components/contact/ContactHeader";
import ContactContainer from "../components/contact/ContactContainer";
import ContactCta from "../components/contact/ContactCta";

export default function ContactPage() {
  return (
    <div>
      <ContactHeader />
      <ContactContainer />
      <ContactCta />
    </div>
  );
}
