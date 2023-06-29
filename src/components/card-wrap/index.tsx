import React from "react";
import './index.scss'
interface IProps {
  bgUrl?: string;
  bgHoverUrl?: string
}
const CardWrap: React.FC<IProps> = ({ children, bgUrl, bgHoverUrl }) => {
  return (
    <div className="root-card-wrap" >
      <div className="card-wrap" style={{
        backgroundImage: `url(${bgUrl})`
      }}>
        {children}
      </div>
      <div className="hover-bg" style={{
        backgroundImage: `url(${bgHoverUrl})`
      }}>
      </div>
    </div>

  );
};
export default CardWrap