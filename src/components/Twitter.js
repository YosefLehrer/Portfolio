import React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";
let id = 800561378482212864;
const Twitter = () => {
  return (
    <TwitterTimelineEmbed
      sourceType="profile"
      screenName="yoseflehrer"
      options={{ height: 400 }}
    />
  );
};

export default Twitter;
