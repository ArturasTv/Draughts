import { Button } from "@/components/ui/button";
import FormErrorMessage from "@/components/ui/form-error-message";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const resetPasswordSchema = z
	.object({
		password: z
			.string()
			.min(8, { message: "Password must be at least 8 characters long" }),
		confirmPassword: z.string().min(1, { message: "Name is required" }),
	})
	.refine((data) => data.password === data.confirmPassword, {
		path: ["confirmPassword"],
		message: "Passwords do not match",
	});

type ResetPasswordFormValues = z.infer<typeof resetPasswordSchema>;

export function PasswordResetForm() {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<ResetPasswordFormValues>({
		resolver: zodResolver(resetPasswordSchema),
	});

	const onSubmit = async (data: ResetPasswordFormValues) => {
		console.log(data);

		await new Promise((resolve) => setTimeout(resolve, 1000));
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
			<div className="grid gap-2">
				<Label htmlFor="new-password">New Password</Label>
				<Input id="new-password" type={"password"} {...register("password")} />
				{errors.password && (
					<FormErrorMessage>{errors.password.message}</FormErrorMessage>
				)}
			</div>
			<div className="grid gap-2">
				<Label htmlFor="confirm-password">Confirm New Password</Label>
				<Input
					id="confirm-password"
					type={"password"}
					{...register("confirmPassword")}
				/>
				{errors.confirmPassword && (
					<FormErrorMessage>{errors.confirmPassword.message}</FormErrorMessage>
				)}
			</div>
			<Button type="submit" className="w-full" disabled={isSubmitting}>
				{isSubmitting ? "Submitting..." : "Reset password"}
			</Button>
		</form>
	);
}
