import { ChangeEvent, useState } from 'react'
import './App.css'

interface TeacherType {
  name: string;
  students: string[]
}

function App() {
  const [teacherName, setTeacherName] = useState('')
  const [studentName, setStudentName] = useState('')
  const [teachers, setTeachers] = useState<TeacherType[]>()

  function handleTeacherNameChange(e: ChangeEvent<HTMLInputElement>) {
    setTeacherName(e.target.value)
  }

  function handleStudentNameChange(e: ChangeEvent<HTMLInputElement>) {
    setStudentName(e.target.value)
  }

  function handleAddTeacher() {

  }

  function handleRemoveTeacher() {

  }

  function handleAddStudent() {

  }

  return (
    <>
      <div>
        <label>教师：</label>
        <input value={teacherName} onChange={handleTeacherNameChange} />
      </div >
      <div>
        <label>学生：</label>
        <input value={studentName} onChange={handleStudentNameChange} />
      </div >
      <div className='operations'>
        <button onClick={handleAddTeacher}>招聘教师</button>
        <button onClick={handleRemoveTeacher}>解雇教师</button>
        <button onClick={handleAddStudent}>招收学生</button>
      </div>
      <div className="teachers">
        {/* 教师学生列表区 */}
      </div>
    </>
  )
}

export default App
