"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import SignoutButton from "@/components/signout-button";
import { Button } from "@/components/ui/button";

export default function AuthButtons() {
	const { data, isPending } = authClient.useSession();
	if (isPending) return <div>Loading...</div>;

	const session = data;

	return !session ? (
		<div className="flex gap-2 justify-between">
			<Link href="/sign-in">
				<Button>Sign In</Button>
			</Link>
			<Link href="/sign-up">
				<Button>Sign Up</Button>
			</Link>
		</div>
	) : (
		<div className="flex items-center justify-between gap-2">
			<p className="text-gray-600">Hello, {session.user.name.split(" ")[0]}</p>
			<SignoutButton />
		</div>
	);
}