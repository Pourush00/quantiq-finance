import { NavLink } from "@/components/NavLink";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  CreditCard,
  TrendingUp,
  Wallet,
  Bot,
  Settings,
  Sparkles,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
  { icon: CreditCard, label: "Transactions", path: "/transactions" },
  { icon: TrendingUp, label: "Insights", path: "/insights" },
  { icon: Wallet, label: "Investments", path: "/investments" },
  { icon: Bot, label: "AI Chatbot", path: "/chatbot" },
  { icon: Settings, label: "Settings", path: "/settings" },
];

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      {/* Mobile Toggle */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 lg:hidden bg-card border border-border"
        onClick={() => setCollapsed(!collapsed)}
      >
        {collapsed ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Sidebar */}
      <motion.aside
        className={`fixed left-0 top-0 h-screen bg-card border-r border-border z-40 transition-all duration-300 ${
          collapsed ? "w-20" : "w-64"
        }`}
        initial={false}
        animate={{ width: collapsed ? 80 : 256 }}
      >
        <div className="flex flex-col h-full p-4">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-8 px-2">
            <Sparkles className="w-8 h-8 text-primary flex-shrink-0" />
            {!collapsed && (
              <motion.h1
                className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                FinSmart AI
              </motion.h1>
            )}
          </div>

          {/* Menu Items */}
          <nav className="flex-1 space-y-2">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <NavLink
                  to={item.path}
                  className="flex items-center gap-3 px-3 py-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-all duration-200"
                  activeClassName="bg-primary/10 text-primary font-medium border-l-4 border-primary"
                >
                  <item.icon className="w-5 h-5 flex-shrink-0" />
                  {!collapsed && <span>{item.label}</span>}
                </NavLink>
              </motion.div>
            ))}
          </nav>

          {/* Collapse Toggle */}
          <Button
            variant="ghost"
            size="sm"
            className="mt-4 hidden lg:flex justify-center"
            onClick={() => setCollapsed(!collapsed)}
          >
            {collapsed ? "→" : "←"}
          </Button>
        </div>
      </motion.aside>
    </>
  );
};
