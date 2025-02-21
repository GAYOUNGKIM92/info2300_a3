import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useContext, useEffect, useState } from "react";
import { DiaryDispatchContext, DiaryStateContext } from "../App";
import useDiary from "../hooks/useDiary";
const Edit = () => {
  const { onUpdate, onDelete } = useContext(DiaryDispatchContext);
  const params = useParams();
  const nav = useNavigate();
  const curDiaryItem = useDiary(params.id);

  const onSubmit = (input) => {
    console.log(params.id);
    onUpdate(params.id, input.createdDate, input.emotionId, input.content);
    nav("/", { replace: true });
  };

  const onClickDelete = () => {
    if (window.confirm("This action cannot be undone. Are you sure you want to delete this diary entry?")) {
      onDelete(params.id);
      nav("/", { replace: true });
    }
  };

  return (
    <div>
      <Header
        title={"Update Diary"}
        leftChild={
          <Button
            onClick={() => {
              nav(-1);
            }}
            text={"< go back"}
          />
        }
        rightChild={<Button text={"Delete"} type={"NEGATIVE"} onClick={onClickDelete} />}
      />
      <Editor OnSubmit={onSubmit} initData={curDiaryItem} />
    </div>
  );
};
export default Edit;
