import React from "react";
import TeamHeader from "../components/team/TeamHeader";
import TeamHero from "../components/team/TeamHero";
import TeamUser from "../components/team/TeamUser";
import TeamCta from "../components/team/TeamCta";

export default function () {
  return (
    <div>
      <TeamHeader />
      <TeamHero />
      <TeamUser />
      <TeamCta />
    </div>
  );
}
