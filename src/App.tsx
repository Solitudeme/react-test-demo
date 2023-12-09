import { useState } from 'react'
import './App.css'

function App() {
  const [teacherName, setTeacherName] = useState('')
  const [studentName, setStudentName] = useState('')

  function handleTeacherNameChange(e: any) {
    setTeacherName(e.target.value)
  }

  function handleStudentNameChange(e: any) {
    setStudentName(e.target.value)
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
        <button>招聘教师</button>
        <button>解雇教师</button>
        <button>招收学生</button>
        <button>开除学生</button>
      </div>
    </>
  )
}

export default App
