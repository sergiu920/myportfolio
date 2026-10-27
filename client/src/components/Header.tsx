import { useState } from "react";

const links = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

export default function Header() {

    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur">
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
                <a href="#" className="text-xl font-bold tracking-tight">
                    <img src="/logo.svg" alt="Logo" className="h-8" />
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

                {/* Mobile menu */}
                {open && (
                    <nav className="border-t border-gray-200 bg-white md:hidden">
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
            </div>
        </header>
    );
}


