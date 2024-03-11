import { useEffect, useState } from "react";
import "./widgetSm.css";
import { Visibility } from "@mui/icons-material";
import  axios from 'axios';

export default function WidgetSm() {
  const [newUsers, setNewUsers] = useState([]);

  useEffect(()=>{
    const getNewUsers = async()=>{
      try{
        const res = await axios.get("/users?new=true",{
            headers:{
              token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YmFlYWM1MzA5NDc3ZGI5OTdlZmRiOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwOTYwNDYzNywiZXhwIjoxNzA5NjkxMDM3fQ.8h0WNnr1b68PoF4CKgtFl50oDeXLFzTaGpujaCjpfM0"
            },
        });
        setNewUsers(res.data);
      }catch(err){
        console.log(err);
      }
      
    }
    getNewUsers();
  })
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newUsers.map((user)=>(
          <li key = {user._id} className="widgetSmListItem">
            <img
              src={user.profilePic||"https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"}
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
        </li>
        ))}
      </ul>
    </div>
  );
}
