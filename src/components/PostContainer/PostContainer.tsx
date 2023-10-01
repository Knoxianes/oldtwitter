import { useState, FC } from 'react';
import { EditPost } from './EditPost/EditPost';
import { Post } from './Post/Post';

export const PostContainer: FC<{ name: string; tag: string; text: string; updatePost: Function; index: number; deletePost: Function}> = ({ name, tag, text, updatePost, index,deletePost }) => {
  const [edit, setEdit] = useState(false);
  if (edit) {
    return (
      <EditPost text={text} updatePost={updatePost} index={index} setEdit={setEdit} />
    );
  } else {
    return (
      <Post name={name} tag={tag} text={text} setEdit={setEdit} deletePost={deletePost} index={index} />
    );
  }
};
