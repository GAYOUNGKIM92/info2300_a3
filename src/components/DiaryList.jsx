import Button from "./Button";
import DiaryItem from "./DairyItem";
import { useNavigate } from "react-router-dom";
import "./DiaryList.css";
import { useState } from "react";
const DiaryList = ({ diaries }) => {
  const nav = useNavigate();
  const [sortType, setSortType] = useState("latest");
  const onChangeSortType = (e) => {
    setSortType(e.target.value);
  };
  const getSortedData = () => {
    return diaries.toSorted((a, b) => {
      if (sortType === "oldest") {
        return Number(a.createdDate.getTime()) - Number(b.createdDate.getTime());
      } else {
        return Number(b.createdDate.getTime()) - Number(a.createdDate.getTime());
      }
    });
  };

  const sortedData = getSortedData();
  return (
    <div className="DiaryList">
      <div className="menu_bar">
        <select onChange={onChangeSortType}>
          <option value="latest">Latest</option>
          <option value="oldest">Oldest</option>
        </select>
        <Button
          text={"New Diary"}
          type={"POSITIVE"}
          onClick={() => {
            nav("/new");
          }}
        />
      </div>
      <div className="list_wrapper">
        {sortedData.map((diary) => {
          return <DiaryItem key={diary.id} {...diary} />;
        })}
      </div>
    </div>
  );
};

export default DiaryList;
