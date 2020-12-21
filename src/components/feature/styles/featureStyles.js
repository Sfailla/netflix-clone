import styled from 'styled-components/macro';
import { media } from '../../../sharedStyles';

export const Container = styled.div`
  width: 100%;
  height: auto;
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 50px;
  position: relative;
  z-index: 5;
`;

export const Title = styled.h1`
  font-size: 26px;
  color: white;
  line-height: 1.2;
  letter-spacing: 2px;

  ${media.lg`font-size: 30px;`};
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  ${media.lg`width: 50%;`};
  ${media.md`width: 60%;`};
`;

export const Body = styled.p`
  color: #cccccc;
  font-size: 16px;
  line-height: normal;

  ${media.lg`
		font-size: 18px;
		line-height: 1.1;
	`};
`;

export const Button = styled.button`
  background-color: transparent;
  color: #fff;
  border: 2px solid;
  border-color: #e6e6e6;
  outline: 0;
  padding: 10px 20px;
  border-radius: 5px;
  max-width: 130px;
  font-size: 20px;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: border-color 0.3s ease, color 0.3s ease;

  &:hover {
    border-color: #ff1e1e;
    color: #ff1e1e;
  }

  ${media.lg`
		width: 100px;
		font-size: 12px;
	`};
`;
