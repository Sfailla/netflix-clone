import styled from 'styled-components/macro';

export const Container = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
`;

export const Positioner = styled.div`
	width: 150px;
	height: 150px;
	display: flex;
	justify-content: center;
	align-items: center;

	&:after {
		content: '';
		position: absolute;
		background-image: url(/images/misc/spinner.png);
		background-size: contain;
		background-repeat: no-repeat;
		width: 150px;
		height: 150px;
		animation-name: spin;
		animation-duration: 1000ms;
		animation-iteration-count: infinite;
		animation-timing-function: linear;
	}
	@-ms-keyframes spin {
		from {
			-ms-transform: rotate(0deg);
		}
		to {
			-ms-transform: rotate(360deg);
		}
	}
	@-moz-keyframes spin {
		from {
			-moz-transform: rotate(0deg);
		}
		to {
			-moz-transform: rotate(360deg);
		}
	}
	@-webkit-keyframes spin {
		from {
			-webkit-transform: rotate(0deg);
		}
		to {
			-webkit-transform: rotate(360deg);
		}
	}
	@keyframes spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
`;

export const Image = styled.img`
	width: 50px;
	height: 50px;
`;
