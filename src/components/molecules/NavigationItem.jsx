import React from "react";
import { NavLink } from "react-router-dom";
import ApperIcon from "@/components/ApperIcon";
import { cn } from "@/utils/cn";

const NavigationItem = ({ 
  to, 
  icon, 
  children, 
  isLocked = false, 
  onClick, 
  className = "",
  mobile = false 
}) => {
  const baseClasses = cn(
    "nav-item flex items-center text-slate-300 hover:text-white font-medium relative",
    mobile ? "w-full justify-start py-3 px-4" : "",
    isLocked ? "nav-item-locked" : "",
    className
  );
  
  const content = (
    <>
      <ApperIcon name={icon} size={18} className="mr-3" />
      <span>{children}</span>
      {isLocked && (
        <ApperIcon 
          name="Lock" 
          size={14} 
          className="ml-auto text-slate-500 opacity-60" 
        />
      )}
    </>
  );
  
  if (isLocked) {
    return (
      <div className={baseClasses} onClick={onClick}>
        {content}
      </div>
    );
  }
  
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn(baseClasses, isActive ? "nav-item-active" : "")
      }
      onClick={onClick}
    >
      {content}
    </NavLink>
  );
};

export default NavigationItem;