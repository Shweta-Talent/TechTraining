import React from "react";
interface IHeader {
    userName:string
}
function Header(props:IHeader) {
    console.log(props)
    return <div>Welcome, {props.userName}!</div>;
}

export default Header