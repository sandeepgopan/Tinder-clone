import React from 'react'
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from '@material-ui/core/IconButton';

import './SwipeButtons.css';


const SwipeButtons = () => {
    return (
        <div className = "swipeButtons">
            <IconButton className='swipebuttons_repeat'>
           <ReplayIcon fontSize ='large'></ReplayIcon>
           </IconButton>
           <IconButton className='swipebuttons_close'>
           <CloseIcon fontSize ='large'></CloseIcon>
           </IconButton>
           <IconButton className='swipebuttons_star'>
           <StarRateIcon fontSize='large'></StarRateIcon>
           </IconButton>
           <IconButton className='swipebuttons_right'>
           <FavoriteIcon fontSize='large'></FavoriteIcon>
           </IconButton>
           <IconButton className='swipebuttons_lightning'>
           <FlashOnIcon fontSize ='large'></FlashOnIcon>
           </IconButton>
        </div>
    )
}

export default SwipeButtons
