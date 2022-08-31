import { getSession, signOut } from "next-auth/react";
import { database } from "../fireabse";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  setDoc,
  query,
  onSnapshot,
  where,
  getDoc,
} from "firebase/firestore";
import { useEffect } from "react";

function Game({ user }) {
  //ADD DATA TO DB

  //READ DATA FROM DB
  const colectionRef = collection(database, "Players");
  const data = () => {
    onSnapshot(colectionRef, (data) => {
      console.log(
        data.docs.map((item) => {
          return item.data();
        })
      );
    });
  };
  useEffect(() => {
    data();
  }, []);

  //chek is exist
  async function chek() {
    const mach = doc(database, "Players", user.address);
    const docSnap = await getDoc(mach);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      setDoc(mach, {
        address: user.address,
        emoji: "🧠",
        message: "",
        positionX: 336,
        positionY: 428,
        x: "a4",
        imageX: 32,
        imageY: 64,
        playerName: "AlexRG",
        map: "main",
      });
    }
  }
  chek();

  //Update DATA FROM DB
  function updateData() {
    const docToUpdate = doc(database, "Players", 12);
    updateDoc(docToUpdate, { address: "123" });
  }

  return (
    <div className="p-4 space-y-2">
      {/*  {allPlayer?.map(({ id, address }) => (
        <div key={id}>{address}</div>
      ))} */}
      <h4>User session:</h4>
      <pre>{user.address}</pre>
      <button
        className="bg-red-200 px-2 rounded-lg"
        onClick={() => signOut({ redirect: "/signin" })}
      >
        Out
      </button>
      <br />
      <button
        className="bg-sky-200 px-2 rounded-lg"
        onClick={() => handleSubmit()}
      >
        addData
      </button>
      <br />
      <button
        className="bg-green-200 px-2 rounded-lg"
        onClick={() => getData()}
      >
        getData
      </button>
      <br />
      <button
        className="bg-yellow-200 px-2 rounded-lg"
        onClick={() => updateData()}
      >
        updateData
      </button>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  // redirect if not authenticated
  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { user: session.user },
  };
}

export default Game;
