import React, { useState, useEffect } from "react";

import Table from "./Table";
import TopicCard from "./TopicCard";
import SetTopics from "./SetTopics";
import Rules from "./Rules";
import ErrorPage from "./ErrorPage";

const TableTopicsComponent = ({ db, authId }) => {
  const [page, setPage] = useState("main");
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
    topicObj.topic10,
  ];

  const getTopics = () => {
    db.collection("topics")
      .doc(`${authId}`)
      .get()
      .then(function (doc) {
        if (doc.exists) {
          setTopicObj(doc.data());
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
          setPage("set");
        }
      })
      .catch(function (error) {
        console.log("Error getting document:", error);
        setPage(500);
      });
  };

  useEffect(() => {
    getTopics();
  }, []);

  return page === "set" ? (
    <SetTopics
      setNumber={setNumber}
      setPage={setPage}
      topicObj={topicObj}
      setTopicObj={setTopicObj}
      authId={authId}
      db={db}
    />
  ) : page === "main" ? (
    <Table setNumber={setNumber} setPage={setPage} />
  ) : page === "view" ? (
    <TopicCard
      topic={topic[number - 1]}
      setNumber={setNumber}
      setPage={setPage}
    />
  ) : page === "rules" ? (
    <Rules setPage={setPage} />
  ) : (
    <ErrorPage page={page} />
  );
};

export default TableTopicsComponent;
