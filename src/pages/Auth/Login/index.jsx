import './style.css';
import { Grid, Box, Button, TextField } from "@mui/material";
import image from '../../../images/2.webp'
import logo from '../../../images/landscape.png'
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const CssTextField = styled(TextField)({
    "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "#38BDF8",
    },
    "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "#38BDF8",
    },
})


const Login = () => {
    return (
        <Grid
        container
        className="login_main_container"
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={2}
        >
            <Box
            className="image_box"
            lg={12}
            > 
                <img src={image} alt='logo'></img>
            </Box>

            <Box
            className="form_box"
            lg={8}
            >
                <Box className="head"
                sx={{
                    mb: 4, fontSize: "24px"  
                }}
                >
                    <img src={logo} alt='logo'></img>
                    <span>Welcome back</span>
                </Box>
                <CssTextField
                    sx={{
                        mb: 2,
                    }}
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    className="input_login_field"
                    autoComplete="email" 
                    InputLabelProps={{
                        className: "label_input"
                    }}
                    inputProps={{
                    type: "email",
                    maxLength: 100,
                    }}
                />

                <CssTextField
                    sx={{
                        mb: 1,  
                    }}
                    required
                    fullWidth
                    name="password"
                    className="input_login_field"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    InputLabelProps={{
                        className: "label_input"
                    }}
                    inputProps={{
                    minLength: 6,
                    }}
                />
                <Box className='forget_password'>
                    Forget Password?
                </Box>

                <Button
                    style={{ backgroundColor: "#38BDF8" }}
                    type="submit"
                    fullWidth
                    className="button_login_field"
                    variant="contained"
                    sx={{ fontSize: "18px", fontWeight: "600", textTransform: "none" , mt: 4, mb: 1 }}
                >Login</Button>

                <Box className='signup'>
                    Don’t have an account?  <Link className='Link' to={'/signup'}> Signup</Link>
                </Box>
            </Box>
        </Grid>
    );
}

export default Login;