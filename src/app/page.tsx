import { buttonVariants } from "@/components/ui/button";
import { ROUTES } from "@/constants/routes";
import Link from "next/link";

function Page() {
	return (
		<div className="flex justify-center items-center h-screen">
			<div className="flex flex-col gap-8">
				<span className="text-7xl font-semibold text-primary ">
					Work in progress 👷
				</span>
				<Link
					className={buttonVariants({
						variant: "outline",
						className: "w-fit mx-auto",
					})}
					href={ROUTES.AUTH.LOGIN.INDEX}
				>
					Go to login page
				</Link>
			</div>
		</div>
	);
}

export default Page;
