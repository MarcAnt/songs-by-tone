import { useEffect } from "react";
import { AlertWrapper } from "./Alert.style";

export type typeAlerts = {
  message: string;
  color: string;
  colorBg: string;
  width: string;
  height: string;
  position: string;
  setAlertIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  alertIsOpen: boolean;
};

const Alert: React.FC<typeAlerts> = ({
  message,
  color,
  colorBg,
  width,
  height,
  position,
  setAlertIsOpen,
  alertIsOpen,
}) => {
  useEffect(() => {
    if (!alertIsOpen) {
      setTimeout(() => {
        setAlertIsOpen(true);
      }, 3000);
    }
  }, [setAlertIsOpen, alertIsOpen]);

  return (
    <AlertWrapper
      color={color}
      colorBg={colorBg}
      width={width}
      height={height}
      close={alertIsOpen}
      position={position}
    >
      <span onClick={() => setAlertIsOpen(true)}>X</span>
      <p>{message}</p>
    </AlertWrapper>
  );
};

export default Alert;
