/**
 * useApp
 */

import React from "react";

import { useState } from "react";

/** constants */
import { INIT_TODO_LIST, INIT_TODO_ID } from "../constants/data.js";

/**
 * useApp
 * @returnsA
 */

export const useApp = () => {
  /*state*/
  /*todoList*/
  const [todoList, setTodoList] = useState(INIT_TODO_LIST);
  // add input value
  const [addInputValue, setAddInputValue] = useState("");
  /* 採番用ID*/
  const [uniqueId, setUniqueId] = useState(INIT_TODO_ID);
  /**
   * add input value更新処理
   * @param {*} event
   */
  const onChangeAddInputValue = (event) => {
    setAddInputValue(event.target.value);
  };

  /**
   * タスク追加処理
   * @param {*} event
   */
  const handleAddTodo = (event) => {
    if (event.key === "Enter" && addInputValue !== "") {
      const nextUniqueId = uniqueId + 1;
      // todoの追加処理
      const newTodoList = [
        ...todoList,
        {
          id: nextUniqueId,
          title: addInputValue,
        },
      ];
      console.log(newTodoList);
      setTodoList(newTodoList);
      // IDをインクリメント
      setUniqueId(nextUniqueId);
      // addInputValueをリセット
      setAddInputValue("");
    }
  };

  /**
   * タスク削除処理
   * @param {*} targetId
   */
  const handleDeleteTodo = (targetId, targetTitle) => {
    if (window.confirm(`「${targetTitle}のtodoを削除しますか？」`)) {
      const newTodoList = todoList.filter((todo) => {
        return todo.id !== targetId;
      });

      setTodoList(newTodoList);
    }
  };

  // todoListはデータ、setTodoListは更新するための関数
  // useStateの引数にinitTodoを入れることで、todoListの初期値として扱える

  return [
    {
      todoList,
      addInputValue,
    },
    {
      onChangeAddInputValue,
      handleAddTodo,
      handleDeleteTodo,
    },
  ];
};
