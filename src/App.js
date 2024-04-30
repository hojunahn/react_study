import "./App.css";
// JSX란? : javaScript에 XML 추가 확장한 문법
// html 태그 사용 시 반드시 닫힘 태그가 존재해야 함
// 컴포넌트가 반환 될때 태그는 한개 이어야 함
// 자바스크립트 코드를 중괄호를 사용해 데이터 바인딩 할 수 있음
// 조건부 연산자 : {}내에서 조건부 연산자 사용 가능
// 조건부 렌더링 : && 연산자의 특징을 활용해서 조건에 따라 화면 렌더링
// 인라인 스타일링 :
function App() {
  const name = "리액트";
  const styleC = {
    backgroundColor: "#222",
    color: "royalblue",
    fontSize: "2em",
  };
  return <p style={styleC}>{name === "리액트" && <h1>리액트 입니다.</h1>}</p>;
}

export default App;
