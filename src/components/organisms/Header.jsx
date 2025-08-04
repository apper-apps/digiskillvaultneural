import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import ApperIcon from "@/components/ApperIcon";
import NavigationItem from "@/components/molecules/NavigationItem";
import RoleBadge from "@/components/molecules/RoleBadge";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-toastify";

const Header = ({ currentUser }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const navigationItems = [
    { path: "/", icon: "Home", label: "Home", requiredRoles: [] },
    { path: "/membership", icon: "Users", label: "Membership", requiredRoles: ["member", "both"] },
    { path: "/master", icon: "Crown", label: "Master", requiredRoles: ["master", "both"] },
    { path: "/money-insight", icon: "TrendingUp", label: "Money Insight", requiredRoles: [] },
    { path: "/reviews", icon: "Star", label: "Reviews", requiredRoles: [] }
  ];
  
  const checkAccess = (requiredRoles) => {
    if (currentUser.is_admin) return true;
    if (requiredRoles.length === 0) return true;
    return requiredRoles.includes(currentUser.role);
  };
  
  const handleLockedClick = (label, requiredRoles) => {
    const roleText = requiredRoles.join(" or ");
    toast.warning(`${label} requires ${roleText} access. Upgrade your membership to unlock this content!`);
  };
  
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  
  return (
    <>
      <header className="bg-surface/80 backdrop-blur-lg border-b border-slate-700/50 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center mr-3">
                    <ApperIcon name="GraduationCap" size={24} className="text-white" />
                  </div>
                  <h1 className="text-xl font-display font-bold gradient-text">
                    SkillVault
                  </h1>
                </div>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <div className="flex items-center space-x-1">
                {navigationItems.map((item) => {
                  const hasAccess = checkAccess(item.requiredRoles);
                  
                  return (
                    <NavigationItem
                      key={item.path}
                      to={item.path}
                      icon={item.icon}
                      isLocked={!hasAccess}
                      onClick={!hasAccess ? () => handleLockedClick(item.label, item.requiredRoles) : undefined}
                    >
                      {item.label}
                    </NavigationItem>
                  );
                })}
              </div>
            </nav>
            
            {/* User Info & Mobile Menu Button */}
            <div className="flex items-center space-x-4">
              <RoleBadge role={currentUser.role} isAdmin={currentUser.is_admin} />
              
              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors duration-200"
              >
                <ApperIcon name={isMobileMenuOpen ? "X" : "Menu"} size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>
      
      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 md:hidden"
              onClick={closeMobileMenu}
            />
            
            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-surface border-l border-slate-700/50 z-50 md:hidden"
            >
              <div className="p-6">
                {/* Mobile Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center mr-3">
                      <ApperIcon name="GraduationCap" size={20} className="text-white" />
                    </div>
                    <h2 className="text-lg font-display font-bold gradient-text">
                      SkillVault
                    </h2>
                  </div>
                  <button
                    onClick={closeMobileMenu}
                    className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors duration-200"
                  >
                    <ApperIcon name="X" size={18} />
                  </button>
                </div>
                
                {/* Mobile Navigation */}
                <nav className="space-y-2">
                  {navigationItems.map((item) => {
                    const hasAccess = checkAccess(item.requiredRoles);
                    
                    return (
                      <NavigationItem
                        key={item.path}
                        to={item.path}
                        icon={item.icon}
                        isLocked={!hasAccess}
                        mobile={true}
                        onClick={!hasAccess ? 
                          () => handleLockedClick(item.label, item.requiredRoles) : 
                          closeMobileMenu
                        }
                      >
                        {item.label}
                      </NavigationItem>
                    );
                  })}
                </nav>
                
                {/* User Info in Mobile */}
                <div className="mt-8 pt-6 border-t border-slate-700/50">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-400">Current Role:</span>
                    <RoleBadge role={currentUser.role} isAdmin={currentUser.is_admin} />
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;