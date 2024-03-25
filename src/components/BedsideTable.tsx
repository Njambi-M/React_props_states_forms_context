import React from "react";
import {useState} from "react";
import Drawer from './Drawer';
import {MaterialProp} from '../../types';


const BedsideTable = ({material}: MaterialProp) =>{
    return <Drawer material={material} />;
};
export default BedsideTable;