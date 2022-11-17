import {
  getDatabase,
  onValue,
  push,
  ref,
  remove,
  set,
  update,
} from "firebase/database";
import { useEffect, useState } from "react";
import firebase from "./firebase";
import { ToastifyError, ToastifyInfo, ToastifySucces } from "./toastify";

//! ADD USER

export const AddUser = (info) => {
  const db = getDatabase(firebase);
  const newUserRef = push(ref(db, "user/"));
  set(newUserRef, {
    username: info.username,
    phoneNumber: info.phoneNumber,
    gender: info.gender,
  });
  ToastifySucces("Context Succesfully Added");
};

//! READ INFO

export const useFetch = () => {
  const [isLoading, setIsLoading] = useState();
  const [contactList, setContactList] = useState();

  useEffect(() => {
    const db = getDatabase(firebase);
    const userRef = ref(db, "user/");
    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      const userArray = [];
      for (let id in data) {
        userArray.push({ id, ...data[id] });
      }
      setContactList(userArray);
      setIsLoading(false);
    });
  }, []);
  return { isLoading, contactList };
};

//! DELETE INFO

export const DeleteUser = (id) => {
  const db = getDatabase(firebase);
  remove(ref(db, "user/" + id));
  ToastifyError("Context Deleted");
};

//! EDIT INFO

export const UpdateUser = (info) => {
  const db = getDatabase(firebase);
  const newInfo = {};
  newInfo["user/" + info.id] = info;
  ToastifyInfo("Context Edited");
  return update(ref(db), newInfo);
};
