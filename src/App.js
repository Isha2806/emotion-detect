import React, { useState } from "react";
import "./styles.css";
import img1 from "./images/emoji-detect.svg";

/**
 * concept notes: styling in react
 */

/**
 * concept of hashmap (object as hashmap)
 * O(1) and why we are doing this.
 */
const emojiDictionary = {
  "😊": "Smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance",
  "🇦🇺": "Australia Day",
  "🇫🇷 ": "Bastille Day",
  "🎂 ": "Birthday",
  "🛍️": "Black Friday",
  "✊🏿": "Black Lives Matter",
  "🇨🇦": "Canada Day",
  "🇧🇷 ": "Carnaval",
  "🐉": "Chinese New Year",
  "🎅": "Christmas",
  "🇲🇽": "Cinco de Mayo",
  "🦠 ": "Coronavirus",
  "🪔": "Diwali",
  "🇨🇳": "Dragon Boat Festival",
  "🐰 ": "Easter",
  "🎥": "Emoji Movie",
  "🍂 ": "Fall / Autumn",
  "👨": "Father’s Day",
  "💪": "Festivus",
  "🌿 ": "Four Twenty / 420",
  "🎓": "Graduation",
  "🔥": "Guy Fawkes",
  "🎃": "Halloween",
  "🕎": "Hanukkah",
  "💕": "Hearts",
  "🕉️": "Holi",
  "🇺🇸": "Independence Day",
  "♀️": "International Women Day",
  "🤱": "Mother’s Day",
  "🎊": "New Year’s Eve",
  "🔞": "NSFW",
  "🏊": "Olympics",
  "🏳️‍🌈": "Pride",
  "🎭 ": "Purim",
  "👑": "Queen’s Birthday",
  "☪️ ": "Ramadan",
  "🌱": "Spring",
  "☘️": "St Patrick’s Day",
  "☀️": "Summer",
  "🏈": "Super Bowl",
  "🦃": "Thanksgiving",
  "💘": "Valentine’s Day",
  "🎖️": "Veterans Day",
  "👰 ": "Wedding / Marriage",
  "⛄": "Winter",
  "🎿": "Winter Olympics",
  "🏡": "Working From Home",
  "⚽ ": "World Cup",
  "🌎 ": "World Emoji Day"
};

/**
 * converting an object to array of keys
 */
const emojis = Object.keys(emojiDictionary);

export default function App() {
  const [emoji, setEmoji] = useState(""); /** concept 2 is useState */
  const [meaning, setMeaning] = useState("Detected emoji will appear here..");

  function changeHandler(event) {
    const inputEmoji = event.target.value;
    setEmoji(inputEmoji);

    if (inputEmoji in emojiDictionary) {
      setMeaning(emojiDictionary[inputEmoji]);
    } else {
      setMeaning("failure to detect this emoji");
    }
  }

  function emojiClickHandler(inputEmoji) {
    setMeaning(emojiDictionary[inputEmoji]);
  }

  return (
    /** concept 3 is onchange */
    <div className="App">
      <h1>Your Emoji Detector</h1>
      <div>
        <img src={img1} alt="emotion" />
      </div>
      <input
        onChange={changeHandler}
        value={emoji}
        placeholder={"Detect Emoji here"}
        style={{
          padding: "1em",
          minWidth: "80%"
        }}
      />
      <h2> {emoji} </h2> {/** JSX */}
      <h3> {meaning} </h3> {/** how much part is re-rendered. */}
      {emojis.map((emoji) => (
        <span
          onClick={() => emojiClickHandler(emoji)}
          style={{ fontSize: "5rem", padding: "2rem", cursor: "pointer" }}
        >
          {" "}
          {emoji}{" "}
        </span>
      ))}
    </div>
  );
}
