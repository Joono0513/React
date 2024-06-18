import React, { useState, useEffect } from 'react'
import UpdateForm from '../components/board/UpdateForm'
import * as boards from '../apis/board'
import { useNavigate } from 'react-router-dom'

const UpdateContainer = ({no}) => {
  const navigate = useNavigate()
  const [board, setBoard] = useState({})
  const [isLoading, setLoading] = useState(false)

  const getBoard = async () => {
    // 로딩 시작
    setLoading(true)
    const response = await boards.select(no)
    const data = await response.data
    console.log(data);
    setBoard(data)
    setLoading(false)
    // 로딩 끝
  }

  const onUpdate = async (no, title, writer, content) => {
    try {
      const response = await boards.update(no, title, writer, content)
      const status = await response.status
      console.log(`게시글 수정 요청 결과 : ${status}`);
      alert("게시글 수정 완료!")

      // -> 게시글 목록으로 이동
      navigate("/boards")
    } catch (error) {
      console.log(error)
    }
  }

  const onDelete = async(no) => {
    const response = await boards.remove(no)
    const status = await response.status
    console.log(`게시글 삭제 요청 결과 : ${status}`);
    alert("삭제 완료!")
    // -> 게시글 목록으로 이동
    navigate("/boards")
  }

  // hook
  useEffect(() => {
    getBoard()
  }, [])

  return (
    <>
      <UpdateForm no={no} 
                  board={board} 
                  onUpdate={onUpdate}
                  onDelete={onDelete}
                  isLoading={isLoading} />
    </>
  )
}

export default UpdateContainer