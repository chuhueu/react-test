import React, { useEffect, useState } from 'react';
import axios from '../axios';
import { Link } from 'react-router-dom';
import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import "./home.css";
import { useDispatch } from 'react-redux';
import { logout } from '../redux/userSlice';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
const Home = () => {
    const [readMore, setReadMore] = useState(false);
    const [banner, setBanner] = useState([]);
    const user = JSON.parse(localStorage.getItem("user"));
    const dispatch = useDispatch();
    useEffect(() => {
        const getBanner = async () => {
            try {
                const res = await axios.get("/movies/random");
                setBanner(res.data[0]);
            } catch (error) {
                console.log(error);
            }
        }
        getBanner();
    }, []);
    const truncate = (string, n) => {
        return string?.length > n ? string.substr(0, n - 1) + '...' : string;
    }
    return (
        <header className="featured" style={{
            backgroundSize: "cover",
            backgroundImage: `url("${banner.imgBanner}")`,
            backgroundPosition: "center center",
        }}>
            <div className="nav">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="" />
                <Link to="/register">
                    {!user ?
                        <button className="buttonLogin">Register</button> :
                        <button className="buttonLogin" onClick={() => dispatch(logout())}>Log out</button>}

                </Link>
            </div>
            <div className="info">
                <h1 className="banner_title">{banner.title}</h1>
                <span className="desc">
                    {readMore ? banner.description : truncate(banner.description, 150)}
                    <button onClick={() => setReadMore(!readMore)}>
                        {readMore ? "show less" : "read more"}
                    </button>
                </span>
                <div className="buttons">
                    <Popup
                        trigger={
                            <button className="play">
                                <PlayArrow />
                                <span>Play</span>
                            </button>}
                        modal
                        nested
                    >
                        {close => (
                            <div className="modal">
                                <button className="close" onClick={close}>
                                    &times;
                                </button>
                                <div className="header">Oops!</div>
                                <div className="content">
                                    You have to pay one of the movie packages!
                                </div>
                                <div className="actions">
                                    <Link to="/register"
                                        className="button"
                                    >
                                        Register
                                    </Link>
                                </div>
                            </div>
                        )}
                    </Popup>
                    <Popup
                        trigger={
                            <button className="more">
                                <InfoOutlined />
                                <span>Info</span>
                            </button>}
                        modal
                        nested
                    >
                        {close => (
                            <div className="modal">
                                <button className="close" onClick={close}>
                                    &times;
                                </button>
                                <div className="header">Oops!</div>
                                <div className="content">
                                    You are not logged in. Please login to use this feature
                                </div>
                                <div className="actions">
                                    <Link to="/register"
                                        className="button"
                                    >
                                        Register
                                    </Link>
                                </div>
                            </div>
                        )}
                    </Popup>
                </div>
            </div>
        </header>
    )
}

export default Home
