import {AreaHTMLAttributes, ChangeEvent, ChangeEventHandler, useState,useRef} from 'react';
import './App.css';
import { PostContainer } from './components/PostContainer/PostContainer';

export default function App() {
  const [posts,setPosts] = useState([{name:"John",tag: "jhonwhick66",text:"dddddddddddddd ssssssssss saaaaaa ddddddd 33333333 fffff"},{name:"Jane",tag:"janepain55",text:"Hi"},{name:"John",tag:"jhonwhick66",text:"How are you?"}]);
  const [inputText,setInputText] = useState("");
  const [disable,setDisable] = useState(false);
  
  const updatePost = (index:number,newText:string) => {
    const tmp = [...posts];
    tmp[index].text = newText;
    console.log(tmp[index].text);
    setPosts(tmp);
  }
  const deletePost = (index:number) => {
    const tmp = [...posts];
    tmp.splice(index,1);
    setPosts(tmp);
  }
  const onClickPost =()=>{
    if(inputText !== ""){
      const tmp = [...posts,{name:"Anonymus", tag:"anonymus666", text: inputText}];
      setInputText("");
      setPosts(tmp);
      
    }
  }
  const onChangeInput=(e:ChangeEvent<HTMLTextAreaElement>)=>{
      if(e.target.value.length <= 250){
        setDisable(false);
        setInputText(e.target.value);
      }else{
        e.target.value = e.target.value.slice(0,-1);
        setDisable(true);
      }
  }
  return(
    <div className="App">
      <div className="add-post-container">
        <div>
          <textarea placeholder='Tweet something...' rows={5} onChange={onChangeInput} value={inputText}/>
          <button disabled={disable} onClick={onClickPost}>Post</button>
        </div>
        <p>{250-inputText.length}</p>
      </div>
      <div className="posts-container">
        {posts.map((post,index) => <PostContainer key={index} index={index} name={post.name} tag={post.tag} text={post.text} updatePost={updatePost} deletePost={deletePost} />)}
      </div>
    </div>
  )
}


