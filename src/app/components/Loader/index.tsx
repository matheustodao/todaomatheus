import { Overlay } from './styles';

interface IProps {
  isLoading: boolean,
}

export default function Loader({ isLoading }: IProps) {
  if (!isLoading) {
    return null;
  }

  return (
    <Overlay>
      <div className="loader" />
    </Overlay>
  );
}
