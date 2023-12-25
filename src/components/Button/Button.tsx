import React from "react";

const Button: React.FC<{
	url: string;
	text: string;
	textColour: string;
	backgroundColour: string;
	borderColour: string;
}> = ({ url, text, textColour, backgroundColour, borderColour }) => {
	const buttonClasses = `flex justify-center items-center py-1.5 px-3.5 ${textColour} ${backgroundColour} ${borderColour} rounded-lg hover:shadow-slate-500`;

	const handleClick = () => {
		window.location.href = url;
	};

	return (
		<button onClick={handleClick} className={buttonClasses}>
			<h5>{text}</h5>
		</button>
	);
};

export default Button;
