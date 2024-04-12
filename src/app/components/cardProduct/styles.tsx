import styled from "styled-components";

export const ContainerCard = styled.section`
  width: 218px;
  height: 285px;
  border-radius: 8px;
  box-shadow: 0px 8px 24px 0px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Image = styled.img`
  object-fit: contain;
  flex: 1;
  padding: 0 4px;
`;

export const InfoProduct = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 14px;
  gap: 10px;

  h3 {
    font-weight: 400;
    font-size: 1rem;
  }

  div {
    background-color: #373737;
    padding: 2px 4px;
    display: block;
    border-radius: 4px;
    font-weight: 600;
    color: #fff;
  }
`;

export const DescriptionProduct = styled.article`
  font-size: 0.7rem;
  padding: 0 14px;
`;

export const ButtonBuy = styled.button`
  display: flex;
  gap: 14px;
  color: #fff;
  font-weight: 600;
  border: none;
  background-color: #0f52ba;
  border-radius: 0 0 8px 8px;
  align-items: center;
  justify-content: center;
  padding: 8px 0;
  cursor: pointer;
`;

