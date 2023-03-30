import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Dropdown, InputText } from "../../component";
import { useLoadingContext } from "../../context";
import {
  GetQuestions,
  GetTotalQuestions,
  useCategoryList,
} from "../../services/category";
import { setWithExpiry, ToastMsg } from "../../utils";
import { codes, difficultyData, typeData } from "./constant";

export const Category = () => {
  const navigate = useNavigate();
  const { isFetching, data } = useCategoryList();
  const { setLoading } = useLoadingContext();

  const [categoryData, setCategoryData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState({
    name: "select",
    id: undefined,
  });
  const [selectedDifficulty, setSelectedDifficulty] = useState(
    difficultyData[0]
  );
  const [selectedType, setSelectedType] = useState(typeData[0]);
  const [maxQuestions, setMaxQuestions] = useState("10");
  const [maxQuestionsErr, setMaxQuestionsErr] = useState<boolean | string>(
    false
  );

  useEffect(() => {
    if (!isFetching) {
      setCategoryData(data.trivia_categories);
    }
  }, [isFetching]);

  const OnSelectCategory = async (e) => {
    setSelectedCategory(e);
    const res = await GetTotalQuestions(e.id);
    console.log("res", res);

    if (res.category_question_count) {
      console.log("RES", res.category_question_count.total_question_count);
    }
  };

  const onClickCreate = async () => {
    setLoading(true);
    const body = {
      category: selectedCategory.id,
      difficulty: selectedDifficulty.value,
      type: selectedType.value,
      amount: maxQuestions.trim(),
    };
    console.log(body);
    const res = await GetQuestions(body);
    if (res.response_code === 0) {
      console.log("RES", res);
      setWithExpiry("quiz", res.results);
      setLoading(false);
      navigate("/quiz");
    } else {
      ToastMsg(
        codes.find((i) => i.Code === res.response_code).message,
        "error"
      );
      setLoading(false);
    }
  };

  return (
    <div className="flex w-full min-w-screen h-full max-w-2xl flex-col">
      <label className="text-title font-bold text-lg text-center mb-10">
        Select from options below to generate questionnaire
      </label>
      <Dropdown
        disabled={categoryData.length === 0}
        items={categoryData}
        onChange={(e) => OnSelectCategory(e)}
        value={selectedCategory}
        showValue={selectedCategory.name}
        title={"Select Category:"}
      />
      <Dropdown
        disabled={difficultyData.length === 0}
        items={difficultyData}
        onChange={(e) => setSelectedDifficulty(e)}
        value={selectedDifficulty}
        showValue={selectedDifficulty.name}
        title={"Select Difficulty:"}
        containerClassName={"mt-5"}
      />
      <InputText
        disabled={!selectedCategory?.id}
        isError={maxQuestionsErr}
        title={"Number of Questions:"}
        type={"number"}
        value={maxQuestions}
        onChange={(e) => {
          if (Number(e.target.value) >= 10) {
            setMaxQuestionsErr(false);
          } else {
            setMaxQuestionsErr("Number must be greater then 10");
          }
          setMaxQuestions(e.target.value);
        }}
        containerClassName={"mt-5"}
      />
      <Dropdown
        disabled={typeData.length === 0}
        items={typeData}
        onChange={(e) => setSelectedType(e)}
        value={selectedType}
        showValue={selectedType.name}
        title={"Select Difficulty:"}
        containerClassName={"mt-5"}
      />
      <Button
        disabled={!selectedCategory?.id || typeof maxQuestionsErr !== "boolean"}
        title={"Generate Quiz"}
        onClick={onClickCreate}
        extraClass={"mt-10"}
      />
    </div>
  );
};
