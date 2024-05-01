import { useState } from "react";
const Say = () => {
  const [message, setMessage] = useState(""); // 상태 관리
  const onClickEnter = () => setMessage("안녕하세요.");
  const onClickeave = () => setMessage("안녕히 가세요.");
  const [val, setColor] = useState("black"); // 상태 관리

  return (
    <>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickeave}>퇴장</button>
      <h1 style={{ color: val }}>{message}</h1>
    </>
  );
};
