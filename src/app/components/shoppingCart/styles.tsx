import styled from "styled-components";

export const ContainerShoppingCart = styled.section`
  height: 45px;
  width: 90px;
`;

export const BtnCart = styled.button`
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  height: 100%;
  width: 100%;
  background-color: #fff;

  span {
    font-size: 1.2rem;
    font-weight: 700;
  }
`;

export const ContainerOpenShoppingCart = styled.section`
  width: 0px;
  max-height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 10;
  background-color: #0f52ba;
  box-shadow: -5px 0px 6px 1px rgba(0, 0, 0, 0.2);
  transition: width 0.5s ease-in-out;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;

  &.open {
    width: 352px;
  }

  .finalizePurchase {
    border: none;
    width: 100%;
    min-width: 352px;
    height: 64px;
    color: #fff;
    background-color: #000;
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: 600;
  }
`;
export const ContainerShoppingCartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  width: 100%;
  min-width: 352px;
`;

export const ShoppingCartTitle = styled.p`
  font-weight: 600;
  color: #fff;
`;

export const ButtonClose = styled.button`
  color: #fff;
  background-color: #000;
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  cursor: pointer;
`;

export const ContainerListItens = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 24px;
  padding: 16px;
  overflow-y: auto;
  overflow-x: hidden;

  .noItens {
    color: #fff;
  }

  &::-webkit-scrollbar {
    height: 8px;
    width: 8px;
  }

  & ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #b3b3b3;
  }
`;

export const ContainerTotalPrice = styled.div`
  width: 100%;
  min-width: 352px;
  height: 64px;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  padding: 16px;
`;

