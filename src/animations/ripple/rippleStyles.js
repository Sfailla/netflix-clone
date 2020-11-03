import styled from 'styled-components/macro';

export const RippleContainer = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;

	span {
		transform: scale(0);
		border-radius: 100%;
		position: absolute;
		opacity: 0.75;
		background-color: ${({ color }) => color};
		animation-name: ripple;
		animation-duration: ${({ duration }) => duration}ms;
	}

	@keyframes ripple {
		to {
			opacity: 0;
			transform: scale(4);
		}
	}
`;
