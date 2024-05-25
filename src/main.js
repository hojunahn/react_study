import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 300vh;
  overflow: hidden;
`;

const SlideImg = styled.div`
  width: 400vw;
  height: 100vh;
  display: flex;
  transition: transform 1s ease-in-out;
`;

const SlideBox = styled.div`
  width: 100%;
  height: 100%;
`;

const Slide = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ChangeImg = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  object-fit: contain;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-image: url(img/Rectangle.png);
`;
const ClickIdol = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: absolute;
  width: 10%;
  height: 80%;
  background: blue;

  ul {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  li {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;
    height: 5%;
    background: yellow;
    margin: 20px 0;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
  }
  li:hover {
    transform: scale(1.1);
  }
`;
const LeftBox = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 40%;
  height: 100%;
  left: 10%;
`;
const Textbox = styled.div`
  position: absolute;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  display: flex;
  width: 80%;
  height: 30%;
  color: #000;
  background: #fff;
  border-radius: 10px;
  top: 10%;

  h2 {
    font-size: 18px;
    margin-bottom: 20px;
  }

  p {
    font-size: 16px;
  }
`;
const YouTubeV = styled.div`
  position: absolute;
  width: 80%;
  height: 50%;
  background: yellow;
  bottom: 5%;
`;
const RightBox = styled.div`
  position: absolute;
  z-index: 999;
  width: 50%;
  height: 80%;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.5s ease-in-out;
  transform: ${(props) =>
    props.showRightBox ? "translateX(0)" : "translateX(100%)"};

  img {
    width: 50%;
    object-fit: cover;
  }
`;

const idols = [
  { name: "아이네", image: "img/ine.png" },
  { name: "징버거", image: "img/jingber.png" },
  { name: "릴파", image: "img/lilpa.png" },
  { name: "주르르", image: "img/julele.png" },
  { name: "고세구", image: "img/gosegu.png" },
  { name: "비챤", image: "img/bechan.png" },
];
const Main = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedIdol, setSelectedIdol] = useState(null);
  const [selectedIdolImage, setSelectedIdolImage] = useState(null);
  const [showLeftBox, setShowLeftBox] = useState(false);
  const [showRightBox, setShowRightBox] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 4);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const handleIdolClick = (idolName) => {
    const selectedIdolInfo = idols.find((idol) => idol.name === idolName);
    if (selectedIdolInfo) {
      setSelectedIdol(idolName);
      setSelectedIdolImage(selectedIdolInfo.image); // 이미지 경로 업데이트 추가
      setShowLeftBox(true);
      setShowRightBox(true);
    }
  };

  return (
    <Container>
      <SlideImg style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
        {[1, 2, 3, 4].map((slideNumber) => (
          <SlideBox className={`main${slideNumber}`} key={slideNumber}>
            {/* 3번째 이미지에만 object-fit: contain;을 적용 */}
            <Slide
              src={`img/mainImg${slideNumber}.png`}
              alt=""
              style={{ objectFit: slideNumber === 3 ? "contain" : "cover" }}
            />
          </SlideBox>
        ))}
      </SlideImg>
      <ChangeImg>
        <ClickIdol>
          <ul>
            {idols.map((idol) => (
              <li key={idol.name} onClick={() => handleIdolClick(idol.name)}>
                {idol.name}
              </li>
            ))}
          </ul>
        </ClickIdol>
        <LeftBox showLeftBox={showLeftBox}>
          <Textbox>
            <h2>{selectedIdol}님의 프로필</h2>
            <p>
              {selectedIdol} 아이돌을 선택했네요! <br />
              어떤 이야기를 들려드릴까요?
            </p>
          </Textbox>
          <YouTubeV></YouTubeV>
        </LeftBox>
        <RightBox showRightBox={showRightBox}>
          {selectedIdolImage && (
            <img src={selectedIdolImage} alt={`${selectedIdol} 이미지`} />
          )}
        </RightBox>
      </ChangeImg>
    </Container>
  );
};

export default Main;
