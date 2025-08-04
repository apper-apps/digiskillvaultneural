import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";
import RoleBadge from "@/components/molecules/RoleBadge";
import Button from "@/components/atoms/Button";

// Utility functions
const checkAccess = (currentUser, requiredRoles) => {
  if (!currentUser) return false;
  if (currentUser.isAdmin) return true;
  if (requiredRoles.length === 0) return true;
  return requiredRoles.includes(currentUser.role);
};

const getAccessText = (requiredRoles) => {
  if (requiredRoles.length === 0) return "Available to all users";
  return `Requires ${requiredRoles.join(" or ")} access`;
};

const Home = () => {
  const { user: currentUser } = useSelector((state) => state.user);
  
  const features = [
    {
      icon: "Users",
      title: "Membership Content",
      description: "Access exclusive member-only learning materials and resources.",
      requiredRole: ["member", "both"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: "Crown",
      title: "Master Classes",
      description: "Advanced courses and expert-level content for skill mastery.",
      requiredRole: ["master", "both"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: "TrendingUp",
      title: "Money Insight",
      description: "Financial wisdom and investment strategies for wealth building.",
      requiredRole: [],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: "Star",
      title: "Reviews & Feedback",
      description: "Community reviews and success stories from our learners.",
      requiredRole: [],
      gradient: "from-orange-500 to-red-500"
    }
  ];
  
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-6"
      >
        <div className="space-y-4">
          <div className="flex items-center justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mr-4">
              <ApperIcon name="GraduationCap" size={40} className="text-white" />
            </div>
            <div className="text-left">
              <h1 className="text-4xl md:text-5xl font-display font-bold gradient-text">
                Welcome to SkillVault
              </h1>
              <p className="text-lg text-slate-400 mt-2">
                Your role-based learning hub for professional growth
              </p>
            </div>
          </div>
          
<div className="flex items-center justify-center space-x-4">
            <span className="text-slate-400">Your current access level:</span>
            {currentUser && <RoleBadge role={currentUser.role} isAdmin={currentUser.isAdmin} />}
          </div>
        </div>
        
        <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Discover curated learning experiences tailored to your membership level. 
          Unlock premium content as you advance your skills and career.
        </p>
      </motion.div>
      
      {/* Features Grid */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
{features.map((feature, index) => {
          const hasAccess = checkAccess(currentUser, feature.requiredRole);
          
          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className={`card-elevated p-6 relative overflow-hidden group hover:scale-[1.02] transition-all duration-300 ${
                hasAccess ? "hover:shadow-xl" : "opacity-75"
              }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-5`} />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.gradient} bg-opacity-20 flex items-center justify-center`}>
                    <ApperIcon name={feature.icon} size={24} className="text-white" />
                  </div>
                  {!hasAccess && (
                    <ApperIcon name="Lock" size={20} className="text-slate-500" />
                  )}
                </div>
                
                <h3 className="text-xl font-display font-semibold text-slate-100 mb-2">
                  {feature.title}
                </h3>
                
                <p className="text-slate-400 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">
                    {getAccessText(feature.requiredRole)}
                  </span>
                  
                  {hasAccess ? (
                    <ApperIcon name="Check" size={16} className="text-success" />
                  ) : (
                    <span className="text-xs text-accent-400 font-medium">
                      Upgrade to unlock
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
      
      {/* Role Progression Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="card-elevated p-8 text-center"
      >
        <h2 className="text-2xl font-display font-semibold gradient-text mb-4">
          Unlock Your Learning Potential
        </h2>
        
        <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
          Progress through our membership tiers to access advanced content, 
          exclusive resources, and expert-level courses designed to accelerate your growth.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {[
            { role: "free", icon: "User", label: "Free", description: "Basic access" },
            { role: "member", icon: "Users", label: "Member", description: "Community content" },
            { role: "master", icon: "Crown", label: "Master", description: "Expert courses" },
            { role: "both", icon: "Star", label: "Premium", description: "Full access" }
          ].map((tier) => (
            <div
              key={tier.role}
className={`p-4 rounded-lg border transition-all duration-200 ${
                currentUser?.role === tier.role
                  ? "border-primary-500 bg-primary-500/10"
                  : "border-slate-700 hover:border-slate-600"
              }`}
            >
              <ApperIcon name={tier.icon} size={32} className="mx-auto mb-2 text-primary-400" />
              <h4 className="font-medium text-slate-200 mb-1">{tier.label}</h4>
              <p className="text-sm text-slate-500">{tier.description}</p>
            </div>
          ))}
        </div>
        
{currentUser?.role === "free" && (
          <Button className="bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600">
            <ApperIcon name="ArrowRight" size={16} className="mr-2" />
            Upgrade Your Access
          </Button>
        )}
      </motion.div>
    </div>
  );
};

export default Home;