import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: string;
  trendUp?: boolean;
  delay?: number;
  gradient?: string;
}

export const StatCard = ({
  title,
  value,
  icon: Icon,
  trend,
  trendUp,
  delay = 0,
  gradient = "from-primary/20 to-primary/5",
}: StatCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ scale: 1.02, y: -4 }}
      className="relative overflow-hidden rounded-xl bg-card border border-border p-6 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-50`} />
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 rounded-lg bg-background/50 backdrop-blur-sm">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          {trend && (
            <span
              className={`text-sm font-medium ${
                trendUp ? "text-success" : "text-destructive"
              }`}
            >
              {trendUp ? "↑" : "↓"} {trend}
            </span>
          )}
        </div>

        <div>
          <p className="text-sm text-muted-foreground mb-1">{title}</p>
          <motion.h3
            className="text-3xl font-bold text-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: delay + 0.2 }}
          >
            {value}
          </motion.h3>
        </div>
      </div>
    </motion.div>
  );
};
