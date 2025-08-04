import React from "react";
import Badge from "@/components/atoms/Badge";
import ApperIcon from "@/components/ApperIcon";

const RoleBadge = ({ role, isAdmin, className = "" }) => {
  const getRoleConfig = (role, isAdmin) => {
    if (isAdmin) {
      return {
        variant: "error",
        icon: "Shield",
        label: "Admin"
      };
    }
    
    switch (role) {
      case "free":
        return {
          variant: "free",
          icon: "User",
          label: "Free"
        };
      case "member":
        return {
          variant: "member",
          icon: "Users",
          label: "Member"
        };
      case "master":
        return {
          variant: "master",
          icon: "Crown",
          label: "Master"
        };
      case "both":
        return {
          variant: "both",
          icon: "Star",
          label: "Premium"
        };
      default:
        return {
          variant: "default",
          icon: "User",
          label: "Unknown"
        };
    }
  };
  
  const config = getRoleConfig(role, isAdmin);
  
  return (
    <Badge variant={config.variant} className={className}>
      <ApperIcon name={config.icon} size={12} className="mr-1" />
      {config.label}
    </Badge>
  );
};

export default RoleBadge;