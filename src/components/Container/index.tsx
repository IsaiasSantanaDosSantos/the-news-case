import type { PropsWithChildren } from 'react';

import { Wrapper } from './styles';

type ContainerProps = PropsWithChildren;

export default function Container({ children }: ContainerProps) {
  return <Wrapper>{children}</Wrapper>;
}
