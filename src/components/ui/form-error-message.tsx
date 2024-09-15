import type { PropsWithChildren } from "react";

function FormErrorMessage({ children }: PropsWithChildren) {
	return <span className="text-sm text-red-500">{children}</span>;
}

export default FormErrorMessage;
