import React from "react";
import {useState} from "react";
import Table from './Table';
import {MaterialProp} from '../../types';


const Furniture = () =>{
    const [material, setMaterial] = useState("Mahogany");
    return <Table material = {material} />;
};
export default Furniture;