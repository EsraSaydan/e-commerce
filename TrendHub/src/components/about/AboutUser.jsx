import React from "react";
import username6 from "../../assets/team/username6.jpg";
import username7 from "../../assets/team/username7.jpg";
import username4 from "../../assets/team/username4.jpg";

const teamMembers = [
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
    image: username4,
    social: {
      facebook: "facebook-link",
      instagram: "instagram-link",
      twitter: "twitter-link",
    },
  },
];

export default function AboutUser() {
  return (
    <section className="flex justify-center pb-20 max-md:pb-15">
      <div className="basis-[80%] text-center">
        <h2 className="font-bold text-4xl tracking-wide pt-20  text-productGraphDesign">
          Meet Our Team
        </h2>
        <p className="text-iconGray pt-5 pb-20 font-semibold ">
          Problems trying to resolve the conflict between <br /> the two major
          realms of Classical physics: Newtonian mechanics
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[50px]">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center my-[1%] hover:opacity-75">
              <picture className="block aspect-[1.3/1] w-full">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </picture>
              <div className="flex flex-col my-6 font-bold gap-3">
                <h5 className="text-base tracking-wide text-productGraphDesign">
                  {member.name}
                </h5>
                <h6 className="text-sm text-iconGray">{member.profession}</h6>
                <div className="w-[125px] flex justify-center gap-8 text-customLightBlue mx-auto">
                  <a
                    href={member.social.facebook}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-facebook hover:opacity-45"></i>
                  </a>
                  <a
                    href={member.social.instagram}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-instagram hover:opacity-45"></i>
                  </a>
                  <a href={member.social.twitter} target="_blank">
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
