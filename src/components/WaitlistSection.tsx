import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const WaitlistSection = () => {
  const [email, setEmail] = useState("");
  const [isSliding, setIsSliding] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Thanks for joining!",
        description: "We'll keep you updated on our progress.",
      });
      setEmail("");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative">
      <div className="max-w-2xl w-full text-center space-y-12">
        <div className="space-y-4">
          <h2 className="text-7xl md:text-8xl font-bold">
            <span className="text-foreground">WAIT</span>
          </h2>
          <h2 className="text-7xl md:text-8xl font-bold">
            <span className="text-foreground">LIST</span>
          </h2>
        </div>

        <p className="text-xl text-muted-foreground">
          Slide the lightning bolt to join the waitlist
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <Input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-16 text-lg rounded-full border-2 border-primary/30 focus:border-primary pl-6 pr-20"
            />
            <Button
              type="submit"
              size="icon"
              className="absolute right-2 top-2 h-12 w-12 rounded-full bg-primary hover:bg-primary/90"
            >
              <Zap className="h-6 w-6" />
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">
            By signing up you agree to our email policy
          </p>
        </form>
      </div>
    </section>
  );
};

export default WaitlistSection;
