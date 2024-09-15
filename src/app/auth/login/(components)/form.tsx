"use client";

import { Button } from "@/components/ui/button";
import FormErrorMessage from "@/components/ui/form-error-message";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ROUTES } from "@/constants/routes";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import * as z from "zod";

const loginSchema = z.object({
	email: z
		.string()
		.email({ message: "Invalid email address" })
		.min(1, { message: "Field is required" }),
	password: z
		.string()
		.min(8, { message: "Password must be at least 8 characters long" }),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export function LoginForm() {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<LoginFormValues>({
		resolver: zodResolver(loginSchema),
	});

	const onSubmit = async (data: LoginFormValues) => {
		console.log(data);

		await new Promise((resolve) => setTimeout(resolve, 1000));
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
			<div className="grid gap-2">
				<Label htmlFor="email">Email</Label>
				<Input
					id="email"
					type="email"
					placeholder="draughts@example.com"
					{...register("email")}
					aria-invalid={errors.email ? "true" : "false"}
				/>
				{errors.email && (
					<FormErrorMessage>{errors.email.message}</FormErrorMessage>
				)}
			</div>
			<div className="grid gap-2">
				<div className="flex items-center">
					<Label htmlFor="password">Password</Label>
					<Link
						href={ROUTES.AUTH.FORGOT_PASSWORD.INDEX}
						className="ml-auto inline-block text-sm underline"
					>
						Forgot your password?
					</Link>
				</div>
				<Input
					id="password"
					type={"password"}
					{...register("password")}
					aria-invalid={errors.password ? "true" : "false"}
				/>
				{errors.password && (
					<FormErrorMessage>{errors.password.message}</FormErrorMessage>
				)}
			</div>
			<Button type="submit" className="w-full" disabled={isSubmitting}>
				{isSubmitting ? "Submitting..." : "Login"}
			</Button>
			<Button type="button" variant="outline" className="w-full">
				Login with Google
			</Button>
		</form>
	);
}
