import styled from "styled-components";

type typeAlertWrapper = {
  close: boolean;
  color: string;
  colorBg: string;
  width: string;
  height: string;
  position: string;
};

const POSITION = {
  bottomLeft: "bottom-left",
  bottomRight: "bottom-right",
  bottomCenter: "bottom-center",
  topCenter: "top-center",
  topLeft: "top-left",
  topRight: "top-left",
};

const setVisibility = (isOpen: boolean) => {
  return isOpen ? "hidden" : "visible";
};

const setPosition = (position: string) => {
  switch (position) {
    case POSITION.bottomLeft:
      return {
        top: "auto",
        right: "auto",
        bottom: "10%",
        left: "5%",
        translateX: "translateX(0)",
        animationName: "alert-bottom",
      };
    case POSITION.bottomCenter:
      return {
        top: "auto",
        right: "auto",
        bottom: "10%",
        left: "50%",
        translateX: "translateX(-50%)",
        animationName: "alert-bottom",
      };
    case POSITION.topCenter:
      return {
        top: "0",
        right: "auto",
        bottom: "auto",
        left: "50%",
        translateX: "translateX(-50%)",
        animationName: "alert-top",
      };
    case POSITION.topLeft:
      return {
        top: "3%",
        right: "auto",
        bottom: "auto",
        left: "3%",
        translateX: "translateX(0%)",
        animationName: "alert-top",
      };
    case POSITION.topRight:
      return {
        top: "3%",
        right: "auto",
        bottom: "auto",
        left: "95%",
        translateX: "translateX(-95%)",
        animationName: "alert-top",
      };
    case POSITION.bottomRight:
      return {
        top: "auto",
        right: "auto",
        bottom: "10%",
        left: "95%",
        translateX: "translateX(-95%)",
        animationName: "alert-bottom",
      };
    default:
      return {
        top: "auto",
        right: "auto",
        bottom: "10%",
        left: "50%",
        translateX: "translateX(-50%)",
        animationName: "alert-bottom",
      };
  }
};

export const AlertWrapper = styled.div<typeAlertWrapper>`
  position: fixed;
  z-index: 999;
  border-radius: 4px;
  box-shadow: 1px 1px 10px #ddd;

  min-width: ${(props) => (props.width ? props.width : "300px")};
  height: ${(props) => (props.height ? props.height : "200px")};
  background-color: ${(props) =>
    props.colorBg ? props.colorBg : "var(--btnBgColor)"};

  opacity: 0.9;

  top: ${(props) => setPosition(props.position).top};
  left: ${(props) => setPosition(props.position).left};
  right: ${(props) => setPosition(props.position).right};
  bottom: ${(props) => setPosition(props.position).bottom};
  transform: ${(props) => setPosition(props.position).translateX};

  p {
    color: ${(props) => (props.color ? props.color : "var(--generalColor)")};
    text-align: center;
    padding: 1rem;
  }

  visibility: ${(props) => (props.close ? "hidden" : "visible")};

  span {
    position: absolute;
    right: 18px;
    top: 4px;
    width: 0;
    font-weight: bold;
    color: ${(props) => props.color};
    cursor: pointer;
  }

  animation-duration: 0.5s;
  animation-name: ${(props) => setPosition(props.position).animationName};
  animation-direction: alternate;

  @keyframes alert-bottom {
    from {
      opacity: 0;
      bottom: 0;
    }
    to {
      opacity: 0.9;
      bottom: 10%;
    }
  }

  @keyframes alert-top {
    from {
      opacity: 0;
      top: 0;
    }
    to {
      opacity: 0.9;
      top: 3%;
    }
  }
`;
