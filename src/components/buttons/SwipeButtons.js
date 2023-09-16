import React from "react";
import "./SwipeButtons.css";
import { Close, Favorite, FlashOn, Replay, StarRate } from "@mui/icons-material"
import { IconButton } from "@mui/material";

function SwipeButtons() {
    return (
        <div className="swipeButtons">
            <IconButton className="swipeButtons__repeat">
                <Replay fontSize="large"/>
            </IconButton>
            <IconButton className="swipeButtons__left">
                <Close fontSize="large"/>
            </IconButton>
            <IconButton className="swipeButtons__star">
                <StarRate fontSize="large"/>
            </IconButton>
            <IconButton className="swipeButtons__right">
                <Favorite fontSize="large"/>
            </IconButton>
            <IconButton className="swipeButtons__lightning">
                <FlashOn fontSize="large"/>
            </IconButton>
        </div>
    );
}

export default SwipeButtons;
