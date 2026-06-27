import type { PropsWithChildren } from 'react';

import { Wrapper } from './styles';

type PageProps = PropsWithChildren;

export default function Page({ children }: PageProps) {
  return <Wrapper>{children}</Wrapper>;
}
