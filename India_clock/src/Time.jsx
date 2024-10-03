import React from "react";

const DateObj = new Date();
const date = DateObj.getDate();
const month = DateObj.getMonth() + 1;
const year = DateObj.getFullYear();
const hours = DateObj.getHours();
const minutes = DateObj.getMinutes();
const seconds = DateObj.getSeconds();

function Time() {
  return <div className="Time">The current time of india is {hours}-{minutes}-{seconds} and date is {date}/{month}/{year}</div>;
}

export default Time;
