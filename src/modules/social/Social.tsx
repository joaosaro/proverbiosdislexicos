import React from "react";
import "./social.scss";
import SocialMedia from "../../components/social-media/SocialMedia";
import socialLinks from "../../data/social-links";

const Social: React.FC = () => {
  return (
    <aside className="socials-links">
      <ul>
        {socialLinks.map((social, index) => (
          <li className="social__media" key={index}>
            <SocialMedia href={social.href} src={social.src} alt={social.alt} />
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Social;
