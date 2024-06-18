
- BackEnd
  - Spring Boot
  - CRUD 작업
    - board 테이블 생성
    - Board.java DTO 생성
    - BoardMapper.xml
    - BoardMapper.java
    - BoardService.java
    - BoardServiceImpl.java
    - BoardController.java

- FrontEnd
  - React
  - Containers
    - 게시글 목록 - ListContainer
    - 게시글 등록 - InsertContainer
    - 게시글 조회 - ReadContainer
    - 게시글 수정 - UpdateContainer
  - Components
    - board
      - List
      - Read
      - InsertForm
      - UpdateForm
  - Pages
    - board
      - List
      - Read
      - Insert
      - Update
    - Home
  - APIs
    - boards.js

---

# axios 라이브러리

## axois 라이브러리 설치
```
npm install axios
```
axis 사용 방법
  - GET
  - POST
  - PUT
  - DELETE

import
```
import axios from 'axios';
```

GET
```
axios.get("경로")
```

POST
```
axios.post("경로", {데이터})
```

PUT
```
axios.put("경로", {데이터})
```

DELETE
```
axios.delete("경로")
```


# 게시판 - STYLE
> 리액트에서는 컴포넌트에서만 사용할 css를 모듈로 지정해서 사용할 수 있다.

📝 컴포넌트.jsx
📝 style.module.css

css 파일을 *.module.css로 파일을 생성하면, css 안에 있는 선택자 및 스타일 속성을 컴포넌트에서 가져와서 객체로 적용할 수 있다.

## style.module.css
```
.sample {color : red;}
```
## 컴포넌트.jsx
```
import styles from './style.module.css'
```
```
<div className={styles.sample}>Hello React Style~!</div>
```
