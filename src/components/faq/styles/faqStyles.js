import styled from 'styled-components/macro';

export const Container = styled.div`
	padding: 70px 45px;
	text-align: center;
	margin: 0 auto;
	position: relative;
	border-bottom: 8px solid #333;
`;

export const Title = styled.h1`
	font-size: 50px;
	line-height: 1.1;
	margin-top: 0;
	margin-bottom: 8px;
	color: white;
	text-align: center;
	letter-spacing: 2px;

	@media (max-width: 949px) {
		font-size: 40px;
	}

	@media (max-width: 740px) {
		font-size: 38px;
	}

	@media (max-width: 600px) {
		font-size: 35px;
	}

	@media (max-width: 549px) {
		font-size: 26px;
	}
`;

export const Inner = styled.div`
	display: flex;
	flex-direction: column;
	margin: auto;
`;
