import { Link } from "react-router-dom";

const Navigation = () => {
  const navItems = [
    { label: "Hi", path: "/hi" },
    { label: "What", path: "/what" },
    { label: "Who", path: "/who" }
  ];

  return (
    <nav className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
      <div className="flex gap-4 bg-card/90 backdrop-blur-md rounded-full px-8 py-4 shadow-xl border-2 border-primary/20">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="text-2xl font-bold text-foreground hover:text-primary transition-colors duration-300 px-4"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
