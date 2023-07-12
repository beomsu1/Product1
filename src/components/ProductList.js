import { useEffect, useState } from "react";
import { getList } from "../api/productAPI";

// PageResponseDTO
const initState = {
    dtoList: [],
    end: 0,
    start: 0,
    next: false,
    prev: false,
    pageNums: [], // 배열로 해야 반복문 처리 편리  
    page: 0,
    size: 0,
    requestDTO: null
}

const ProductList = () => {

    const [listdata, setListData] = useState(initState)

    useEffect(() => {

        getList().then(data => {
            console.log(data)
            setListData(data)
        })

    }, [])

    return (
        <div>
            <ul>
                {listdata.dtoList.map(dto =>
                    <li key={dto.pno}>
                        {dto.pname} - {dto.price}
                        <div>
                            <img src={`http://localhost/s_${dto.fname}`} />
                        </div>
                    </li>)}
            </ul>
        </div>
    );
}

export default ProductList;