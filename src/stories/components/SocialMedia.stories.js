import React from "react";
import SocialMedia from "../../components/social-media/SocialMedia";

export const Default = () => (
  <span style={{ background: "#000", display: "inline-block", padding: 10 }}>
    <SocialMedia
      src="https://www.proverbiosdislexicos.com/images/social_facebook.png"
      alt="PH"
      href="http://facebook.com"
    />
  </span>
);

export default {
  title: "Components/SocialMedia",
  component: SocialMedia
};
