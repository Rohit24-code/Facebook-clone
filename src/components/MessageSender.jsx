import { Avatar } from '@mui/material'
import VideocamIcon from '@mui/icons-material/Videocam'
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary'
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon'
import React, { useState } from 'react'
import './MessageSender.css'

export function MessageSender() {

    const [input,setInput] = useState("")
    const [imageurl,setImageurl] = useState("")

    const handleSubmit=(e)=>{
        e.preventDefault()
    }
  return (
    <div className='messageSender'>
      
      <div className="messageSender_top">
        <Avatar/>
        <form >
        <input value={input} onChange={(e)=>setInput(e.target.value)} className='messageSender_input' type="text" placeholder={"what's on your mind"} />
        <input value={imageurl} onChange={(e)=>setImageurl(e.target.value)}  type="text" placeholder='image url' />
        <button onClick={handleSubmit} type="submit">
            Hidden submit
        </button>
        </form>
      </div>
      <div className="messageSender_bottom">
        <div className="messageSender_option">
            <VideocamIcon style={{color : "red"}}/>
            <h3>Live Video</h3>
        </div>
        <div className="messageSender_option">
            <PhotoLibraryIcon style={{color : "green"}}/>
            <h3>Photo/Video</h3>
        </div>
        <div className="messageSender_option">
            <InsertEmoticonIcon style={{color : "orange"}}/>
            <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  )
}

export default MessageSender