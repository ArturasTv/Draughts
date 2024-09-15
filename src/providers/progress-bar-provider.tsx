"use client";

import { AppProgressBar } from "next-nprogress-bar";
import type { PropsWithChildren } from "react";

const ProgressBarProvider = ({ children }: PropsWithChildren) => {
	return (
		<>
			{children}
			<AppProgressBar
				height="4px"
				color="#000000"
				options={{ showSpinner: true }}
				shallowRouting
			/>
		</>
	);
};

export default ProgressBarProvider;
