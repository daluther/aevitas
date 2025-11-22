import Navigation from "@/components/Navigation";
import { Brain, Calendar, Sparkles, Zap } from "lucide-react";

const What = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Intelligence",
      description: "Your calendar learns from your scheduling patterns and preferences"
    },
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "Automatically find the best times for meetings based on your energy levels"
    },
    {
      icon: Sparkles,
      title: "Context Awareness",
      description: "Understands the type of meeting and suggests optimal durations"
    },
    {
      icon: Zap,
      title: "Focus Protection",
      description: "Automatically protects your deep work time from interruptions"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto space-y-16">
          <h1 className="text-6xl md:text-7xl font-bold text-foreground animate-fade-in">
            What <span className="text-primary">?</span>
          </h1>

          <div className="space-y-6 text-lg text-foreground leading-relaxed animate-fade-in-up animation-delay-200">
            <p className="text-2xl font-semibold">
              Aevitas is an intelligent calendar that adapts to you.
            </p>

            <p>
              Traditional calendars are passive tools. They store information but don't help you 
              make better decisions about your time.
            </p>

            <p>
              Aevitas is different. It actively helps you schedule smarter, work better, and 
              protect what matters most — your time and focus.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 pt-8">
            {features.map((feature) => (
              <div 
                key={feature.title}
                className="bg-card p-8 rounded-3xl border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-xl"
              >
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Navigation />
    </div>
  );
};

export default What;
