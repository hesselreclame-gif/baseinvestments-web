import { Linkedin, Mail, Phone, MapPin } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Platforms", href: "#platforms" },
  { label: "Team", href: "#team" },
  { label: "News", href: "#news" },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-brand-ink text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-24">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Brand */}
          <div>
            <div className="text-2xl font-serif mb-4 tracking-tight">
              <span className="text-brand-blue-light font-semibold">BASE</span>
              <span className="text-white font-light"> Investments</span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs mb-6">
              Independent Dutch real estate firm. Asset management, development, and joint
              ventures with leading private equity partners.
            </p>
            <a
              href="https://www.linkedin.com/company/baseinvestments"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-zinc-500 hover:text-white text-sm transition-colors"
            >
              <Linkedin size={16} />
              Follow on LinkedIn
            </a>
          </div>

          {/* Nav */}
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-zinc-600 mb-6">
              Navigation
            </p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-zinc-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-zinc-600 mb-6">
              Contact
            </p>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:office@baseinvestments.nl"
                  className="flex items-center gap-3 text-sm text-zinc-400 hover:text-white transition-colors"
                >
                  <Mail size={14} className="text-brand-blue-light shrink-0" />
                  office@baseinvestments.nl
                </a>
              </li>
              <li>
                <a
                  href="tel:+31854873091"
                  className="flex items-center gap-3 text-sm text-zinc-400 hover:text-white transition-colors"
                >
                  <Phone size={14} className="text-brand-blue-light shrink-0" />
                  +31 85 4873091
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-zinc-400">
                  <MapPin size={14} className="text-brand-blue-light shrink-0 mt-0.5" />
                  <span>
                    Kuiperbergweg 50<br />
                    1101AG Amsterdam<br />
                    Netherlands
                  </span>
                </div>
              </li>
              <li className="pt-2 border-t border-zinc-800">
                <p className="text-xs text-zinc-600 mb-1">Tenant & Supplier Support</p>
                <a
                  href="mailto:service@baseinvestments.nl"
                  className="flex items-center gap-3 text-sm text-zinc-400 hover:text-white transition-colors"
                >
                  <Mail size={14} className="text-brand-blue-light shrink-0" />
                  service@baseinvestments.nl
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-zinc-800 flex flex-col sm:flex-row justify-between gap-4 items-start sm:items-center">
          <p className="text-zinc-600 text-xs">
            © {new Date().getFullYear()} Base Investments B.V. — All rights reserved.
          </p>
          <p className="text-zinc-700 text-xs">
            Registered in the Netherlands · Amsterdam
          </p>
        </div>
      </div>
    </footer>
  );
}
