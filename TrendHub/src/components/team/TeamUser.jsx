import React from "react";
import username1 from "../../assets/team/username1.jpg";
import username2 from "../../assets/team/username2.jpg";
import username3 from "../../assets/team/username3.jpg";
import username4 from "../../assets/team/username4.jpg";
import username5 from "../../assets/team/username5.jpg";
import username6 from "../../assets/team/username6.jpg";
import username7 from "../../assets/team/username7.jpg";
import username8 from "../../assets/team/username8.jpg";
import username9 from "../../assets/team/username9.jpg";

const teamMembers = [
  {
    name: "Username",
    profession: "Profession",
    image: username1,
    social: {
      facebook: "facebook-link",
      instagram: "instagram-link",
      twitter: "twitter-link",
    },
  },
  {
    name: "Username",
    profession: "Profession",
    image: username2,
    social: {
      facebook: "facebook-link",
      instagram: "instagram-link",
      twitter: "twitter-link",
    },
  },
  {
    name: "Username",
    profession: "Profession",
    image: username3,
    social: {
      facebook: "facebook-link",
      instagram: "instagram-link",
      twitter: "twitter-link",
    },
  },
  {
    name: "Username",
    profession: "Profession",
    image: username4,
    social: {
      facebook: "facebook-link",
      instagram: "instagram-link",
      twitter: "twitter-link",
    },
  },
  {
    name: "Username",
    profession: "Profession",
    image: username5,
    social: {
      facebook: "facebook-link",
      instagram: "instagram-link",
      twitter: "twitter-link",
    },
  },
  {
    name: "Username",
    profession: "Profession",
    image: username6,
    social: {
      facebook: "facebook-link",
      instagram: "instagram-link",
      twitter: "twitter-link",
    },
  },
  {
    name: "Username",
    profession: "Profession",
    image: username7,
    social: {
      facebook: "facebook-link",
      instagram: "instagram-link",
      twitter: "twitter-link",
    },
  },
  {
    name: "Username",
    profession: "Profession",
    image: username8,
    social: {
      facebook: "facebook-link",
      instagram: "instagram-link",
      twitter: "twitter-link",
    },
  },
  {
    name: "Username",
    profession: "Profession",
    image: username9,
    social: {
      facebook: "facebook-link",
      instagram: "instagram-link",
      twitter: "twitter-link",
    },
  },
];

export default function TeamUser() {
  return (
    <div className="container mx-auto px-[50px] lg:px-[195px] py-[50px] lg:py-[112px]">
      <h2 className="text-center text-5xl font-bold mb-12 lg:pb-12 text-productGraphDesign">
        Meet Our Team
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[50px] ">
        {teamMembers.map((member, index) => (
          <div key={index} className="text-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-full object-cover "
            />
            <h5 className="text-lg font-bold mt-4 py-3 text-productGraphDesign">
              {member.name}
            </h5>
            <h6 className="text-iconGray font-bold py-2">
              {member.profession}
            </h6>
            <div className="flex justify-center text-xl text-customLightBlue gap-4 mt-2">
              <a href={member.social.facebook} target="_blank">
                <i className="fab fa-facebook  "></i>
              </a>
              <a href={member.social.instagram} target="_blank">
                <i className="fab fa-instagram"></i>
              </a>
              <a href={member.social.twitter} target="_blank">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
