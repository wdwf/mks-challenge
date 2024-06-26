import styled from "styled-components";

export const ContainerSkeleton = styled.div`
  background-image: linear-gradient(
    -90deg,
    #f2efef 0%,
    #c8c8c8 50%,
    #f2efef 100%
  );
  background-size: 400%, 400%;
  animation: shimmer 1.2s ease-in-out infinite;

  @keyframes shimmer {
    0% {
      background-position: 0% 0%;
    }

    100% {
      background-position: -135% 0%;
    }
  }
`;

