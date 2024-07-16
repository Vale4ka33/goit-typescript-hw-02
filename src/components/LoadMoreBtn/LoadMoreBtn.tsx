import React from "react";
import css from "./LoadMoreBtn.module.css";
import { TLoadMoreHandler } from "../App/App.types";

interface LoadMoreBtnProps {
  onLoadMore: TLoadMoreHandler;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onLoadMore }) => {
  return (
    <div className={css.btnContainer}>
      <button className={css.btn} onClick={onLoadMore}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
