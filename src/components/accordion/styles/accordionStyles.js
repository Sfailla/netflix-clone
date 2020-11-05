import styled from 'styled-components/macro';

export const Frame = styled.div`
	width: 75%;
	max-width: 815px;
	margin: 32px auto;

	@media (max-width: 950px) {
		width: 90%;
		margin: 24px auto;
	}
`;

export const Item = styled.div`
  margin-bottom: 8px;
  position: relative;
  width: 100%;
  border: 0;

  display: block;
  text-align: left;
	background: #000;

	& svg {
		transform: ${({ toggle }) => (toggle ? 'rotate(-45deg)' : 'rotate(0deg)')};
		transition: ${({ toggle }) =>
			toggle
				? 'transform .25s cubic-bezier(.5, 0, .1, 1) '
				: 'transform .25s cubic-bezier(.5, 0, .1, 1) .2s'};
	}
}
`;

export const Header = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	text-transform: uppercase;
	margin-bottom: 1px;
	padding: .8em 2.2em .8em 1.2em;
	background-color: #303030;
	color: white;
	font-size: 26px;
	font-weight: 400;
	cursor: pointer;

	@media (max-width: 949px) {
		font-size: 20px;
	}

	@media (max-width: 650px) {
		font-size: 18px;
	}
`;

export const Body = styled.div`
	display: block;
	overflow: hidden;
	background-color: #303030;
	max-height: ${({ toggle }) => (toggle ? '1000px' : '0')};
	transition: ${({ toggle }) =>
		toggle
			? 'max-height .5s cubic-bezier(.5, 0, .1, 1)'
			: 'max-height .25s cubic-bezier(.5, 0, .1, 1)'};
`;

export const Content = styled.div`
	padding: 19.2px;
	font-size: 23px;
	color: white;
	white-space: pre-wrap;

	@media (max-width: 650px) {
		font-size: 18px;
	}
`;

export const Closed = styled.div`
	width: 100%;
	overflow: hidden;
	max-height: 0;
	transition: max-height 1s cubic-bezier(.5, 0, .1, 1);
`;
