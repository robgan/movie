import { initializeApp } from "firebase/app";
import { child, get, getDatabase, push, ref, update } from "firebase/database";

// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyAY67anURBxQx0YOJBgbg2ZgvXncyLk8co",
  authDomain: "movie-d9fd0.firebaseapp.com",
  projectId: "movie-d9fd0",
  storageBucket: "movie-d9fd0.appspot.com",
  messagingSenderId: "11040667164",
  appId: "1:11040667164:web:4b148c80d9b45e300651d9",
  measurementId: "G-S2P1XC5QYN",
  databaseURL: "https://movie-d9fd0-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

function writeGroup(groupName, location) {
  const db = getDatabase();

  update(ref(db, "groups/"), {
    [groupName]: true,
  });
  update(ref(db, "suggestion/"), {
    [groupName]: true,
  });
  console.log("Group Name: " + groupName);
}

function writeMember(groupName, name, location) {
  const db = getDatabase();

  get(child(ref(db, "groups/"), groupName)).then((snapshot) => {
    if (snapshot.exists()) {
      const member = {
        [name]: name,
      };

      update(ref(db, "groups/" + groupName), member).then(() => {
        window.location.href = location;
      });

      const user = {
        [groupName]: groupName,
      };
      update(ref(db, "users/" + name), user);
      console.log(snapshot.val());
    } else {
      alert("No such group exists");
    }
  });
}

function writeSuggestion(
  groupName,
  name,
  year,
  genre,
  runtime,
  summary,
  yes,
  no,
  location
) {
  const db = getDatabase();

  const suggestion = {
    [name]: {
      name: name,
      year: year,
      genre: genre,
      runtime: runtime,
      summary: summary,
      yes: yes,
      no: no,
    },
  };

  get(child(ref(db, "suggestion/"), groupName)).then((snapshot) => {
    if (snapshot.exists()) {
      update(ref(db, "suggestion/" + groupName), suggestion).then(() => {
        window.location.href = location;
      });
      console.log(snapshot.val());
    } else {
      alert("No such group exists");
    }
  });
}

function updateVote(groupName, movieName, vote) {
  const db = getDatabase();
  const updates = {};
  let movie = {};
  get(child(ref(db, "suggestion/" + groupName), movieName)).then((snapshot) => {
    movie = snapshot.val();
    if (vote == 1) {
      console.log("yes");
      updates["/yes"] = movie.yes + 1;
    } else {
      console.log("no");
      updates["/no"] = movie.no + 1;
    }
    update(ref(db, "suggestion/" + groupName + "/" + movieName), updates).catch(
      (error) => {
        alert("Unable to cast vote");
      }
    );
  });
}

async function readUserGroups(name) {
  const db = getDatabase();
  let q = [];
  get(child(ref(db, "users/"), name)).then((snapshot) => {
    if (snapshot.exists()) {
      let s = snapshot.val();
      console.log(s);
      for (var i in s) {
        console.log(s[i]);
        q.push(s[i]);
      }
    }
  });
  return q;
}

async function readSuggestions(groupName) {
  const db = getDatabase();
  let q = [];

  await get(child(ref(db, "suggestion/"), groupName)).then((snapshot) => {
    if (snapshot.exists()) {
      let s = snapshot.val();

      for (var i in s) {
        q.push(s[i]);
      }
    }
  });
  return q;
}

export {
  readUserGroups,
  readSuggestions,
  updateVote,
  writeGroup,
  writeMember,
  writeSuggestion,
};
