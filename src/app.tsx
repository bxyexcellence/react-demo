import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom/client";
import CardWrap from "./components/card-wrap";
import CardStart from "./components/card-start";
import CardCollect from "./components/card-collect";

import "tailwindcss/tailwind.css";
import "./base.scss";

import { BG_MAP, BG_HOVER_MAP } from './const'
import RightArrowIcon from "./icon/right-arrow";

const App: React.FC = ({ }) => {
  const [isLeft, setIsLeft] = useState(true)
  const wrapRef = useRef<HTMLDivElement>(null)
  const handleArrowClick = () => {
    setIsLeft(!isLeft)
  }
  const handleScroll = (e:React.UIEvent<HTMLElement>) => {
    //滚动到最右边，右箭头就不用了，滚动到最左边左箭头不要
    if(e.currentTarget.scrollLeft + e.currentTarget.clientWidth >= e.currentTarget.scrollWidth){
      setIsLeft(false)
    }else if(e.currentTarget.scrollLeft === 0){
      setIsLeft(true)
    }
  }
  useEffect(() => {
    //dom都找不到，直接返回
    if (!wrapRef.current) return
    //判断点了左箭头还是右箭头
    if (isLeft) {
      wrapRef.current.scrollLeft = 0
    } else {
      wrapRef.current.scrollLeft = wrapRef.current.scrollWidth - wrapRef.current.clientWidth
    }
  }, [isLeft])
  return (
    <div className="root-wrap">
      <div className="flex base-wrap" ref={wrapRef} onScroll={handleScroll}>
        <CardWrap bgUrl={BG_MAP.bg1} bgHoverUrl={BG_HOVER_MAP.bg1} >
          <CardStart />
        </CardWrap>
        <CardWrap bgUrl={BG_MAP.bg2} bgHoverUrl={BG_HOVER_MAP.bg2} >
          <CardCollect />
        </CardWrap>
        <CardWrap bgUrl={BG_MAP.bg3}  bgHoverUrl={BG_HOVER_MAP.bg3} >
          <CardStart
            isShowClick={false}
            tabColor="linear-gradient(180deg, #D9E313 0%, #3CBC34 100%)"
            title="Web 3.0 Programming Basics"
            desc="Basic concepts in programming of Solidity. Topics include: variables, functions, flow control, error handling, data structure." />
        </CardWrap>
        <CardWrap bgUrl={BG_MAP.bg4}  bgHoverUrl={BG_HOVER_MAP.bg4} />
      </div>
      {
        isLeft ? <div className="right-arrow" onClick={handleArrowClick}>
          <RightArrowIcon />
        </div> : <div className="left-arrow" onClick={handleArrowClick}>
          <RightArrowIcon />
        </div>
      }
    </div>
  );
};
const rootElement = document.querySelector("#app");
const root = ReactDOM.createRoot(rootElement!);
root.render(<App />);
