import React from "react";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";

const Error = ({ message, onRetry, className = "" }) => {
  return (
    <div className={`flex flex-col items-center justify-center py-12 px-6 ${className}`}>
      <div className="card-elevated p-8 text-center max-w-md w-full">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-error/20 to-accent/20 flex items-center justify-center">
          <ApperIcon name="AlertTriangle" size={32} className="text-error" />
        </div>
        
        <h3 className="text-xl font-display font-semibold mb-2 text-slate-100">
          Something went wrong
        </h3>
        
        <p className="text-slate-400 mb-6 leading-relaxed">
          {message || "We encountered an error while loading the content. Please try again."}
        </p>
        
        {onRetry && (
          <Button 
            onClick={onRetry}
            className="bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600"
          >
            <ApperIcon name="RefreshCw" size={16} className="mr-2" />
            Try Again
          </Button>
        )}
      </div>
    </div>
  );
};

export default Error;