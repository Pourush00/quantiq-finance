import { Bell, User } from "lucide-react";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Button } from "./ui/button";

export const Navbar = () => {
  return (
    <header className="h-16 bg-card border-b border-border flex items-center justify-between px-6 sticky top-0 z-30 backdrop-blur-sm bg-card/80">
      <div>
        <h2 className="text-xl font-semibold text-foreground">
          Hello, Pourush 👋
        </h2>
        <p className="text-sm text-muted-foreground">
          Here's your financial summary!
        </p>
      </div>

      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full"></span>
        </Button>

        <Avatar className="border-2 border-primary">
          <AvatarFallback className="bg-primary text-primary-foreground">
            <User className="w-5 h-5" />
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};
