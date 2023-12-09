import { ChangeEvent, useState } from 'react'
import './App.css'

interface TeacherType {
  name: string;
  students: string[]
}

function App() {
  const [teacherName, setTeacherName] = useState('')
  const [studentName, setStudentName] = useState('')
  const [teachers, setTeachers] = useState<TeacherType[]>([])

  function handleTeacherNameChange(e: ChangeEvent<HTMLInputElement>) {
    setTeacherName(e.target.value)
  }

  function handleStudentNameChange(e: ChangeEvent<HTMLInputElement>) {
    setStudentName(e.target.value)
  }

  function handleAddTeacher() {
    console.log(teacherName)
    const copy = teachers;
    //输入框内容为空
    if(!teacherName){
      console.log('添加失败')
      return false;
    }else{
      console.log(teachers)
      
      let stop = false;
      copy.map((item)=>{
        console.log(item.name)
        //已在教师列表中存在该教师
        if(item.name == teacherName){
          stop = true;
        }else if(item.name != teacherName){
          item.students.map((itemS,indexS)=>{
            if(itemS == studentName){
              item.students.splice(indexS,1)
            }
          })
        }
      })
      //最大数量 5 名
      if(stop || copy.length > 4){
        console.log('添加失败')
      }else{
        //该学生添加到该教师的学生列表
        copy.push({name:teacherName,students:[studentName]})
        setTeachers([...copy])
      }
    }
  }

  function handleRemoveTeacher() {
    const copy = teachers;
    //不存在于教师列表中
    let isHave = copy.some((item)=>{
      return item.name == teacherName
    })
    if(!isHave){
      console.log('添加失败')
      return false;
    }
    let studentsArr:Array<string> = [];
    copy.map((item,index)=>{
      //删除该教师
      if(item.name == teacherName){
        studentsArr = item.students;
        copy.splice(index,1)
      }
    })
    console
    console.log(studentsArr)
    //若该教师名下的学生，转移到其他教师名下，当转移的教师名下学生已达到5名时，继续转移至其他教师名下；
    copy.map((item)=>{
      let num:number = 5 - item.students.length;
      let arr = studentsArr.slice(0,num)
      console.log(arr)
      item.students = item.students.concat(arr)
      studentsArr.splice(0,num);
    })
    setTeachers([...copy])
  }

  function handleAddStudent() {
    const copy = teachers;
    //教师输入框或学生输入框有任一内容为空
    if(!teacherName || !studentName){
      console.log('添加失败')
      return false;
    }
    let stop = false;
    //不存在于教师列表中
    stop = !copy.some((item)=>{
      return item.name == teacherName
    })
    copy.map((item)=>{
      //学生已达到最大数量5名
      if(item.name == teacherName && (item.students.length < 5)){
        //已经有该学生了
        item.students.map((itemS)=>{
          if(itemS == studentName){
            stop = true;
          }
        })
        //学生添加到该教师的学生列表下
        if(!stop){
          item.students.push(studentName)
        }
      }else if(item.name != teacherName){
        //从其他教师的学生列表中将该学生删除
        item.students.map((itemS,indexS)=>{
          if(itemS == studentName){
            item.students.splice(indexS,1)
          }
        })
      }
    })
    console.log(copy)
    if(stop){
      console.log('添加失败')
      return false;
    }else{
      setTeachers([...copy])
    }
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
        {teachers?.map((item)=>{
          return (
            <ul key={item.name}>教师姓名：{item.name}
            <div>学生：</div>
            {item?.students.map((itemS)=>{
              return(
                <li key={itemS}>{itemS}</li>
              )
            })}
            </ul>
          )
        })}
      </div>
    </>
  )
}

export default App
