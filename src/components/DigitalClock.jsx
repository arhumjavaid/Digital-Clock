// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const formatTime = () => {
    let hours = time.getHours()
    const min = time.getMinutes()
    const sec = time.getSeconds()
    const check = hours >= 12 ? "PM" : "AM"

    hours = hours % 12 || 12

    return `${addZero(hours)}:${addZero(min)}:${addZero(sec)} ${check}`
  };

  const addZero = (number)=>{
    return (number < 10 ? "0" : "") + number
  }

  return (
    <div className="w-full h-screen">
      <div className="text-white flex justify-center items-center h-screen w-full">
        <span className="text-9xl">{formatTime()}</span>
      </div>
    </div>
  );
};

export default DigitalClock;
