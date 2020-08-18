import React from "react";
import PT from 'prop-types';
import './Header.css'

import { Link, useHistory } from 'react-router-dom';

import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosButton from '@material-ui/icons/ArrowBackIos'
import { iconProps } from '../../consts/icons';

const logoURL = `https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png`;

const Header = ({backBtn}) => {
    const history = useHistory();
    const backHandler = () => {
        history.replace(backBtn)
    };

    return(
        <div className='header'>
            {backBtn ? (
                <IconButton onClick={backHandler}>
                    <ArrowBackIosButton
                        className='header__icon'
                        fontSize={iconProps.fontSize}
                    />
                </IconButton>)
                : (
                    <IconButton>
                        <PersonIcon
                            className='header__icon'
                            fontSize={iconProps.fontSize}
                        />
                    </IconButton>
                )
            }
            <Link to='/'>
                <img
                    className='header__logo'
                    src={logoURL}
                    alt="tinder logo"
                />
            </Link>
            <Link to='/chats'>
                <IconButton>
                    <ForumIcon
                        className='header__icon'
                        fontSize={iconProps.fontSize}
                    />
                </IconButton>
            </Link>
        </div>
    )
};

Header.propTypes = {
    backBtn: PT.string,
}

export default Header;
