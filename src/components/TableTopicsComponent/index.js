import React, { useState, useEffect } from "react";

import Table from "./Table";
import TopicCard from "./TopicCard";
import SetTopics from "./SetTopics";
import Layout from "../Layout";

const TableTopicsComponent = ({ db }) => {
  const [setting, setSetting] = useState(false);
  const [number, setNumber] = useState(0);
  const [topicObj, setTopicObj] = useState({});

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
          db={db}
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
