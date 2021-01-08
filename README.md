# 리액트를 활용해 만든 TodoList App

## 컴포넌트 최적화

### React.memo

React.memo는 컴포넌트의 props가 반뀌지 않았다면 리렌더링 하지 않도로 설정하여 함수형 컴포넌트의 리렌더링 성능을 최적화 할 수 있다.

컴포넌트를 만들고 나서 감싸주기만 하면 된다.

### state값이 바뀌어도 참조하는 함수가 변경되지 않게 하기

#### useState의 함수형 업데이트
set 함수에 새로운 상태를 파라미터로 넣어주기 보다 상태 업데이트를 어떻게 할지 정의해주는 업데이트 함수를 넣기

#### useReducer 사용하기

useReducer를 사용하면 기존 코드를 많이 고쳐야 하지만, 상태를 업데이트 하는 로직을 모아서 커모넌트 바깥에 둘 수 있다는 장점이 있다.

### React-virtualized

리스트에서 아이템을 모두 렌더링하기 보다 화면에 나오는 아이템들만 렌더링 해주는 라이브러리이다.