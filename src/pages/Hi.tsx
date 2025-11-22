import Navigation from "@/components/Navigation";

const Hi = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto space-y-12">
          <h1 className="text-6xl md:text-7xl font-bold text-foreground">
            Hi <span className="text-primary">👋</span>
          </h1>

          <div className="space-y-6 text-lg text-foreground leading-relaxed">
            <p>
              Welcome to <span className="font-bold text-primary">Aevitas</span>, where your calendar 
              finally understands you.
            </p>

            <p>
              We're building something different. A calendar that doesn't just store your events — 
              it listens, learns, and adapts to the way you actually work.
            </p>

            <p>
              Imagine a calendar that knows when you're most productive, suggests the best times 
              for different types of meetings, and helps you protect your focus time.
            </p>

            <p className="text-2xl font-bold text-primary pt-8">
              That's Aevitas.
            </p>
          </div>
        </div>
      </div>
      <Navigation />
    </div>
  );
};

export default Hi;
