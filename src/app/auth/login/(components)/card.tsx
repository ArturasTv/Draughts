"use client";

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { ROUTES } from "@/constants/routes";
import Link from "next/link";
import { LoginForm } from "./form";

export function LoginCard() {
	return (
		<Card className="w-[440px] mx-auto min-h-[600px] shadow-none border-none">
			<CardHeader>
				<CardTitle className="text-2xl">Login</CardTitle>
				<CardDescription>
					Enter your email below to login to your account
				</CardDescription>
			</CardHeader>
			<CardContent>
				<LoginForm />
				<div className="mt-4 text-center text-sm">
					Don&apos;t have an account?{" "}
					<Link href={ROUTES.AUTH.REGISTER.INDEX} className="underline">
						Sign up
					</Link>
				</div>
			</CardContent>
		</Card>
	);
}
