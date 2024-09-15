import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { ROUTES } from "@/constants/routes";
import Link from "next/link";
import { RegisterForm } from "./form";

export function RegisterCard() {
	return (
		<Card className="w-[440px] mx-auto min-h-[600px] shadow-none border-none">
			<CardHeader>
				<CardTitle className="text-2xl">Register</CardTitle>
				<CardDescription>Create a new account to get started</CardDescription>
			</CardHeader>
			<CardContent>
				<RegisterForm />
				<div className="mt-4 text-center text-sm">
					Already have an account?{" "}
					<Link href={ROUTES.AUTH.LOGIN.INDEX} className="underline">
						Log in
					</Link>
				</div>
			</CardContent>
		</Card>
	);
}
