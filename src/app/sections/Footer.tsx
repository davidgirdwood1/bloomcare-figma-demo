import { Container } from "../components/Container";

const links = ["Privacy Policy", "Terms of Service", "Contact"];

export function Footer() {
  return (
    <footer className="border-t border-border bg-white py-10">
      <Container className="flex flex-col items-center justify-between gap-5 text-center text-sm text-muted-foreground md:flex-row md:text-left">
        <div className="font-['Lora'] text-2xl text-foreground" style={{ fontWeight: 600 }}>
          BloomCare
        </div>
        <nav aria-label="Footer" className="flex flex-wrap justify-center gap-6">
          {links.map((link) => (
            <a key={link} href="#" className="transition hover:text-foreground">
              {link}
            </a>
          ))}
        </nav>
        <div>© 2026 BloomCare. All rights reserved.</div>
      </Container>
    </footer>
  );
}
