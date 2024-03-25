import React from "react";
import {MaterialProp} from '../../types';

const Drawer = ({material}: MaterialProp) =>{
    return <div id = "drawer">{material}</div>;
};
export default Drawer;