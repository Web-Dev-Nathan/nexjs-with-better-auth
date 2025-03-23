import Link from "next/link";
import AuthButtons from "@/components/auth-buttons";

export default function Navbar() {
	return (
		<nav className="flex justify-between items-center py-3  px-8 fixed top-0  z-50 bg-slate-100 w-full">
			<Link href="/" className="text-xl font-bold">
				better-auth
			</Link>
			<AuthButtons />
		</nav>
	);
}