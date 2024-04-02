export type MaterialProp= {
    material: string;
};

export type CartProp= {
    item: number;
    itemName: string;
};
export type DeviceType ={
    deviceName:string;
    changeDeviceName: () => void;
};