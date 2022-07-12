import './add.css';
import { NavLink } from 'react-router-dom';

import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import MonitorOutlinedIcon from '@mui/icons-material/MonitorOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import {Link} from 'react-router-dom'
 

const Navigation= ()=>{
    
    return(<div>
        <div className='navbar' style={{ display: "flex", flexDirection: "column",
        flexWrap: "wrap",justifyContent: "flex-start",alignContent:"center",alignItems: "first baseline"}}>
     <Link className='linkk' to='/home' ><span className="tophead"><span className="icon"><WorkspacePremiumOutlinedIcon/></span> School Space</span></Link>
     <div className='hr'> </div>
     <NavLink className='link'  to='/home'>< DashboardOutlinedIcon/>  Dashboard </NavLink>
     <NavLink className='link' to='/home'><MenuBookOutlinedIcon/> Courses</NavLink>
     <NavLink className='link' style={({ isActive }) => 
                      (isActive ? {color: '#2CA4D8',backgroundColor:"#E0FFFF"} :  null)} to='/student' ><GroupsOutlinedIcon/> Students</NavLink>
     <NavLink className='link' to='/home'><NoteAltOutlinedIcon/> Exam</NavLink>
     <NavLink className='link' to='/home'><AssignmentTurnedInOutlinedIcon/> Results</NavLink>
     <NavLink className='link' to='/home'><MonitorOutlinedIcon/> Notice Board</NavLink>
     <NavLink className='link' to='/home'><LiveTvOutlinedIcon/> Live Class</NavLink>
     <NavLink className='link' to='/home'> <NotificationsNoneOutlinedIcon/> Notification</NavLink>


        </div>
        </div>
        
    )
}
export default Navigation;