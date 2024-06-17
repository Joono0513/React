
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