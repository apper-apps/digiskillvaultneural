import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";
import Empty from "@/components/ui/Empty";
import Button from "@/components/atoms/Button";
const Master = () => {
const { user: currentUser } = useSelector((state) => state.user);
  const hasAccess = currentUser?.isAdmin || ["master", "both"].includes(currentUser?.role);
  if (!hasAccess) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Empty
          icon="Crown"
          title="Master Access Required"
          description="This is our most advanced section, containing expert-level courses and master classes. Upgrade to Master level to access cutting-edge content and advanced learning paths."
          actionLabel="Upgrade to Master"
          onAction={() => console.log("Upgrade to master")}
        />
      </motion.div>
    );
  }
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto">
          <ApperIcon name="Crown" size={32} className="text-white" />
        </div>
        
        <h1 className="text-3xl md:text-4xl font-display font-bold gradient-text">
          Master Classes
        </h1>
        
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          Welcome to the pinnacle of learning. Access expert-level content, advanced strategies, 
          and masterclasses designed for professionals ready to excel.
        </p>
      </div>
      
      {/* Master Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            icon: "Zap",
            title: "Advanced Strategies",
            description: "Expert-level techniques and advanced methodologies",
            gradient: "from-yellow-500 to-orange-500"
          },
          {
            icon: "Target",
            title: "Precision Training",
            description: "Focused, high-impact learning for specific outcomes",
            gradient: "from-red-500 to-pink-500"
          },
          {
            icon: "TrendingUp",
            title: "Performance Mastery",
            description: "Maximize your potential with proven success frameworks",
            gradient: "from-green-500 to-teal-500"
          },
          {
            icon: "Brain",
            title: "Expert Insights",
            description: "Learn from industry leaders and top performers",
            gradient: "from-purple-500 to-indigo-500"
          },
          {
            icon: "Award",
            title: "Certification Paths",
            description: "Earn recognized credentials and master-level certificates",
            gradient: "from-blue-500 to-cyan-500"
          },
          {
            icon: "Rocket",
            title: "Innovation Labs",
            description: "Cutting-edge content and emerging industry trends",
            gradient: "from-pink-500 to-rose-500"
          }
        ].map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 * index }}
            className="card-elevated p-6 hover:scale-[1.02] transition-all duration-300"
          >
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.gradient} bg-opacity-20 flex items-center justify-center mb-4`}>
              <ApperIcon name={feature.icon} size={24} className="text-white" />
            </div>
            
            <h3 className="text-lg font-display font-semibold text-slate-100 mb-2">
              {feature.title}
            </h3>
            
            <p className="text-slate-400 text-sm leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
      
      {/* Master Class Preview */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="card-elevated p-8"
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
              <ApperIcon name="Play" size={24} className="text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-display font-semibold gradient-text">
                Master Class Library
              </h2>
              <p className="text-slate-400">
                Exclusive content for masters and experts
              </p>
            </div>
          </div>
          <Button>
            <ApperIcon name="ArrowRight" size={16} className="mr-2" />
            Browse All
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            "Advanced Leadership Strategies",
            "Innovation and Disruption",
            "Strategic Decision Making",
            "High-Performance Team Building"
          ].map((title, index) => (
            <div key={title} className="flex items-center p-4 bg-slate-800/50 rounded-lg hover:bg-slate-800/70 transition-colors duration-200">
              <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center mr-3">
                <span className="text-xs font-bold text-white">{index + 1}</span>
              </div>
              <span className="text-slate-200 font-medium">{title}</span>
              <ApperIcon name="ChevronRight" size={16} className="ml-auto text-slate-500" />
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Master;