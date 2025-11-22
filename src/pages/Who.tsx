import Navigation from "@/components/Navigation";
import { Linkedin, Github } from "lucide-react";

const Who = () => {
  const team = [
    {
      name: "Dhruv Goswami",
      role: "Co-Founder",
      bio: "Building intelligent systems that understand human behavior and time management",
      linkedin: "#",
      github: "#"
    },
    {
      name: "Kush Patel",
      role: "Co-Founder",
      bio: "Creating seamless experiences that make productivity effortless",
      linkedin: "#",
      github: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto space-y-16">
          <h1 className="text-6xl md:text-7xl font-bold text-foreground">
            Who <span className="text-primary">?</span>
          </h1>

          <div className="space-y-6 text-lg text-foreground leading-relaxed">
            <p className="text-2xl font-semibold">
              We're a team passionate about reimagining how people manage their time.
            </p>

            <p>
              After years of struggling with traditional calendar apps, we decided to build 
              something better. Something that actually understands how modern professionals work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 pt-8">
            {team.map((member) => (
              <div 
                key={member.name}
                className="bg-card p-8 rounded-3xl border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-xl"
              >
                <div className="space-y-4">
                  <div>
                    <h3 className="text-3xl font-bold text-foreground mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary font-semibold text-lg">
                      {member.role}
                    </p>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>

                  <div className="flex gap-4 pt-4">
                    <a 
                      href={member.linkedin}
                      className="text-foreground hover:text-primary transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-6 h-6" />
                    </a>
                    <a 
                      href={member.github}
                      className="text-foreground hover:text-primary transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Navigation />
    </div>
  );
};

export default Who;
