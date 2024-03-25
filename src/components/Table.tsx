import React from "react";
import BedsideTable from './BedsideTable';
import {MaterialProp} from "../../types";

const Table = ({material}: MaterialProp) =>{
    return <BedsideTable material={material} />;
};
export default Table;