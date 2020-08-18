import React from 'react';
import './Swipe-Buttons.css';

import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from "@material-ui/core/IconButton";

import { iconProps } from "../../consts/icons";

const SwipeButtons = () => {
    return (
        <div className='swipeButtons'>
            <IconButton className='swipeButtons__replay'>
                <ReplayIcon fontSize={iconProps.fontSize} />
            </IconButton>
            <IconButton className='swipeButtons__left'>
                <CloseIcon fontSize={iconProps.fontSize} />
            </IconButton>
            <IconButton className='swipeButtons__starRate'>
                <StarRateIcon fontSize={iconProps.fontSize} />
            </IconButton>
            <IconButton className='swipeButtons__right'>
                <FavoriteIcon fontSize={iconProps.fontSize} />
            </IconButton>
            <IconButton className='swipeButtons__lighting'>
                <FlashOnIcon fontSize={iconProps.fontSize} />
            </IconButton>
        </div>
    );
};

export default SwipeButtons;
