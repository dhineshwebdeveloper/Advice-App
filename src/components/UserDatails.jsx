import { useState } from "react";

const UserDetail = () => {
  const [user, setUser] = useState({ fname: "dhinesh", lname:"kumar", age: 21 });

//   function changeUserName(e) {
//     setUser((prevState) => ({
//       ...prevState,
//       name: e.target.value,
//     }));
//   }

//   function changeUserAge(e) {
//     setUser((prevState) => ({
//       ...prevState,
//       age: e.target.value,
//     }));
//   }

function changehandler (e){
setUser({...user, [e.target.name]: e.target.value})
}

  return (
    <>
      <h3>
        {user.fname}, {user.lname} {user.age}
      </h3>
      <input
        type="text"
        value={user.fname}
        name="fname"
        onChange={changehandler}
      />
      <input
        type="text"
        value={user.lname}
        name="lname"
        onChange={changehandler}
      />
      <input
        type="number"
        value={user.age}
        name="age"
        onChange={changehandler}
      />
    </>
  );
};

export default UserDetail;
