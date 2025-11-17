"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const components = [
  { name: "Button", href: "/components/button" },
  { name: "Input", href: "/components/input" },
  { name: "Card", href: "/components/card" },
  { name: "Avatar", href: "/components/avatar" },
];
export default function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="w-64 h-screen bg-gray-950 border-r p-4 sticky top-0">
      <h2 className="font-semibold text-white mb-4">Components</h2>
      <ul className="space-y-2">
        {components.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`block px-2 py-1 text-gray-200 rounded ${pathname === item.href ? "bg-gray-900 text-black font-medium" : ""
                }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
