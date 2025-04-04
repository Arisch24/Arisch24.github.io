"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const Navigation = () => {
	const pathname = usePathname();

	return (
		<nav>
			<ul>
				<li>
					<Link
						className={`link ${pathname === "/" ? "active" : ""}`}
						href="/"
					>
						Home
					</Link>
				</li>
				<li>
					<Link
						className={`link ${pathname === "/" ? "active" : ""}`}
						href="/dashboard"
					>
						Dashboard
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
