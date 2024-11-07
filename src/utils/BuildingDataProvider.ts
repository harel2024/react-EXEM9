
import { useState, useEffect } from 'react';
import buildingDataJson from '../data/building.json';

interface Floor {
  name: string;
  soldiers: number;
  purpose: string;
  description: string;
  activity: string;
}

const useBuildingData = () => {
  const [buildingData, setBuildingData] = useState<Floor[]>([]);

  useEffect(() => {
  
    setBuildingData(buildingDataJson);
  }, []);

 
  const getFloorByIndex = (floorIndex: number): Floor | undefined => {
    return buildingData[floorIndex];
  };

  // 
  const getListOfActivities = (): string[] => {
    const activities = buildingData.map(floor => floor.activity);
    return Array.from(new Set(activities)); 
  };

  return {
    buildingData,
    getFloorByIndex,
    getListOfActivities,
  };
};

export default useBuildingData;













// import { useState, useEffect } from 'react';

// interface Floor {
//   name: string;
//   soldiers: number;
//   purpose: string;
//   description: string;
//   activity:string
// }

// const useBuildingData = () => {
//   const [buildingData, setBuildingData] = useState<Floor[]>([]);

//   //FILL HERE LOGIC TO SET THE BUILDING DATA


//   const getFloorByIndex = (floorIndex:number): Floor |undefined =>
//   {
//     //FILL HERE
//   }
//   const getListOfActivities = ():string[]=>{
//     //FILL HERE
//   }
//   return {
//     buildingData,
//     getFloorByIndex,
//     getListOfActivities
//   };
// };

// export default useBuildingData;




// src/utils/BuildingDataProvider.ts