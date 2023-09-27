"use client";

import { styled } from "styled-components";
import { Input } from "antd";
import { useState } from "react";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 120px;
`;
const InputWrapper = styled.div`
  padding: 20px 0px;
  .input-class {
    width: 500px;
    height: 45px;
  }
`;

const InfoWrapper = styled.div`
  padding: 20px 10px;
  color: gray;
`;
const ImageWrapper = styled.div`
  position: relative;
`;
const HeroSection = () => {
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [topTextSpace, setTopTextSpace] = useState(1);
  const [bottomTextSpace, setBottomTextSpace] = useState("0px");

  const handleChangeTop = (e: any) => {
    setTopText(e.target.value);
  };
  const handleChangeBottom = (e: any) => {
    setBottomText(e.target.value);
  };

  const handleKeyDown = (event: any) => {
    if (event.key === " ") {
      console.log("Space key pressed!");
      setTopTextSpace((prev) => prev + 1);
      console.log(topTextSpace, "okk");
    }
  };

  return (
    <>
      <InfoWrapper>Become a memer .. anytime.. anywhere</InfoWrapper>
      <Wrapper>
        <InputWrapper>
          <Input
            allowClear
            className="input-class"
            placeholder="Enter your Top Text"
            value={topText}
            onChange={(e) => handleChangeTop(e)}
            onKeyDown={(event) => handleKeyDown(event)}
            autoFocus
          />
        </InputWrapper>
        <ImageWrapper>
          <span style={{ position: "absolute", top: "0", textAlign: "center" }}>
            {topText}
          </span>
          <br />
          <span
            style={{
              position: "absolute",
              bottom: "0",
              marginBottom: "-10px",
              textAlign: "center",
            }}
          >
            {bottomText}
          </span>
          <img
            src={"/images/default.jpg"}
            alt="image"
            height={300}
            width={"auto"}
          />
        </ImageWrapper>
        <InputWrapper>
          <Input
            allowClear
            className="input-class"
            placeholder="Enter your Bottom Text"
            value={bottomText}
            onChange={(e) => handleChangeBottom(e)}
          />
        </InputWrapper>
      </Wrapper>
    </>
  );
};
export { HeroSection };
