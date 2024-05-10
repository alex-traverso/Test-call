import React from "react";

interface Props {
	title: string;
}

export const Title = ({ title }: Props) => {
	return (
		<div className="p-4">
			<h2 className="text-4xl -tracking-tighter font-bold uppercase text-white mb-5">
				{title}
			</h2>
		</div>
	);
};
