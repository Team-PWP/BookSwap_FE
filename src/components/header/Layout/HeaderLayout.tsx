import * as Styles from '../styles.ts';
import { HeaderLayoutProps } from '@/components/header/type.ts';

export const HeaderLayout: React.FC<HeaderLayoutProps> = ({ children }) => {
  return <Styles.HeaderLayout>{children}</Styles.HeaderLayout>;
};
