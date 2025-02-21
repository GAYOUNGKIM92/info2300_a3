import "./Editor.css";
import EmotionItem from "./EmotionItem";
import Button from "../components/Button";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { emotionList } from "../util/constants";
import { getLocalDate } from "../util/get-local-date";

const Editor = ({ initData, OnSubmit }) => {
  const nav = useNavigate();
  const [input, setInput] = useState({
    createdDate: new Date(),
    emotionId: 3,
    content: "",
  });

  useEffect(() => {
    if (initData) {
      setInput({ ...initData });
    }
  }, [initData]);

  const onChangeInput = (e) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]:
        e.target.name === "createdDate"
          ? new Date(e.target.value + "T00:00:00") // 🔥 maintain local time
          : e.target.value,
    }));
  };

  const onClickSubmitButton = () => {
    OnSubmit(input);
  };
  return (
    <div className="Editor">
      <section className="date_section">
        <h4>Today&apos;s Date</h4>
        <input name="createdDate" type="date" value={getLocalDate(input.createdDate)} onChange={onChangeInput} />
      </section>
      <section className="emotion_section">
        <h4>Today&apos;s Emotion</h4>
        <div className="emotion_list_wrapper">
          {emotionList.map((item) => (
            <EmotionItem
              onClick={() => {
                onChangeInput({
                  target: {
                    name: "emotionId",
                    value: item.emotionId,
                  },
                });
              }}
              key={item.emotionId}
              {...item}
              isSelected={item.emotionId === input.emotionId}
            />
          ))}
        </div>
      </section>
      <section className="content_section">
        <h4>Today&apos;s Diary</h4>
        <textarea name="content" onChange={onChangeInput} placeholder="How's your day today?" value={input.content} />
      </section>
      <section className="button_section">
        <Button
          text={"Cancel"}
          onClick={() => {
            nav(-1);
          }}
        />
        <Button text={"Done"} type={"POSITIVE"} onClick={onClickSubmitButton} />
      </section>
    </div>
  );
};

export default Editor;
