import React from "react";
import hello from "../hello/hello.png";
import name from "../name/name.png";
import '../App.css';

function Profile() {
  return(
    <React.Fragment>
        <div className="profile pl-10 md:pl-20">
            <img className="pb-6 w-20 md:w-auto" src={hello} alt="" />
            <img className="w-48 md:w-auto" src={name} alt="Name" />
        </div>
    </React.Fragment>
  );
}

export default Profile;
