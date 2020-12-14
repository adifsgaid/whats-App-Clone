import React, {useEffect, useState}  from 'react';
import './Chat.css';
import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, MoreVert } from '@material-ui/icons';
import SearchIcon from '@material-ui/icons/Search';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import { useParams } from 'react-router-dom';
import db from './firebase';

function Chat() {
    const [input, setInput] = useState('');
    const [seed, setSeed] = useState('');
    const { roomId } = useParams();
    const [roomName, setRoomName ] = useState('')
    
    useEffect(() => {
        if (roomId){
            db.collection('rooms').doc(roomId).onSnapshot(snapshot => (
                setRoomName(snapshot.data().name)
            ))
        }
    }, [roomId])

    useEffect(() =>{
        setSeed(Math.floor(Math.random() * 500))
    }, [])
    
    const sendMessage = (e) => {
        e.preventDefault();
        console.log('you typed >>>>', input)
        setInput('')
    }
    
    return (
        <div className='chat'>
            <div className='chat__header'>
            <IconButton>
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
             </IconButton> 
                <div className='chat__headerInfo'>
                    <h3>{roomName}</h3>
                    <p>LAST seen</p>
                </div>
                
                <div className='chat__headerRight'>
                <IconButton>
                <AttachFile/>
                </IconButton>
            
                <IconButton>
                <MoreVert/>
                </IconButton>
            
                <IconButton>
                < SearchIcon />
                </IconButton>
                </div>
            </div>
            
            <div className='chat__body'>
                <p className={`chat__message 
                ${true && 'chat__receiver'}`}> 
                <span className='chat__name'>adif</span>
                hello
                <span className='chat__timestamp'>16:45pm</span> 
                </p>
                
            </div>
            
            <div className='chat__footer'>
                <InsertEmoticonIcon/>

                <form >
                    <input value={input} onChange={e => setInput(e.target.value)}type='text' placeholder='Type your message'></input>
                    <button onClick={sendMessage}type='submit'>Send your message</button>
                </form>

                <MicIcon/>
            </div>
        </div>
    )
}

export default Chat
