import './style.css';
import { Grid, Box, Button, TextField } from "@mui/material";
import image from '../../../images/1.jpg'
import logo from '../../../images/landscape.png'
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/material.css'

const CssTextField = styled(TextField)({
    "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "#38BDF8",
    },
    "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "#38BDF8",
    },
})

const customStyles = {
    input: {
      border: '1px solid #38BDF8', 
      width: '100%',
    },
    labelStyle: {
        color: '#38BDF8',
    },
    container:{
        labelStyle: {
            color: '#38BDF8',
        },
        color: '#38BDF8',
    }
  };


const Signup = () => {
    return (
        <Grid
        container
        className="signup_main_container"
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
                    <span>Welcome to</span>
                    <img src={logo} alt='logo'></img>
                </Box>
                <CssTextField
                    sx={{
                        mb: 1,
                    }}
                    required
                    fullWidth
                    id="fullName"
                    label="Full Name"
                    name="fullName"
                    className="input_login_field"
                    autoComplete="fullName" 
                    InputLabelProps={{
                        className: "label_input"
                    }}
                    inputProps={{
                    type: "text",
                    maxLength: 100,
                    }}
                />

                <CssTextField
                    sx={{
                        mb: 1,
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

                <Box
                fullWidth
                sx={{
                    mb: 1,
                }}
                className="input_login_field"
                >
                    <PhoneInput
                    country={'us'}
                    countryCodeEditable ={false}
                    fullWidth
                    inputStyle={customStyles.input}
                    containerStyle={customStyles.container}
                    inputProps={{
                        required: true,
                      }}
                    />
                </Box>

                

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
                <CssTextField
                    sx={{
                        mb: 1,  
                    }}
                    required
                    fullWidth
                    name="confPassword"
                    className="input_login_field"
                    label="Confirm Password"
                    type="password"
                    id="confPassword"
                    autoComplete="current-password"
                    InputLabelProps={{
                        className: "label_input"
                    }}
                    inputProps={{
                    minLength: 6,
                    }}
                />

                <Button
                    style={{ backgroundColor: "#38BDF8" }}
                    type="submit"
                    fullWidth
                    className="button_login_field"
                    variant="contained"
                    sx={{ fontSize: "18px", fontWeight: "600", textTransform: "none" , mt: 4, mb: 1 }}
                >Signup</Button>

                <Box className='login'>
                    Already have an account <Link className='Link' to={'/login'}> Login</Link>
                </Box>
            </Box>
        </Grid>
    );
}

export default Signup;