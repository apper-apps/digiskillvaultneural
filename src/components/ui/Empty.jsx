import React from "react";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";

const Empty = ({ 
  icon = "BookOpen", 
  title = "No content available", 
  description = "There's nothing to show here yet.", 
  actionLabel,
  onAction,
  className = "" 
}) => {
  return (
    <div className={`flex flex-col items-center justify-center py-16 px-6 ${className}`}>
      <div className="text-center max-w-md">
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-primary-500/20 to-secondary-500/20 flex items-center justify-center">
          <ApperIcon name={icon} size={40} className="text-primary-400" />
        </div>
        
        <h3 className="text-2xl font-display font-semibold mb-3 gradient-text">
          {title}
        </h3>
        
        <p className="text-slate-400 mb-8 leading-relaxed">
          {description}
        </p>
        
        {actionLabel && onAction && (
          <Button 
            onClick={onAction}
            className="bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600"
          >
            {actionLabel}
          </Button>
        )}
      </div>
    </div>
  );
};

export default Empty;