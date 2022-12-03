# **React의 재조정(Reconciliation)**

- React에서는 선언적 API를 제공하기 때문에, 개발자가 View가 갱신될 때 마다 무엇이 바뀌는지 신경쓰지 않아도 됩니다.
- 이 때 내부에서는 **비교 알고리즘(diffing algorithm)** 을 통해 어떤 부분을 갱신해야 하는지 파악합니다.

# 트리구조 비교!

- render() 함수는 React element 트리를 반환합니다.
- [트리 구조에서 차이점을 찾는 최신 알고리즘](https://grfia.dlsi.ua.es/ml/algorithms/references/editsurvey_bille.pdf)은 O(n^3)의 복잡도를 갖습니다.

### 즉, 1000개의 element -> 10억 번의 비교 연산 !?

- React는 이 대신 O(n) 복잡도의 휴리스틱 알고리즘을 구현했습니다.
- 휴리스틱 알고리즘(Heuristic Algorithm) : 불충분한 시간이나 정보로 인하여 합리적인 판단을 할 수 없거나, 체계적이면서 합리적인 판단이 굳이 필요하지 않은 상황에서 사람들이 빠르게 사용할 수 있게 보다 용이하게 구성된 간편 추론 의 방법이다. (출처 : 위키백과 - 휴리스틱 이론)

---

# 비교 알고리즘(Diffing Algorithm)

> 두 개의 트리를 비교할 때, React는 두 엘리먼트의 root 엘리먼트 부터 비교합니다. 이후의 동작은 루트 엘리먼트의 타입에 따라 달라집니다.
> 

### **엘리먼트의 타입이 다른 경우**

> 이전 트리를 버리고 완전히 새로운 트리를 구축
> 

### **트리를 버릴 때 이전 DOM 노드들은 모두 파괴된다**

1. componentWillUnmount() 실행
2. 새로운 DOM 노드들이 DOM에 삽입
3. UNSAFE_componentWillMount() 실행
4. componentDidMount()가 이어서 실행
5. 이전 트리와 연관된 모든 state 제거

### **Example code**

```
// before
<div>
  <Counter />
</div>

// after
<span>
  <Counter />
</span>
```

이 때 이전 Counter는 사라지고, 새로 다시 마운트 됩니다.

### DOM 엘리먼트의 타입이 같은 경우

> 동일한 내역은 유지하고 변경된 속성만을 갱신합니다.
> 

```
// before
<div className="before" title="stuff" />

// after
<div className="after" title="stuff" />// 현재 DOM 노드 상에 className만 수정됨!

```

> style 갱신 또한 변경된 속성만 갱신합니다.
> 

```groovy
// before
<div style={{color: 'red', fontWeight: 'bold'}} />

// after
<div style={{color: 'green', fontWeight: 'bold'}} />

// color 속성만 수정됨

```

### **이후 자식 노드들에 대해 재귀적으로 처리합니다.**

---

# 리스트에 key는 왜 필요할까?

DOM 노드의 자식들을 재귀적으로 처리할 때, React는 기본적으로 동시에 두 리스트를 순회하고 차이점이 있으면 변경을 생성합니다.

```
// before
<ul>
  <li>first</li>  // 1. 같음
	<li>second</li> // 2. 같음
</ul>

// after
<ul>
  <li>first</li>  // 1. 같음
  <li>second</li> // 2. 같음
  <li>third</li>  // 3. 추가
</ul>// 자식의 끝에 엘리먼트를 추가하면, 앞에서 부터 비교 하기 때문에 잘 작동함

// before
<ul>
  <li>Duke</li>        // 1. 다름
  <li>Villanova</li>   // 2. 다름
</ul>// after
<ul>
  <li>Connecticut</li> // 1. 다름
  <li>Duke</li>        // 2. 다름
  <li>Villanova</li>   // 3. 다름
</ul>// 앞에 추가하게 되면 잘 작동하지 않음, 모든 자식들을 변경함

```

### 이 문제 해결을 위해 key를 도입했습니다.

> 자식들이 key를 가지고 있다면, React는 key를 통해 기존 트리와 이후 트리의 자식들이 일치하는지 확인합니다.
> 

```jsx
// before
<ul>
  <li key="2015">Duke</li><li key="2016">Villanova</li>
</ul>

// after
<ul>
  <li key="2014">Connecticut</li>
  <li key="2015">Duke</li>
  <li key="2016">Villanova</li>
</ul>
```

이제 리액트는 2014라는 key를 가진 엘리먼트가 **추가** 된 것을 알 수 있고,2015,2016 키를 가진 엘리먼트는 그저 **이동만** 하면됩니다.

# key 적용법

```
<li key={item.id}>{item.name}</li>

```

### Options

1. 데이터 구조에 id라는 속성을 추가
2. 데이터 일부에 hash함수를 적용해 key를 생성
3. 배열의 인덱스(비추천)
4. 항목들이 재배열 되지 않는다면 잘 동작하지만, 재배열되면 비효율적임

### Tip

- key는 전역적으로 유일할 필요 없이, **오로지 형제 사이에서만 유일**하면 됩니다.
- key는 반드시 변하지 않고, 예상가능하며 유일해야합니다.
- 변하는 key(Math.random()으로 생성된 값 등)은 많은 컴포넌트 인스턴스와 DOM 노드를 불필요하게 재생성하여 성능이 나빠지거나 자식 컴포넌트의 state가 유실될 수 있습니다.

# 참고문헌

[React Documentation - 재조정(Reconciliation)](https://ko.reactjs.org/docs/reconciliation.html)