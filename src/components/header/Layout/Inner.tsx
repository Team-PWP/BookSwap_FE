import * as Styles from '../styles.ts';
import { InnerProps } from '@/components/header/type.ts';

export const Inner: React.FC<InnerProps> = ({ children }) => {
  return <Styles.Inner>{children}</Styles.Inner>;
};
