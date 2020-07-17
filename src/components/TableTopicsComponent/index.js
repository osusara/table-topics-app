import React, { useState, useEffect } from "react";
import { db } from "../../firebase";

import Table from "./Table";
import TopicCard from "./TopicCard";
import SetTopics from "./SetTopics";
import Layout from "../Layout";

const TableTopicsComponent = () => {
  const [setting, setSetting] = useState(false);
  const [number, setNumber] = useState(0);
  const [topicObj, setTopicObj] = useState({
    topic1: "1. Topic not set 😢",
    topic2: "2. Topic not set 😢",
    topic3: "3. Topic not set 😢",
    topic4: "4. Topic not set 😢",
    topic5: "5. Topic not set 😢",
    topic6: "6. Topic not set 😢",
    topic7: "7. Topic not set 😢",
    topic8: "8. Topic not set 😢",
    topic9: "9. Topic not set 😢",
    topic10: "10. Topic not set 😢"
  });

  const topic = [
    topicObj.topic1,
    topicObj.topic2,
    topicObj.topic3,
    topicObj.topic4,
    topicObj.topic5,
    topicObj.topic6,
    topicObj.topic7,
    topicObj.topic8,
    topicObj.topic9,
    topicObj.topic10
  ];

  const getTopics = () => {
    db.collection("topics")
      .doc("topicsList")
      .get()
      .then(function (doc) {
        if (doc.exists) {
          console.log("Document data:", doc.data());
          setTopicObj(doc.data());
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch(function (error) {
        console.log("Error getting document:", error);
      });
  };

  useEffect(() => {
    getTopics();
  }, []);

  return (
    <Layout>
      {setting ? (
        <SetTopics
          setNumber={setNumber}
          setSetting={setSetting}
          topicObj={topicObj}
          setTopicObj={setTopicObj}
        />
      ) : number === 0 ? (
        <Table setNumber={setNumber} setSetting={setSetting} />
      ) : (
        <TopicCard topic={topic[number - 1]} setNumber={setNumber} />
      )}
    </Layout>
  );
};

export default TableTopicsComponent;
