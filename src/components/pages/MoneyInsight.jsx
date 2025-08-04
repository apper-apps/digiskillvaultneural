import React from "react";
import { useSelector } from "react-redux";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";
import { motion } from "framer-motion";
const MoneyInsight = () => {
  const { user: currentUser } = useSelector((state) => state.user);
  const insights = [
    {
      icon: "TrendingUp",
      title: "Investment Fundamentals",
      description: "Learn the basics of smart investing and portfolio management",
      category: "Investing",
      difficulty: "Beginner",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: "PiggyBank",
      title: "Budgeting Mastery",
      description: "Master personal finance and effective budgeting strategies",
      category: "Personal Finance",
      difficulty: "Beginner",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: "BarChart3",
      title: "Market Analysis",
      description: "Understand market trends and financial analysis techniques",
      category: "Analysis",
      difficulty: "Intermediate",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: "DollarSign",
      title: "Wealth Building",
      description: "Advanced strategies for long-term wealth accumulation",
      category: "Wealth",
      difficulty: "Advanced",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: "Shield",
      title: "Risk Management",
      description: "Protect your investments with smart risk management",
      category: "Risk",
      difficulty: "Intermediate",
      gradient: "from-red-500 to-rose-500"
    },
    {
      icon: "Coins",
      title: "Cryptocurrency",
      description: "Navigate the world of digital assets and blockchain",
      category: "Crypto",
      difficulty: "Advanced",
      gradient: "from-indigo-500 to-purple-500"
    }
  ];
  
  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Beginner":
        return "text-green-400 bg-green-500/20";
      case "Intermediate":
        return "text-yellow-400 bg-yellow-500/20";
      case "Advanced":
        return "text-red-400 bg-red-500/20";
      default:
        return "text-slate-400 bg-slate-500/20";
    }
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto">
          <ApperIcon name="TrendingUp" size={32} className="text-white" />
        </div>
        
        <h1 className="text-3xl md:text-4xl font-display font-bold gradient-text">
          Money Insight
        </h1>
        
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          Master financial literacy with our comprehensive resources on investing, budgeting, 
          wealth building, and smart money management strategies.
        </p>
      </div>
      
      {/* Quick Stats */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-6"
      >
        {[
          { label: "Total Lessons", value: "150+", icon: "BookOpen" },
          { label: "Expert Guides", value: "45", icon: "Users" },
          { label: "Success Stories", value: "2.3k", icon: "Trophy" },
          { label: "Avg. ROI Increase", value: "23%", icon: "TrendingUp" }
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 * index }}
            className="card-elevated p-6 text-center hover:scale-[1.02] transition-all duration-300"
          >
            <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mx-auto mb-3">
              <ApperIcon name={stat.icon} size={24} className="text-white" />
            </div>
            <div className="text-2xl font-display font-bold gradient-text mb-1">
              {stat.value}
            </div>
            <div className="text-sm text-slate-400">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>
      
      {/* Course Grid */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {insights.map((insight, index) => (
          <motion.div
            key={insight.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 * index }}
            className="card-elevated p-6 hover:scale-[1.02] transition-all duration-300 group relative overflow-hidden"
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${insight.gradient} opacity-5`} />
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${insight.gradient} bg-opacity-20 flex items-center justify-center`}>
                  <ApperIcon name={insight.icon} size={24} className="text-white" />
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(insight.difficulty)}`}>
                  {insight.difficulty}
                </span>
              </div>
              
              <h3 className="text-lg font-display font-semibold text-slate-100 mb-2">
                {insight.title}
              </h3>
              
              <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                {insight.description}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500 uppercase tracking-wide">
                  {insight.category}
                </span>
                <Button size="sm" variant="ghost" className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  Learn More
                  <ApperIcon name="ArrowRight" size={14} className="ml-1" />
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      {/* Financial Calculator Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="card-elevated p-8"
      >
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <ApperIcon name="Calculator" size={32} className="text-white" />
          </div>
          
          <h2 className="text-2xl font-display font-semibold gradient-text mb-2">
            Financial Tools & Calculators
          </h2>
          
          <p className="text-slate-400 max-w-2xl mx-auto">
            Use our interactive tools to plan your financial future and make informed investment decisions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { name: "Compound Interest", icon: "TrendingUp" },
            { name: "Retirement Planner", icon: "Calendar" },
            { name: "Debt Payoff", icon: "CreditCard" },
            { name: "Investment Return", icon: "BarChart3" }
          ].map((tool) => (
            <Button
              key={tool.name}
              variant="secondary"
              className="h-auto p-4 flex-col hover:bg-slate-700"
            >
              <ApperIcon name={tool.icon} size={24} className="mb-2 text-primary-400" />
              <span className="text-sm">{tool.name}</span>
            </Button>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MoneyInsight;