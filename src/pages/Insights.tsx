import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import {
  BarChart,
  Bar,
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
import { TrendingUp, AlertCircle, Sparkles } from "lucide-react";

const monthlyComparison = [
  { month: "Aug", expense: 15000, income: 40000 },
  { month: "Sep", expense: 18000, income: 42000 },
  { month: "Oct", expense: 16000, income: 43000 },
  { month: "Nov", expense: 14000, income: 41000 },
  { month: "Dec", expense: 17000, income: 44000 },
  { month: "Jan", expense: 15500, income: 45000 },
];

const categoryBreakdown = [
  { name: "Food & Dining", value: 4500, color: "hsl(var(--chart-1))" },
  { name: "Transportation", value: 2000, color: "hsl(var(--chart-2))" },
  { name: "Shopping", value: 3000, color: "hsl(var(--chart-3))" },
  { name: "Bills & Utilities", value: 3500, color: "hsl(var(--chart-4))" },
  { name: "Entertainment", value: 2000, color: "hsl(var(--chart-5))" },
];

const forecastData = [
  { month: "Feb", predicted: 16000, actual: 15500 },
  { month: "Mar", predicted: 15800, actual: null },
  { month: "Apr", predicted: 15200, actual: null },
  { month: "May", predicted: 14800, actual: null },
];

const aiAnalysis = [
  {
    title: "Next month savings forecast",
    value: "₹4,800",
    icon: TrendingUp,
    color: "text-success",
    bg: "from-success/20 to-success/5",
  },
  {
    title: "Overspending alert",
    value: "Food +15%",
    icon: AlertCircle,
    color: "text-warning",
    bg: "from-warning/20 to-warning/5",
  },
  {
    title: "AI Recommendation",
    value: "Save ₹2,000",
    icon: Sparkles,
    color: "text-primary",
    bg: "from-primary/20 to-primary/5",
  },
];

const Insights = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <div>
        <h1 className="text-3xl font-bold text-foreground">Insights</h1>
        <p className="text-muted-foreground">
          AI-powered analysis of your spending patterns
        </p>
      </div>

      {/* AI Analysis Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {aiAnalysis.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <Card
              className={`p-6 bg-gradient-to-br ${item.bg} border-border relative overflow-hidden`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">
                    {item.title}
                  </p>
                  <p className={`text-2xl font-bold ${item.color}`}>
                    {item.value}
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-background/50">
                  <item.icon className={`w-6 h-6 ${item.color}`} />
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Comparison Bar Chart */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="p-6 bg-card border-border">
            <h3 className="text-lg font-semibold mb-4 text-foreground">
              6 Months Comparison
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlyComparison}>
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
                <Bar
                  dataKey="expense"
                  fill="hsl(var(--destructive))"
                  radius={[8, 8, 0, 0]}
                />
                <Bar
                  dataKey="income"
                  fill="hsl(var(--success))"
                  radius={[8, 8, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </motion.div>

        {/* Category Pie Chart */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="p-6 bg-card border-border">
            <h3 className="text-lg font-semibold mb-4 text-foreground">
              Top 5 Expense Categories
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categoryBreakdown}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `₹${value}`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {categoryBreakdown.map((entry, index) => (
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
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </Card>
        </motion.div>
      </div>

      {/* Forecast Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <Card className="p-6 bg-card border-border">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-semibold text-foreground">
              AI Expense Forecast (LSTM Model)
            </h3>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={forecastData}>
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
                dataKey="actual"
                stroke="hsl(var(--primary))"
                strokeWidth={3}
                dot={{ fill: "hsl(var(--primary))", r: 6 }}
              />
              <Line
                type="monotone"
                dataKey="predicted"
                stroke="hsl(var(--accent))"
                strokeWidth={3}
                strokeDasharray="5 5"
                dot={{ fill: "hsl(var(--accent))", r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
          <p className="text-sm text-muted-foreground mt-4">
            Based on historical patterns, our AI predicts a gradual decrease in
            expenses over the next 4 months. Continue your current spending
            habits for optimal savings!
          </p>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default Insights;
