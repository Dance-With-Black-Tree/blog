import { useState, useEffect } from "react"
import {mockData} from "@mocks/data"

interface ISearchBarProps {
  onChange: React.ChangeEventHandler<HTMLInputElement>
  searchWord: string
}

export default function SearchBar({onChange, searchWord}: ISearchBarProps) {




    return (
        <form>
            <input type="text" value={searchWord} onChange={onChange}></input>
            <button>검색</button>
        </form>
    )
}

// export function getServerSideProps() {
//     const dataTitleList = Object.keys(mockData).map()

//     return {
//         props: {
        
//         }
//     }
// }
