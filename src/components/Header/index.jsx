import './style.css';
import logo from '../../images/landscape.png'
import { Avatar } from "@mui/material";
import profile from '../../images/jordyn.jpeg';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';

const Header = () => {
    return (
        <div className='header'>
            <div className="left_side">
                <img src={logo} alt='logo'></img>
            </div>
            <div className="right_side">
                <div className='noti'>
                    <NotificationsNoneRoundedIcon className='noti_icon' sx={{ fontSize: 30 }}/>
                </div>
                <Avatar alt="Profile" src={profile} 
                sx={{ width: 50, height: 50 }}
                className='profile_img'
                />
            </div>
        </div>
    );
}

export default Header;