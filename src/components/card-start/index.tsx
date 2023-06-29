import React from "react";
import TimeIcon from "&/icon/time";
import './index.scss'
import BookIcon from "&/icon/book";
import FightIcon from "&/icon/fight";
interface Iprops {
  title?: string;
  desc?: string;
  isShowClick?: boolean;
  tabColor?: string
}
const CardStart: React.FC<Iprops> = ({ title = 'Introduction to programming', desc = 'This course covers the most basic concepts in programming using Solidity as an example.', isShowClick = true, tabColor='linear-gradient(180deg, #38C1A5 0%, #0891D5 100%)' }) => {
  return (
    <div className="card-start">
      <div className="card-top" style={{background: tabColor}}></div>
      <div className="card-title">{title}</div>
      <div className="begin-btn">Beginner</div>
      <div className="desc">{desc}</div>
      <div className="bottom-list flex mt-11">
        <div className="flex items-center mr-5">
          <div className="m-1.5"><TimeIcon /></div>
          <div>36 Hour</div>
        </div>
        <div className="flex items-center mr-5">
          <div className="m-1.5"><BookIcon /></div>
          <div>5 Course</div>
        </div>
        {
          isShowClick && <div className="click-btn">
            <div><FightIcon /> </div>
            <div>45% COMPLETED</div>
          </div>
        }
      </div>
    </div>
  );
};
export default CardStart