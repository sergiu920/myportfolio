import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../assets/logo.svg";

const links = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

export default function Header() {

    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur">
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
                <a href="#" className="flex items-center gap-2 text-xl font-bold tracking-tight">
                    <img src={Logo} className="h-10 w-auto" alt="Serghei Muntean logo" />
                    Serghei Muntean<span className="text-indigo-600">.</span>
                </a>

                {/* Desktop menu */}
                <nav className="hidden md:block">
                    <ul className="flex items-center gap-8">
                        {links.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className="text-sm font-medium text-gray-600 transition-colors hover:text-indigo-600"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 md:hidden"
                    aria-label={open ? "Close menu" : "Open menu"}
                    aria-expanded={open}
                    aria-controls="mobile-menu"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>
            {open && (
                <nav id="mobile-menu" className="border-t border-gray-200 bg-white md:hidden">
                    <ul className="flex flex-col px-4 py-2">
                        {links.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    onClick={() => setOpen(false)}
                                    className="block py-3 text-sm font-medium text-gray-700 hover:text-indigo-600"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </header>
    );
}


