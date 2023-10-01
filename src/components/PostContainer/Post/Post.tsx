import { useState, FC, useEffect } from 'react';
import { CgProfile } from 'react-icons/cg';
import { AiOutlineEdit, AiFillDelete, AiOutlineHeart, AiOutlineRetweet } from 'react-icons/ai';
import { BiComment } from 'react-icons/bi';
import './Post.css';

export const Post: FC<{ name: string; tag: string; text: string; setEdit: Function; deletePost: Function;index:number}> = ({ name, tag, text, setEdit,deletePost,index}) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  useEffect(() => {
    const date_tmp = new Date();
    setTime(date_tmp.getHours() + ":" + date_tmp.getMinutes());
    setDate(date_tmp.getDate() + "." + (date_tmp.getMonth() + 1) + "." + date_tmp.getFullYear());
  }, []);
  const onClickEdit = () => {
    setEdit(true);
  };
  const onClickDelete = () => {
    deletePost(index);
  };
  return (
    <div className="post-card">
      <div className="post-header">
        <CgProfile size={35} />
        <p>{name}</p>
        <p id="name-tag">{"@"+tag}</p>
      </div>
      <div className="post-body">
        <p>{text}</p>
      </div>
      <div className="post-footer">
        <div className="edit-delete">
          <AiOutlineEdit onClick={onClickEdit} id="edit"/>
          <AiFillDelete  onClick={onClickDelete} id="delete"/>
        </div>
        <div className="comment-like-retweet">
          <BiComment />
          <AiOutlineHeart id="heart"/>
          <AiOutlineRetweet />
        </div>
        <div className="time-date">
          <p>{time} {date}</p>
        </div>
      </div>
    </div>
  );
};
