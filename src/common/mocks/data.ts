import {string} from "prop-types";

export interface iPost {
    "date": string,
    "title": string,
    "contents": string
}

export const mockData : any = {
    "1": {
        "date": "2022-12-03 09:00",
        "title": "Chapter01. 리팩터링 : 첫 번째 예시",
        "contents": `
# **Chapter01. 리팩터링 : 첫 번째 예시**
# 요약

### 리팩터링이 필요한 이유`
    },
    "2": {
        "date": "Sat Dec 03 2022 18:41:43 GMT+0900",
        "title": "제목 2",
        "contents": "",
    }
}