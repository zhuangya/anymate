export const blink = (keyframes: any) => (color: string) => keyframes`
	from, to {
		color: transparent;
	}

	50% {
		color: ${color};
	}
`;
