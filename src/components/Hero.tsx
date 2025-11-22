import { Calendar } from "lucide-react";

const Hero = () => {
  const today = new Date();
  const dayName = today.toLocaleDateString('en-US', { weekday: 'long' });
  const monthName = today.toLocaleDateString('en-US', { month: 'long' });
  const dayNumber = today.getDate();

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4">
      {/* Decorative shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-shape-peach rounded-[60%_40%_30%_70%/60%_30%_70%_40%] opacity-80 animate-float" />
      <div className="absolute top-32 right-20 w-24 h-24 bg-shape-peach rounded-[40%_60%_70%_30%/40%_70%_30%_60%] opacity-80 animate-float-delayed" />
      <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-accent rounded-[50%_50%_30%_70%/50%_50%_70%_30%] opacity-60 animate-float" />
      <div className="absolute top-40 right-1/3 w-16 h-16 bg-shape-peach rounded-[30%_70%_70%_30%/30%_30%_70%_70%] opacity-70 animate-float-delayed" />

      {/* Logo */}
      <div className="mb-12 text-center">
        <h1 className="text-6xl md:text-7xl font-bold text-primary tracking-tight">
          Δevitas
        </h1>
      </div>

      {/* Calendar Widget */}
      <div className="relative mb-16 transform hover:scale-105 transition-transform duration-300">
        <div className="bg-card rounded-3xl shadow-2xl overflow-hidden w-80 border-4 border-primary">
          <div className="bg-primary h-12 flex items-center justify-center relative">
            <div className="absolute left-4 w-4 h-4 bg-text-dark rounded-full" />
            <div className="absolute right-4 w-4 h-4 bg-text-dark rounded-full" />
          </div>
          <div className="bg-card p-8 text-center">
            <p className="text-text-muted text-lg mb-2">{monthName}</p>
            <p className="text-7xl font-bold text-foreground mb-2">{dayNumber}</p>
            <p className="text-text-muted text-lg">{dayName}</p>
          </div>
        </div>
      </div>

      {/* Tagline */}
      <div className="text-center max-w-3xl mb-16">
        <h2 className="text-5xl md:text-6xl font-bold leading-tight">
          <span className="block text-foreground">A Calendar</span>
          <span className="block text-foreground">That <span className="text-primary">Listens</span></span>
          <span className="block text-foreground">To <span className="text-primary italic">YOU</span></span>
        </h2>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-25px) rotate(-5deg);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 7s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
