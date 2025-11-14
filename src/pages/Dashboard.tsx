import { motion } from "framer-motion";
import { StatCard } from "@/components/ui/stat-card";
import {
  TrendingUp,
  TrendingDown,
  Wallet,
  Lightbulb,
  ArrowUpRight,
} from "lucide-react";
import {
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { Card } from "@/components/ui/card";

const monthlyData = [
  { month: "Jan", expense: 15000, savings: 5000 },
  { month: "Feb", expense: 18000, savings: 4500 },
  { month: "Mar", expense: 16000, savings: 6000 },
  { month: "Apr", expense: 14000, savings: 7000 },
  { month: "May", expense: 17000, savings: 5500 },
  { month: "Jun", expense: 15500, savings: 6500 },
];

const categoryData = [
  { name: "Food", value: 4500, color: "hsl(var(--chart-1))" },
  { name: "Transport", value: 2000, color: "hsl(var(--chart-2))" },
  { name: "Shopping", value: 3000, color: "hsl(var(--chart-3))" },
  { name: "Bills", value: 3500, color: "hsl(var(--chart-4))" },
  { name: "Others", value: 2000, color: "hsl(var(--chart-5))" },
];

const aiSuggestions = [
  {
    title: "Reduce dining expenses",
    description: "You can save ₹2,000/month by cooking more at home",
    icon: "🍽️",
  },
  {
    title: "Smart investment opportunity",
    description: "You can safely invest ₹4,000 this month in mutual funds",
    icon: "💰",
  },
  {
    title: "Optimize subscriptions",
    description: "Cancel unused subscriptions to save ₹800/month",
    icon: "📱",
  },
];

const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          title="Total Income"
          value="₹45,000"
          icon={TrendingUp}
          trend="12%"
          trendUp={true}
          delay={0}
          gradient="from-success/20 to-success/5"
        />
        <StatCard
          title="Total Expense"
          value="₹28,500"
          icon={TrendingDown}
          trend="8%"
          trendUp={false}
          delay={0.1}
          gradient="from-destructive/20 to-destructive/5"
        />
        <StatCard
          title="Total Savings"
          value="₹16,500"
          icon={Wallet}
          trend="15%"
          trendUp={true}
          delay={0.2}
          gradient="from-primary/20 to-primary/5"
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Line Chart */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="p-6 bg-card border-border">
            <h3 className="text-lg font-semibold mb-4 text-foreground">
              Monthly Trends
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="expense"
                  stroke="hsl(var(--destructive))"
                  strokeWidth={3}
                  dot={{ fill: "hsl(var(--destructive))" }}
                />
                <Line
                  type="monotone"
                  dataKey="savings"
                  stroke="hsl(var(--success))"
                  strokeWidth={3}
                  dot={{ fill: "hsl(var(--success))" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </motion.div>

        {/* Pie Chart */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="p-6 bg-card border-border">
            <h3 className="text-lg font-semibold mb-4 text-foreground">
              Expense Categories
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </Card>
        </motion.div>
      </div>

      {/* Financial Health Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <Card className="p-6 bg-card border-border">
          <h3 className="text-lg font-semibold mb-4 text-foreground">
            Financial Health
          </h3>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Status</span>
              <span className="text-success font-medium">Healthy 💚</span>
            </div>
            <div className="w-full bg-secondary rounded-full h-3 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-success to-primary rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "75%" }}
                transition={{ duration: 1, delay: 0.6 }}
              />
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              You're spending 63% of your income. Great job managing your
              finances!
            </p>
          </div>
        </Card>
      </motion.div>

      {/* AI Suggestions */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Lightbulb className="w-6 h-6 text-accent" />
          <h3 className="text-lg font-semibold text-foreground">
            AI Suggestions for You
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {aiSuggestions.map((suggestion, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              whileHover={{ scale: 1.03, rotateY: 5 }}
              className="bg-gradient-to-br from-card to-secondary/30 p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 cursor-pointer"
            >
              <div className="text-4xl mb-3">{suggestion.icon}</div>
              <h4 className="font-semibold text-foreground mb-2">
                {suggestion.title}
              </h4>
              <p className="text-sm text-muted-foreground">
                {suggestion.description}
              </p>
              <ArrowUpRight className="w-5 h-5 text-primary mt-4" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
