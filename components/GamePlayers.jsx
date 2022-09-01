import React, { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import Players from "./Players";
function GamePlayers({ database, user, map }) {
  const colectionRef = collection(database, "Players");
  const [players, setPlayers] = useState();
  const data = () => {
    onSnapshot(colectionRef, (data) => {
      setPlayers(
        data.docs.map((item) => {
          return item.data();
        })
      );
    });
  };
  useEffect(() => {
    data();
  }, []);
  console.log(players);
  return (
    <div>
      {players &&
        players
          .filter((x) => x.address != user.address)
          .filter((x) => x.map == map)
          .map((attributes) => <Players attributes={attributes} />)}
    </div>
  );
}

export default GamePlayers;
