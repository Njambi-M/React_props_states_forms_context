import React, {useContext, createContext, useState} from "react";
import { DeviceType } from "../../types";

const DeviceNameContext = createContext<DeviceType>({} as DeviceType);


const DeviceContext = () => {
    const [deviceName, setDeviceName] = useState("Laptop");
    const changeDeviceName = () => {deviceName === "Laptop" ? setDeviceName("Tablet") : setDeviceName("Laptop")};    

    return(
        <DeviceNameContext.Provider value = {{deviceName, changeDeviceName}}>
            <Electronic/>
        </DeviceNameContext.Provider>
    );

};

const Electronic = () => {

    const {deviceName, changeDeviceName} = useContext(DeviceNameContext);
    return(
        <div>
            <p>The current device is {deviceName}. Click the button to change device</p>
            <button onClick = {changeDeviceName}>Change device name</button>

        </div>

    );
};


export default DeviceContext;
