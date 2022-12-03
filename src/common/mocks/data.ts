import {string} from "prop-types";

export interface iPost {
    "id": string,
    "date": string,
    "title": string,
    "subtitle": string,
    "contents": string
}

export const mockData : any = {
    "1": {
        "id": "1",
        "date": "2022-12-03 09:00",
        "title": "Chapter01. 리팩터링 : 첫 번째 예시",
        "subtitle": "리팩터링의 첫 번째 예시를 알아봅시당",
        "contents": `
# **Chapter01. 리팩터링 : 첫 번째 예시**
# 요약

### 리팩터링이 필요한 이유`
    },
    "2": {
        "id": "2",
        "date": "Sat Dec 03 2022 18:41:43 GMT+0900",
        "title": "제목 2",
        "subtitle": "이거슨 제목2",
        "contents": "",
    }
}