import React, { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import Players from "../game/Players";
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
  /* console.log(players); */
  return (
    <div>
      {players &&
        players
          .filter((x) => x.address != user.address)
          .filter((x) => x.map == map)
          .map((attributes, id) => (
            <Players attributes={attributes} key={id} />
          ))}
    </div>
  );
}

export default GamePlayers;
