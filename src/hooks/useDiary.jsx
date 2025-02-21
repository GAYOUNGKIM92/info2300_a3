import { useContext, useState, useEffect } from "react";
import { DiaryStateContext } from "../App";
import { useNavigate } from "react-router-dom";
const useDiary = (id) => {

  const data = useContext(DiaryStateContext);
  const nav = useNavigate();
  const [curDiaryItem, setCurDiaryItem] = useState();
  useEffect(() => {
    const currentDiaryItem = data.find((item) => String(item.id) === String(id));
    if (!currentDiaryItem) {
      window.alert("This diary entry is not found");
      nav("/", { replace: true });
    }
    setCurDiaryItem(currentDiaryItem);
  }, [id]);

  return curDiaryItem;
}
export default useDiary;