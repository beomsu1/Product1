import { useRef, useState } from "react";
import { postProduct } from "../api/productAPI";

// 껍데기 생성
const initState = {
    title : '',
    content : '',
    writer : '',
    images : []
}



const ProductInput = () => {

    // 참조값 물기
    const fileRef = useRef()
    
    // 오류 안뜨게 끔 설정
    const [board , setBoard] = useState({...initState})

    // change 함수 생성
    const handleChange = (e) => {
        board[e.target.name] = e.target.value
        setBoard({...board})
    }

    // save 함수 생성
    const handleClickSave = (e) => {
        
        const formData = new FormData();

        // 하나씩 담아줘여함
        formData.append("title", board.title)
        formData.append("content", board.content)
        formData.append("writer", board.writer)

        console.dir(fileRef.current)

        const arr = fileRef.current.files
        
        for(let file of arr) {
            formData.append("images", file)
        }

        postProduct(formData)

    }

    // clear 함수 생성
    const handleClickClear = (e) => {
        fileRef.current.value=''
    }

    return ( 
        <div>
            <h1>Product Input</h1>
            <div>
                <input type="text" name="title" value={board.title} onChange={handleChange}></input>
            </div>
            <div>
                <input type="text" name="content" value={board.content} onChange={handleChange}></input>
            </div>
            <div>
                <input type="text" name="writer" value={board.writer} onChange={handleChange}></input>
            </div>
            <div>
                <input type="file" ref={fileRef} multiple name="images" onChange={handleChange}></input>
            </div>
            <div>
                <button onClick={handleClickSave}>Save</button>
                <button onClick={handleClickClear}>CLEARFILES</button>
            </div>
        </div>
     );
}
 
export default ProductInput;