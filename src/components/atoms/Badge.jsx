import React from "react";
import { cn } from "@/utils/cn";

const Badge = React.forwardRef(({ 
  children, 
  className = "", 
  variant = "default",
  ...props 
}, ref) => {
  const baseClasses = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium";
  
  const variants = {
    default: "bg-slate-700 text-slate-200",
    primary: "bg-gradient-to-r from-primary-500/20 to-secondary-500/20 text-primary-300 border border-primary-500/30",
    success: "bg-success/20 text-success border border-success/30",
    warning: "bg-warning/20 text-warning border border-warning/30",
    error: "bg-error/20 text-error border border-error/30",
    free: "bg-slate-600/20 text-slate-400 border border-slate-500/30",
    member: "bg-gradient-to-r from-primary-500/20 to-blue-500/20 text-blue-300 border border-blue-500/30",
    master: "bg-gradient-to-r from-accent-500/20 to-purple-500/20 text-purple-300 border border-purple-500/30",
    both: "bg-gradient-to-r from-primary-500/20 via-accent-500/20 to-secondary-500/20 text-accent-300 border border-accent-500/30"
  };
  
  return (
    <span
      ref={ref}
      className={cn(baseClasses, variants[variant], className)}
      {...props}
    >
      {children}
    </span>
  );
});

Badge.displayName = "Badge";

export default Badge;