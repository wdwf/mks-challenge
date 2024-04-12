import styled from "styled-components";

export const MiniContainerCard = styled.section`
  width: 300px;
  height: 100%;
  max-height: 95px;
  min-height: 90px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 8px 24px 0px rgba(0, 0, 0, 0.2);
  display: flex;
  position: relative;
  display: flex;
  /* justify-content: center; */
  align-items: center;
`;

export const Image = styled.img`
  object-fit: contain;
  padding: 0 4px;
  width: 52px;
  max-height: 57px;
  height: auto;
`;

export const InfoProduct = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 14px;
  gap: 10px;
  flex: 1;

  .titleProduct {
    font-weight: 400;
    font-size: 0.7rem;
  }

  .priceProduct {
    padding: 2px 4px;
    display: block;
    border-radius: 4px;
    font-weight: 600;
    color: #000000;
    font-size: 0.7rem;
  }

  .conteinerCounter {
    .title {
      font-size: 0.6rem;
    }

    .conteinerCounterBtn {
      display: flex;
      border: 1px solid #ccc;
      border-radius: 4px;

      button,
      span {
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px;
      }

      .minusBtn {
        cursor: pointer;
        border-right: 1px solid #dadada;

        &:hover {
          background-color: #dadada;
        }
      }
      .qtd {
        font-size: 0.8rem;
      }
      .plusBtn {
        cursor: pointer;
        border-left: 1px solid #dadada;

        &:hover {
          background-color: #dadada;
        }
      }
    }
  }
`;

export const RemoveProduct = styled.button`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  color: #fff;
  cursor: pointer;
  border-radius: 50px;
  background-color: #000;
  position: absolute;
  top: -10px;
  right: -10px;
`;

