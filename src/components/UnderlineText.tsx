import { PropsWithChildren } from 'react';

interface Props {
  color: string;
  h?: string;
  zIndex?: number;
}

const UnderlinedText = (props: PropsWithChildren<Props>) => (
  <span className="relative inline-block">
    {props.children}
    <span 
      className={`absolute block w-full ${props.h ? '' : 'h-[1px]'} bg-gray-200 bottom-[-2px]`}
      style={{ height: props.h, backgroundColor: props.color, zIndex: props.zIndex }}
    />
  </span>
);

export default UnderlinedText;
