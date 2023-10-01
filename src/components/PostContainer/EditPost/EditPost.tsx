import { useState,FC, ChangeEvent } from 'react';
import './EditPost.css';

export const EditPost: FC<{ text: string; updatePost: Function; index: number; setEdit: Function; }> = ({ text, updatePost, index, setEdit }) => {
  const [disable,setDisable] = useState(false);
  const [textInput,setTextInput] = useState(text);

  const onChangeTextArea =(e:ChangeEvent<HTMLTextAreaElement>)=>{
    if(e.target.value.length <= 250){
      setDisable(false);
      setTextInput(e.target.value);
    }else{
      e.target.value = e.target.value.slice(0,-1);
      setDisable(true);
    }
   }
  const onClickSave = () => {
    console.log(index);
    updatePost(index, textInput);
    setEdit(false);
    
   }
  return (
    <div className="edit">
      <div className="textarea-container">
        <textarea defaultValue={text} rows={4}  onChange={onChangeTextArea}/>
      </div>
      <div  className="edit-close">
        <button onClick={onClickSave} disabled={disable}>Save</button>
        <button onClick={() => setEdit(false)} disabled={disable}>Cancel</button>
      </div>
    </div>
  );
};
