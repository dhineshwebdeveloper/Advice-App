import { useState } from "react";
const Registerfrom = () => {
  const [user, setUser] = useState({
    name:"dhinesh",
    age:21,
    gender:"Male",
    maritalstatus:false,
    country:"India",
    Bio:"write something about yourself"
  })
  function handler (e){
    const name = e.target.name;
    const value =e.target.type === "checkbox" ?
     e.target.checked:e.target.value;
setUser({...user, [name] : value})
  }
    return(
        <>
        <table>
            <tbody>
                <tr>
                    <td>name :</td>
                    <td>{user.name}</td>
                </tr>
                <tr>
                    <td>age :</td>
                    <td>{user.age}</td>
                </tr>
                <tr>
                    <td>gender :</td>
                    <td>{user.gender}</td>
                </tr>
                <tr>
                    <td>Marital Status :</td>
                    <td>{user.maritalstatus ? "IsMarried" : "not Married"}</td>
                </tr>
                <tr>
                    <td>country :</td>
                    <td>{user.country}</td>
                </tr>
                <tr>
                    <td>Bio :</td>
                    <td>{user.Bio }</td>
                </tr>
            </tbody>
        </table>

        <form action="">
            <input type="text" placeholder=" Full Name" name="name"
            value={user.name} onChange={handler}/>
            <input type="number" placeholder="Enter Your Age" name="age"
            value={user.age} onChange={handler}/>
            <div className="genter">
            <label htmlFor="male">
                <input type="radio" name="gender" id="Male"
                checked={user.gender == "Male"} value="Male" onChange={handler}/>Male
            </label>
            <label htmlFor="Female">
                <input type="radio" name="gender" id="Female" 
                checked={user.gender == "Female"} value="Female" onChange={handler}/>FeMale
            </label>
            </div>
            <label htmlFor="ismarried">
                <input type="checkbox" name="maritalstatus"
                checked={user.maritalstatus =="IsMarried"} onChange={handler}/>
                Marital Status
            </label>
            <div className="country">
                <select name="country" onChange={handler} value={user.country}>
                    <option value="india">india</option>
                    <option value="uk">uk</option>
                    <option value="londan">londan</option>
                </select >
            </div>
        </form>

        </>
    )
}
export default Registerfrom;