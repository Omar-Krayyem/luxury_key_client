import './style.css';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

const Header = () => {
    return (
        <div className='navside'>
            <div className='upper'>
                <div className='section'>
                    <div className='icon'><HomeOutlinedIcon sx={{ fontSize: 30 }} /></div>
                    <div className="title">Home</div>
                </div>

                <div className='section'>
                    <div className='icon'><SearchOutlinedIcon sx={{ fontSize: 30 }}/></div>
                    <div className="title">Search</div>
                </div>

                <div className='section'>
                    <div className='icon'><ChatOutlinedIcon sx={{ fontSize: 30 }}/></div>
                    <div className="title">Message</div>
                </div>

                <div className='section'>
                    <div className='icon'><ApartmentOutlinedIcon sx={{ fontSize: 30 }}/></div>
                    <div className="title">Projects</div>
                </div>
            </div>

            <div className='below'>
                <div className='section'>
                    <div className='icon'><LogoutOutlinedIcon sx={{ fontSize: 30 }}/></div>
                    <div className="title">Logout</div>
                </div>
            </div>
        </div>
    );
}

export default Header;