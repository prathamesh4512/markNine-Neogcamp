import { useState } from "react";
import "./styles.css";
import { topicsDatabase } from "./utils";

var topics = Object.keys(topicsDatabase);

export default function App() {
  var [topic, setTopic] = useState("HTML");

  function onClickHandler(newTopic) {
    setTopic(newTopic);
  }
  return (
    <div className="App">
      <h1>💻 Best resource to learn Frontend development</h1>

      {topics.map(function (topic) {
        return <button onClick={() => onClickHandler(topic)}>{topic}</button>;
      })}
      <hr />
      <ul>
        {topicsDatabase[topic].map((resource) => (
          <li key={resource.name}>
            <span>{resource.name}</span>
            <hr />
            <p id="details">
              Details : <span id="text-highlight">{resource.details}</span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
