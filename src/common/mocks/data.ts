export interface iPost {
    "id": string,
    "date": string,
    "title": string,
    "subtitle": string,
    "mainImg": string,
}

export const mockData : iPost[] = [
    {
        "id": "react-reconciliation",
        "date": "Sat Dec 03 2022 18:41:43 GMT+0900",
        "title": "리액트의 재조정",
        "subtitle": "ReactJS Reconciliation",
        "mainImg" : "/img/react-reconciliation.png"
    },
    {
        "id": "utility-types",
        "date": "Sat Dec 03 2022 18:41:43 GMT+0900",
        "title": "타입스크립트의 Utility Types",
        "subtitle": "타입스크립트에서 자주 사용되는 유틸리티 타입",
        "mainImg": "/img/utility-types.jpg"
    },
    {
        "id": "core-js-data-type",
        "date": "Sat Dec 03 2022 18:41:43 GMT+0900",
        "title": "코어 자바스크립트 01. 데이터 타입",
        "subtitle": "자바스크립트의 데이터 타입",
        "mainImg" : "/img/core-js-data-type.jpeg"
    }
]

