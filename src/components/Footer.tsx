const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border py-12 section-alt">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md gradient-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xs">Dx</span>
            </div>
            <span className="text-lg font-bold text-foreground">
              Discharge<span className="text-primary">X</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            {[
              { label: "Features", href: "#features" },
              { label: "How It Works", href: "#how-it-works" },
              { label: "Benefits", href: "#benefits" },
              { label: "About", href: "#about" },
              { label: "Contact", href: "#contact" },
            ].map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          <p className="text-sm text-muted-foreground flex flex-col md:flex-row gap-2 md:gap-6 text-center md:text-right">
            <span>© {currentYear} DischargeX. All rights reserved.</span>
            <a href="mailto:pruthvisreddy8861@gmail.com" className="hover:text-primary transition-colors">pruthvisreddy8861@gmail.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
