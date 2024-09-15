"use client";

import { Button } from "@/components/ui/button";
import FormErrorMessage from "@/components/ui/form-error-message";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const registerSchema = z
	.object({
		name: z
			.string()
			.min(1, { message: "Field is required" })
			.min(2, { message: "Name must be at least 2 characters long" }),
		email: z.string().email({ message: "Invalid email address" }),
		password: z
			.string()
			.min(8, { message: "Password must be at least 8 characters long" }),
		confirmPassword: z.string().min(1, { message: "Field is required" }),
	})
	.refine((data) => data.password === data.confirmPassword, {
		path: ["confirmPassword"],
		message: "Passwords do not match",
	});

type RegisterFormValues = z.infer<typeof registerSchema>;

export function RegisterForm() {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<RegisterFormValues>({
		resolver: zodResolver(registerSchema),
	});

	const onSubmit = async (data: RegisterFormValues) => {
		console.log(data);

		await new Promise((resolve) => setTimeout(resolve, 1000));
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
			<div className="grid gap-2">
				<Label htmlFor="name">Full Name</Label>
				<Input
					id="name"
					type="text"
					placeholder="John Doe"
					{...register("name")}
				/>
			</div>
			<div className="grid gap-2">
				<Label htmlFor="email">Email</Label>
				<Input
					id="email"
					type="email"
					placeholder="draughts@example.com"
					{...register("email")}
				/>
				{errors.email && (
					<FormErrorMessage>{errors.email.message}</FormErrorMessage>
				)}
			</div>
			<div className="grid gap-2">
				<Label htmlFor="password">Password</Label>
				<Input id="password" type="password" {...register("password")} />
				{errors.password && (
					<FormErrorMessage>{errors.password.message}</FormErrorMessage>
				)}
			</div>
			<div className="grid gap-2">
				<Label htmlFor="confirm-password">Confirm Password</Label>
				<Input
					id="confirm-password"
					type="password"
					{...register("confirmPassword")}
				/>
				{errors.confirmPassword && (
					<FormErrorMessage>{errors.confirmPassword.message}</FormErrorMessage>
				)}
			</div>
			<Button type="submit" className="w-full" disabled={isSubmitting}>
				{isSubmitting ? "Submitting..." : "Register"}
			</Button>
			<Button variant="outline" className="w-full">
				Register with Google
			</Button>
		</form>
	);
}
