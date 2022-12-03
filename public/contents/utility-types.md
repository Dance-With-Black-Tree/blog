# Partial

- 주어진 Type의 모든 property를 optional로 세팅한 Type
- 주어진 Type의 모든 부분 집합 type을 return한다.

```tsx
interface Todo {
	title: string
	description: string
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
	return { ...todo, ...fieldsToUpdate }
}

const todo1 = {
	title: 'organize desk',
	description: 'clear clutter',
}

const todo2 = updateTodo(todo1, {
	description: 'throw out trash'
}
```

- `Todo` interface에 `title`과 `description`이 정의되어 있는데, `Todo` 중에서 일부 속성으로만 이루어진 type을 지정하고 싶을 때, **Partial**을 사용하면 된다!

# Readonly

- Type의 모든 property 속성을 readonly로 세팅한다.
- 주어진 모든 property는 재할당할 수 없다.

```tsx
interface Todo {
	title: string
}

const todo: Readonly<Todo> = {
	title: 'Delete inactive users',
}

todo.title = 'Hello' // Error: cannot reassign a readonly property
```

# Record<K, T>

- property Type을 K로, value Type을 T로 지정할 수 있다.
- 특정 property를 다른 type으로 매핑하고 싶을 때 유용하다.

```tsx
interface PageInfo {
	title: string
}

type Page = 'home' | 'about' | 'contact'

const x: Record<Page, PageInfo> = {
	about: { title: 'about'},
	contact: {title: 'contact'},
	home: {title: 'home'},
}
```

# Pick<T, K>

- 어떤 Type에서 특정 property들인 K를 뽑아서 구성한 타입을 지정한다.

```tsx
interface Todo {
	title: string
	description: string
	completed: boolean
}

type TodoPreview = Pick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
	title: 'clean room',
	completed: false,
}
```

# Omit<T, K>

- Type에서 특정 property, K를 지운 Type을 구성한다.

```tsx
interface Todo {
	title: string
	description: string
	completed: boolean
}

type TodoPreview = Omit<Todo, 'description'>

const todo: TodoPreview = {
	title: 'clean room',
	completed: false,
}
```

# Exclude<T, U>

- T에서 U에 지정한 모든 property를 제외하고 구성한다.

```tsx
type T0 = Exclude<"a" | "b" | "c", "a">; // "b" | "c"
type T1 = Exclude<"a" | "b" | "c", "a" | "b">; // "c"
type T2 = Exclude<string | number | (() => void), Function>; // string | number
```

# Extract<T, U>

- T에서 U에 지정한 property만 추출하여 구성한다.

```tsx
type T0 = Extract<"a" | "b" | "c", "a" | "f">; // "a"
type T1 = Extract<string | number | (() => void), Function>; // () => void
```

# NonNullable<T>

- Type에서 undefined와 null을 제외한 Type만 남긴다.

```tsx
type T0 = NonNullable<string | number | undefined> // string | number
type T1 = NonNullable<string[] | null | undefined> // string[]
```

# Parameters<T>

- function type T의 parameter들의 Type을 tuple로 구성한다.

```tsx
declare function f1(arg: {a: number, b: string}): void

type T0 = Parameters<() => string> // []
type T1 = Parameters<(s: string) => void> // [string]
type T2 = Parameters<(<T>(arg: T) => T)> // [unknown]
type T3 = Parameters<typeof f1> // [{a: number, b: string}]
type T4 = Parameters<any> // unknown[]
type T5 = Parameters<never> // never
type T6 = Parameters<string> // Error
type T7 = Parameters<Function> // Error
```

# ConstructorParameters<T>

- 생성자 함수(constructor function)의 모든 parameter들의 Type을 tuple로 구성한다.

# ReturnType<T>

- function T의 return type을 구성한다.

```tsx
declare function f1(): {a: number, b: string}

type T0 = ReturnType<() => string> // string
type T1 = ReturnType<(s: string) => void> // void
type T2 = ReturnType<(<T>() => T> // {}
```

# InstanceType<T>

- 생성자 함수(construction function) T의 instance type을 구성한다.

# Required<T>

- 모든 T의 property들을 optional이 아닌 required로 세팅하여 구성한다.