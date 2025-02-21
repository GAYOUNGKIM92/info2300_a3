import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";

const New = () => {
  const { onCreate } = useContext(DiaryDispatchContext);
  const nav = useNavigate();
  const onSubmit = ({ createdDate, emotionId, content }) => {
    onCreate(createdDate, emotionId, content);
    nav('/',{replace:true})
  };
  return (
    <div>
      <Header
        title={"New diary"}
        leftChild={
          <Button
            onClick={() => {
              nav(-1);
            }}
            text={"< go back"}
          />
        }
      />
      <Editor OnSubmit={onSubmit} />
    </div>
  );
};
export default New;
