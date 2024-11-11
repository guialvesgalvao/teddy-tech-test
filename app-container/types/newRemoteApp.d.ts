// types.d.ts ou global.d.ts
declare module "newRemoteApp/Button2" {
  import { NavigateFunction } from 'react-router-dom';

  interface Button2Props {
    navigate: NavigateFunction;
  }

  const Button2: React.FC<Button2Props>;
  export default Button2;
}