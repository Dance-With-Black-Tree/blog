# **01. 데이터 타입의 종류**

자바스크립트에는 크게 두 가지 종류의 데이터 타입이 존재합니다.

### **기본형 타입 (Primitive Type)**

- 숫자 (number)
- 문자열 (string)
- 불리언 (boolean)
- null
- undefined
- 심볼 (Symbol)

### **참조형 타입 (Reference Type)**

- 객체 (Object)
    - 배열 (Array)
    - 함수 (Function)
    - 날짜 (Date)
    - 정규표현식 (RegExp)
    - Map, Set 등

기본형은 할당이나 연산시 데이터가 복제되고, 참조형은 데이터를 참조한다고 알려져있습니다.

**엄밀히 따지면 둘 모두 복제**를 하지만, 그 방식이 다르다 그 부분에 대해서는

뒤에서 다루겠습니다.

**기본형 타입은 불변성**을 띈다. 이 부분 역시 뒤에서 다루겠습니다.


# **02. 데이터 타입에 관한 배경지식**

컴퓨터는 모든 데이터를 0 또는 1로 표현하는 이진법으로 모든 것을 기록합니다.

이 때 **0 또는 1만 표현할 수 있는 하나의 메모리 조각을 비트(bit)**라고 한다. **메모리는 수 많은 비트**들로 구성되어 있는데,

각 비트는 **고유한 식별자**를 갖고 있어 **메모리에서의 위치를 확인**할 수 있습니다.

하지만 고작 0과 1을 표현할 수 있는 비트 단위로 위치를 확인하는 것은 매우 비효율적이므로, 비트 몇개를 묶어 하나의 단위로 표현하면 표현할 수 있는 값도 많아지고, 메모리에서 검색할 때도 유리해집니다.

(eg. number의 크기 = 8byte = 64bit)

byte역시 bit의 식별자로 위치를 파악할 수 있고, 모든 데이터는 **바이트 단위의 식별자(메모리 주솟값)**을 통해 서로 구분할 수 있습니다.



# **03. 변수 선언과 데이터 할당**

### **변수 선언**

```
var a;
```

위에 코드를 실행하면 아래 표와 같이 메모리 영역에 변화가 발생합니다.

| 주소 | ••• | 1002 | 1003 | 1004 | ••• |
| --- | --- | --- | --- | --- | --- |
| 데이터 |  |  | 이름 : a값 : |  |  |

임의의 주소 공간에 **a라는 이름을 갖은 데이터 공간이 생성**됩니다.

데이터를 할당하지 않았기 때문에 값은 undefined입니다.

### **변수 할당**

```
var a;// 변수 a 선언
a = 'abc';// 변수 a 에 데이터 할당var a = 'abc';// 변수 선언과 할당을 동시에
```

코드의 1-2 줄과, 4줄번 째 줄은 같은 동작을 수행합니다.

앞에 봤던 표를 참고해보면 1003번 주소에 찾아가 값에 'abc'를 직접 할당하면 될 것 같지만, 그렇지 않습니다.

아래 표처럼 **데이터를 저장하는 별도의 메모리 공간에 'abc'라는 값을 할당하고, 그 주소를 1003번 값에 할당**합니다.

| 변수 영역 | 주소 | ••• | 1002 | 1003 | 1004 | 1005 | ••• |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 데이터 |  |  | 이름 : a값 : @5004 |  |  |  |  |
| 데이터 영역 | 주소 | ••• | 5002 | 5003 | 5004 | 5005 | ••• |
| 데이터 |  |  |  | 'abc' |  |  |  |

표를 해석하면 아래와 같습니다.

1. **변수 영역**에서 빈 공간(@1003)을 확보한다.
2. 확보한 공간의 식별자(변수명)를 a로 지정한다.
3. **데이터 영역**의 빈 공간(@5004)에 문자열 'abc'를 저장한다.
4. 변수 영역에서 a라는 식별자를 검색한다.
5. 앞서 저장한 문자열의 주소(@5004)를 @1003의 값에 할당한다.

위와 같이 변수 영역과 데이터 영역을 나눈 이유는 **데이터 변환을 자유**롭게 할 수 있게하고, **메모리를 효율적으로 관리**하기 위함입니다.

만약 변수 영역과 데이터 영역을 분리하지 않고 직접 값을 할당한다면,

1. 문자열 데이터 변환
    - 문자열은 정해진 크기가 없기 때문에, 문자열의 길이에 따라 기존에 있던 메모리상의 변수들의 위치를 조정해야합니다.> 만약 분리한다면 별도의 데이터 영역에 원하는 만큼 사용하고, 그 주소 값만 할당해주면 됩니다.
2. 같은 값을 다른 변수에 할당
    - 중복되는 만큼 메모리를 사용하게 됩니다. 만약 500개의 변수에 5라는 숫자를 할당한다면 4000바이트(8byte*500)가 필요하지만, 분리한다면 1008바이트 (500*2byte + 8byte, 주소공간에 2byte가 필요하다는 가정)만 사용하면됩니다.

위에 예시처럼 변수 영역과 데이터 영역을 구분하는 것이 훨씬 효율적임을 알 수 있습니다.

그래서 JS에서 아래와 같이 문자열을 수정하는 코드를 실행한다면

```
var a = 'abc';
a = a + 'def';
```

데이터 영역에 abc 값을 갖는 **데이터를 직접 수정하지 않고**, abcdef 값을 갖는 **데이터를 새로 생성**하고 그 값을 할당합니다.