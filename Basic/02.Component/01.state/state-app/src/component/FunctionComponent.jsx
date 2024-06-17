
import React, { useState } from 'react'
// 함수형 컴포넌트 자동 완성
// rafce : React Arrow Function Component Export

const FunctionComponent = () => {

    // 함수형 컴포넌트에서 state 정의하기
    // const[상태, 상태설정함수] = useState('초기값')
    const [name, setName] = useState('윤준호')
    const [msg, setMsg] = useState('')

// 입사 지원 클릭
const handleApply = () => {
    console.log('입사 지원 클릭');
    // 상태 업데이트
    setMsg('입사 지원을 하였습니다')
}

// 중도 포기 클릭
const handleStop = () => {
    console.log('중도 포기 클릭');
    // 상태 업데이트
    setMsg('중도 포기를 하였습니다')
}


  return (
    <div>
      <h1>클래스 컴포넌트</h1>
      <h2>Hello I'm {name}</h2>
      <p>{msg}</p>
      <button onClick={handleApply}>입사 지원</button>
      <button onClick={handleStop}>중도 포기</button>
    </div>
  )
}

export default FunctionComponent