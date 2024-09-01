import React from "react";
import BotResponse from "./BotResponse";

const IntroSection = () => {
  return (
    <div id="introsection">
      <h1>
        Introducing Talkbot
        <BotResponse response=" - The Ultimate AI Assistant" />
      </h1>
      <h2 style={{textAlign: "start"}}>
        A cutting-edge AI-powered app that provides instant answers to any
        question you may have. With Talkbot, you'll never be left searching for
        answers again. Whether you need information for school or work, or just
        want to know the latest news, Talkbot has you covered.
      </h2>
      Features:
      <ul>
        <li>  <BotResponse response="Instant answers to any question" /></li>
        <li>  <BotResponse response="Deep learning technology that improves with usage" /></li>
        <li>   <BotResponse response="Continuously Learning" /></li>
        <li>  <BotResponse response="User-friendly interface" /></li>
        <li>  <BotResponse response="Available 24/7" /></li>
      </ul>
      <p>
        Say goodbye to endless searching and typing, and say hello to TalkBot,
        your personal AI assistant. Try it now and see for yourself how TalkBot
        can make your life easier.
      </p>
    </div>
  );
};

export default IntroSection;
