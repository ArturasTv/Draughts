import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { ROUTES } from "@/constants/routes";
import Link from "next/link";
import { ForgotPasswordForm } from "./form";

export function ForgotPasswordCard() {
	return (
		<Card className="w-[440px] mx-auto min-h-[600px] shadow-none border-none">
			<CardHeader>
				<CardTitle className="text-2xl">Forgot Password</CardTitle>
				<CardDescription>
					Enter your email to receive a reset link
				</CardDescription>
			</CardHeader>
			<CardContent>
				<ForgotPasswordForm />
				<div className="mt-4 text-center text-sm">
					Remember your password?{" "}
					<Link href={ROUTES.AUTH.LOGIN.INDEX} className="underline">
						Back to login
					</Link>
				</div>
			</CardContent>
		</Card>
	);
}
