import React from "react";
import { tagArr, tableArr } from './const'
import './index.scss'
const CardCollect: React.FC = ({ }) => {
  return (
    <div className="card-collect">
      <div className="card-collect-title">
        Moonshot 2023 Summer Hackathon
      </div>
      <div className="flex mt-4">
        {
          tagArr.map(item => <div className="collect-tag-item" key={item}>{item}</div>)
        }
      </div>
      <div className="mt-16">
        {
          tableArr.map(item => (
            <div className="flex justify-between table-item" key={item.value} >
              <div className="table-item-left">{item.label}</div>
              <div className="table-item-right">{item.value}</div>
            </div>
          ))
        }
      </div>
    </div>
  );
};
export default CardCollect