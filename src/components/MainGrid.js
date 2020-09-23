import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import teacher from '../images/teacher.gif';
import uniStudent from '../images/uniStudent.gif';
import coding from '../images/coding.svg';
import Freelancer from '../images/Freelancer.svg';
import programmer from '../images/programmer.svg';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import StarIcon from '@material-ui/icons/Star';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import './MainGrid.modules.css';
import { Footer } from './Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function MainGrid() {
    AOS.init();
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <nav>

                        <li className='list'>
                            <ul className="item">Home</ul>
                            <ul>About</ul>
                            <ul>Products</ul>
                            <ul>Contact Us</ul>
                        </li>
                    </nav>
                </Grid>
                <Grid item xs={12} md={8}>
                    <div
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-delay="1000"
                        data-aos-once="true"
                    >
                        <div className="text-main">
                            <h1 className="heading">Welcome to the HOMEPAGE</h1>
                            <Typography className="para">
                                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
                </Typography>
                            <Button variant="contained" color="primary" style={{ margin: '10px' }}>
                                Connect with us on &nbsp; <FacebookIcon />
                            </Button>
                            <Button variant="contained" style={{ backgroundColor: '#aba9a9' }}>
                                Connect with us on &nbsp; <GitHubIcon />
                            </Button>
                        </div>
                    </div>

                </Grid>
                <Grid item xs={12} md={4}>
                    <div
                        data-aos="slide-left"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-once="true"
                    >
                        <img src={uniStudent} alt="uniStudent" className="image1" />
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div className="second">
                        <div
                            data-aos="slide-right"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-delay="1000"
                            data-aos-once="true"
                        >
                            <img src={programmer} alt="student" className="image3" />
                        </div>
                        <div className="container"
                            data-aos="slide-left"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-delay="1000"
                            data-aos-once="true"
                        >
                            <h1 className="heading">Start Coding Now!</h1>
                            <p className="text">
                                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
                </p>
                        </div>

                    </div>
                </Grid>
                <Grid item xs={12} md={8}>
                    <div className="text mar-top"
                        data-aos="slide-up"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-delay="1000"
                        data-aos-once="true"
                    >
                        <h1 className="heading">React Website</h1>
                        <p>
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
                </p>
                    </div>
                </Grid>
                <Grid item xs={12} md={4}>
                    <img src={coding} alt="coding" className="image3 mar-top"
                        data-aos="slide-left"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-once="true"
                    />
                </Grid>
                <Grid item xs={12} md={8}>
                    <div className="text mar-top"
                        data-aos="slide-up"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-once="true"
                    >
                        <h1 className="heading">React Website</h1>
                        <p>
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
                </p>

                    </div>
                </Grid>
                <Grid item xs={12} md={4}>
                    <img src={Freelancer} alt="Freelancer" className="image3 mar-top"
                        data-aos="slide-left"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-once="true"
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <img src={teacher} alt="status" style={{backgroundColor: 'blue'}} className="image1 mar-top"
                        data-aos="slide-up"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-once="true" />

                </Grid>
                <Grid item xs={12} md={8}>
                    <div className="text mar-top"
                        data-aos="slide-left"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-once="true"
                    >
                        <h1 className="heading">React Website</h1>
                        <p>
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
                </p>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div
                        data-aos="slide-left"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-once="true"
                    >
                        <Footer />
                    </div>
                </Grid>

            </Grid>
        </div>
    );
}

