import React, { useState, useEffect } from "react";
import "./App.css";
import { db, auth } from "./firebase";
import { useSpring, animated } from "react-spring";
import Layout from "./components/Layout";
import TableTopicsComponent from "./components/TableTopicsComponent";
import Auth from "./components/Auth";

function App() {
  const [authId, setAuthId] = useState(null);
  const anim = useSpring({ opacity: 1, from: { opacity: 0 } });

  const authCheck = () => {
    auth.onAuthStateChanged(function (user) {
      if (user) {
        const authId = user.uid;
        setAuthId(authId);
      } else {
        setAuthId(null);
      }
    });
  };

  const logout = () => {
    auth.signOut()
      .then(function () {
        setAuthId(null);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    authCheck();
  }, []);

  return (
    <animated.div style={anim}>
      <Layout logout={logout} authId={authId}>
        {authId ? (
          <TableTopicsComponent db={db} authId={authId} />
        ) : (
          <Auth auth={auth} />
        )}
      </Layout>
    </animated.div>
  );
}

export default App;
