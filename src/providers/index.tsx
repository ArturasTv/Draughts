"use client";

import type { PropsWithChildren } from "react";
import ProgressBarProvider from "./progress-bar-provider";

const Providers = ({ children }: PropsWithChildren) => {
	return <ProgressBarProvider>{children}</ProgressBarProvider>;
};

export default Providers;
