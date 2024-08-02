import { PropsWithChildren } from 'react';
import UnderlinedText from './UnderlineText'

interface Props {
  underlineColor: string;
  emoji?: string;
  className?: string;
}

const Header = ({ children, underlineColor, emoji, className }: PropsWithChildren<Props>) => (
  <h1 className={`mt-10 mb-6 text-3xl leading-snug font-bold text-left ${className}`}>
    <UnderlinedText color={underlineColor}>{children}</UnderlinedText>
    {emoji ? ` ${emoji}` : ''}
  </h1>
);

export default Header;
