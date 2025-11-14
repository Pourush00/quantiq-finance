import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Shield, Zap, ArrowRight } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const roiProjection = [
  { month: "Month 1", safe: 1000, smart: 1000 },
  { month: "Month 6", safe: 1300, smart: 1450 },
  { month: "Month 12", safe: 1620, smart: 2100 },
  { month: "Month 18", safe: 1950, smart: 3000 },
  { month: "Month 24", safe: 2300, smart: 4200 },
];

const investmentPlans = [
  {
    title: "Safe Investment Plan",
    description: "Low-risk options with steady returns",
    icon: Shield,
    color: "text-success",
    gradient: "from-success/20 to-success/5",
    risk: "Low",
    riskColor: "bg-success/20 text-success",
    roi: "8-10% annually",
    options: [
      "Fixed Deposits (FD)",
      "Government Bonds",
      "Debt Mutual Funds",
    ],
    recommendation: "Invest ₹10,000/month",
  },
  {
    title: "Smart Investment Plan",
    description: "Balanced risk with higher growth potential",
    icon: Zap,
    color: "text-primary",
    gradient: "from-primary/20 to-primary/5",
    risk: "Medium",
    riskColor: "bg-warning/20 text-warning",
    roi: "12-18% annually",
    options: [
      "Equity Mutual Funds",
      "Index Funds",
      "Hybrid Funds",
    ],
    recommendation: "Invest ₹4,000/month",
  },
];

const Investments = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <div>
        <h1 className="text-3xl font-bold text-foreground">
          Investment Recommendations
        </h1>
        <p className="text-muted-foreground">
          AI-powered investment suggestions based on your financial profile
        </p>
      </div>

      {/* Investment Plans */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {investmentPlans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <Card
              className={`p-6 bg-gradient-to-br ${plan.gradient} border-border relative overflow-hidden h-full`}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-background/50">
                    <plan.icon className={`w-6 h-6 ${plan.color}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      {plan.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {plan.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Risk & ROI */}
              <div className="flex gap-4 mb-6">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Risk Level</p>
                  <Badge className={plan.riskColor}>{plan.risk}</Badge>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">
                    Expected ROI
                  </p>
                  <Badge className="bg-primary/20 text-primary">
                    {plan.roi}
                  </Badge>
                </div>
              </div>

              {/* Investment Options */}
              <div className="mb-6">
                <p className="text-sm font-semibold text-foreground mb-3">
                  Investment Options:
                </p>
                <ul className="space-y-2">
                  {plan.options.map((option, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {option}
                    </li>
                  ))}
                </ul>
              </div>

              {/* AI Recommendation */}
              <div className="bg-background/50 rounded-lg p-4 mb-4">
                <p className="text-xs text-muted-foreground mb-1">
                  AI Recommendation
                </p>
                <p className={`font-bold ${plan.color}`}>
                  {plan.recommendation}
                </p>
              </div>

              {/* CTA Button */}
              <Button
                className={`w-full bg-gradient-to-r ${
                  index === 0
                    ? "from-success to-success/80"
                    : "from-primary to-primary/80"
                } hover:opacity-90 transition-opacity`}
              >
                Invest Now
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>

              {/* Decorative glow */}
              <div
                className={`absolute -bottom-20 -right-20 w-40 h-40 ${
                  index === 0 ? "bg-success" : "bg-primary"
                } rounded-full blur-3xl opacity-20`}
              />
            </Card>
          </motion.div>
        ))}
      </div>

      {/* ROI Projection Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Card className="p-6 bg-card border-border">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-semibold text-foreground">
              24-Month ROI Projection
            </h3>
          </div>
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={roiProjection}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
                formatter={(value: number) => `₹${value.toLocaleString()}`}
              />
              <Line
                type="monotone"
                dataKey="safe"
                stroke="hsl(var(--success))"
                strokeWidth={3}
                dot={{ fill: "hsl(var(--success))", r: 6 }}
                name="Safe Plan"
              />
              <Line
                type="monotone"
                dataKey="smart"
                stroke="hsl(var(--primary))"
                strokeWidth={3}
                dot={{ fill: "hsl(var(--primary))", r: 6 }}
                name="Smart Plan"
              />
            </LineChart>
          </ResponsiveContainer>
          <div className="mt-4 p-4 bg-secondary/30 rounded-lg">
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">
                Smart Investment Plan
              </span>{" "}
              could potentially grow your ₹1,000 initial investment to ₹4,200
              in 24 months, compared to ₹2,300 with the Safe Investment Plan.
            </p>
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default Investments;
