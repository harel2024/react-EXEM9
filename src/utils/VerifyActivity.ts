import roles from "../data/roles.json";

interface IuseActivityParams {
  activity: string;
  role: string;
  activities: string[];
}

const useIsVerified = ({ activity, role, activities }: IuseActivityParams) => {
  const userRoleActivities = roles[roles.indexOf(role) + 1];
  
  
  if (userRoleActivities.includes(activity)) {
    return true;
  }

  return false; 
};

export default useIsVerified;

