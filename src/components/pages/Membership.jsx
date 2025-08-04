import React from "react";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";
import Empty from "@/components/ui/Empty";
import { motion } from "framer-motion";

const Membership = ({ currentUser }) => {
  const hasAccess = currentUser.is_admin || ["member", "both"].includes(currentUser.role);
  
  if (!hasAccess) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Empty
          icon="Lock"
          title="Member Access Required"
          description="This section contains exclusive content for members. Upgrade your account to access premium learning materials, community discussions, and member-only resources."
          actionLabel="Upgrade to Member"
          onAction={() => console.log("Upgrade to member")}
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
        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto">
          <ApperIcon name="Users" size={32} className="text-white" />
        </div>
        
        <h1 className="text-3xl md:text-4xl font-display font-bold gradient-text">
          Membership Hub
        </h1>
        
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          Welcome to your exclusive member area. Access premium content, connect with the community, 
          and unlock advanced learning resources.
        </p>
      </div>
      
      {/* Member Benefits */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            icon: "BookOpen",
            title: "Premium Courses",
            description: "Access to member-exclusive courses and learning paths",
            gradient: "from-blue-500 to-cyan-500"
          },
          {
            icon: "MessageCircle",
            title: "Community Access",
            description: "Join discussions with fellow members and mentors",
            gradient: "from-purple-500 to-pink-500"
          },
          {
            icon: "Download",
            title: "Resource Library",
            description: "Download exclusive templates, guides, and materials",
            gradient: "from-green-500 to-emerald-500"
          }
        ].map((benefit, index) => (
          <motion.div
            key={benefit.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 * index }}
            className="card-elevated p-6 hover:scale-[1.02] transition-all duration-300"
          >
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${benefit.gradient} bg-opacity-20 flex items-center justify-center mb-4`}>
              <ApperIcon name={benefit.icon} size={24} className="text-white" />
            </div>
            
            <h3 className="text-xl font-display font-semibold text-slate-100 mb-2">
              {benefit.title}
            </h3>
            
            <p className="text-slate-400 leading-relaxed">
              {benefit.description}
            </p>
          </motion.div>
        ))}
      </div>
      
      {/* Coming Soon Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="card-elevated p-8 text-center"
      >
        <ApperIcon name="Sparkles" size={48} className="mx-auto mb-4 text-primary-400" />
        
        <h2 className="text-2xl font-display font-semibold gradient-text mb-4">
          Member Content Coming Soon
        </h2>
        
        <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
          We're building amazing member-exclusive content just for you. Get ready for premium courses, 
          interactive workshops, and exclusive community features.
        </p>
        
        <Button variant="secondary">
          <ApperIcon name="Bell" size={16} className="mr-2" />
          Notify Me When Ready
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default Membership;