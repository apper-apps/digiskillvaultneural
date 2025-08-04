import React from "react";
import { useSelector } from "react-redux";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";
import Badge from "@/components/atoms/Badge";
import { motion } from "framer-motion";
const Reviews = () => {
  const { user: currentUser } = useSelector((state) => state.user);
  
  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Product Manager",
      memberLevel: "both",
      rating: 5,
      content: "SkillVault transformed my career! The master classes gave me the strategic thinking skills I needed to lead my team effectively. The ROI on my membership has been incredible.",
      course: "Strategic Leadership Program",
      avatar: "SC",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      name: "Marcus Johnson",
      role: "Financial Analyst",
      memberLevel: "member",
      rating: 5,
      content: "The Money Insight section is gold! I've increased my investment returns by 35% using the strategies I learned here. The content is practical and actionable.",
      course: "Investment Fundamentals",
      avatar: "MJ",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      role: "Startup Founder",
      memberLevel: "master",
      rating: 5,
      content: "As a founder, the master-level content has been invaluable. The advanced business strategies and financial insights have helped me scale my company to 7 figures.",
      course: "Advanced Business Strategy",
      avatar: "ER",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 4,
      name: "David Kim",
      role: "Software Engineer",
      memberLevel: "member",
      rating: 4,
      content: "Great platform for continuous learning. The community aspect is fantastic, and the courses are well-structured. I've gained skills that directly impact my work.",
      course: "Technical Leadership",
      avatar: "DK",
      gradient: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      name: "Priya Patel",
      role: "Marketing Director",
      memberLevel: "both",
      rating: 5,
      content: "The combination of member and master content gives me everything I need. From foundational skills to cutting-edge strategies, SkillVault covers it all brilliantly.",
      course: "Digital Marketing Mastery",
      avatar: "PP",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      id: 6,
      name: "James Wilson",
      role: "Consultant",
      memberLevel: "master",
      rating: 5,
      content: "The quality of instruction is outstanding. These aren't just courses, they're career accelerators. My clients have noticed the difference in my strategic approach.",
      course: "Consulting Excellence",
      avatar: "JW",
      gradient: "from-teal-500 to-green-500"
    }
  ];
  
  const stats = [
    { label: "Student Success Rate", value: "94%", icon: "TrendingUp" },
    { label: "Average Rating", value: "4.8/5", icon: "Star" },
    { label: "Career Advancement", value: "78%", icon: "Trophy" },
    { label: "Salary Increase", value: "$15k", icon: "DollarSign" }
  ];
  
  const getRoleBadgeVariant = (memberLevel) => {
    switch (memberLevel) {
      case "member":
        return "member";
      case "master":
        return "master";
      case "both":
        return "both";
      default:
        return "default";
    }
  };
  
  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <ApperIcon
        key={i}
        name="Star"
        size={16}
        className={i < rating ? "text-yellow-400 fill-current" : "text-slate-600"}
      />
    ));
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
        <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto">
          <ApperIcon name="Star" size={32} className="text-white" />
        </div>
        
        <h1 className="text-3xl md:text-4xl font-display font-bold gradient-text">
          Success Stories & Reviews
        </h1>
        
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          See how SkillVault has transformed careers and accelerated professional growth 
          for thousands of learners worldwide.
        </p>
      </div>
      
      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6"
      >
        {stats.map((stat, index) => (
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
      
      {/* Testimonials Grid */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 * index }}
            className="card-elevated p-6 hover:scale-[1.02] transition-all duration-300 relative overflow-hidden"
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${testimonial.gradient} opacity-5`} />
            
            <div className="relative z-10">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${testimonial.gradient} flex items-center justify-center mr-3`}>
                    <span className="text-white font-bold text-sm">
                      {testimonial.avatar}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-slate-100">
                      {testimonial.name}
                    </h3>
                    <p className="text-slate-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <Badge variant={getRoleBadgeVariant(testimonial.memberLevel)}>
                  {testimonial.memberLevel === "both" ? "Premium" : testimonial.memberLevel}
                </Badge>
              </div>
              
              {/* Rating */}
              <div className="flex items-center mb-4">
                {renderStars(testimonial.rating)}
                <span className="ml-2 text-sm text-slate-400">
                  {testimonial.rating}/5
                </span>
              </div>
              
              {/* Content */}
              <blockquote className="text-slate-300 leading-relaxed mb-4">
                "{testimonial.content}"
              </blockquote>
              
              {/* Course */}
              <div className="flex items-center text-sm text-slate-500">
                <ApperIcon name="BookOpen" size={14} className="mr-1" />
                <span>{testimonial.course}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="card-elevated p-8 text-center"
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-display font-semibold gradient-text mb-4">
            Ready to Write Your Success Story?
          </h2>
          
          <p className="text-slate-400 mb-6 leading-relaxed">
            Join thousands of professionals who have accelerated their careers with SkillVault. 
            Start your learning journey today and become our next success story.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600">
              <ApperIcon name="ArrowRight" size={16} className="mr-2" />
              Start Learning Today
            </Button>
            <Button variant="secondary">
              <ApperIcon name="MessageCircle" size={16} className="mr-2" />
              Share Your Story
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Reviews;