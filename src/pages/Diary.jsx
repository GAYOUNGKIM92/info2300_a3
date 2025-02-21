import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Viewer from "../components/Viewer";
import { getLocalDate } from "../util/get-local-date";
import useDiary from "../hooks/useDiary";
const Diary = () => {
  const params = useParams();
  const nav = useNavigate();
  const curDiaryItem = useDiary(params.id);

  if(!curDiaryItem){
    return <div>Loading data...</div>
  }

  const{createdDate, emotionId, content} = curDiaryItem;
  return (
    <div>
      <Header
        title={`${getLocalDate(createdDate)} diary`}
        leftChild={
          <Button
            onClick={() => {
              nav(-1);
            }}
            text={"< go back"}
          />
        }
        rightChild={
          <Button
            text={"Update"}
            onClick={() => {
              nav(`/edit/${params.id}`);
            }}
          />
        }
      />
      <Viewer emotionId={emotionId} content={content}/>
    </div>
  );
};
export default Diary;
