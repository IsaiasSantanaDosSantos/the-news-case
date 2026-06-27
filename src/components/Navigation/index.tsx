import { NavLink } from 'react-router-dom';

import { paths } from '@/routes/paths';

import { Wrapper, List, Item } from './styles';

export default function Navigation() {
  return (
    <Wrapper>
      <List>
        <Item>
          <NavLink to={paths.news}>News</NavLink>
        </Item>

        <Item>
          <NavLink to={paths.events}>Events</NavLink>
        </Item>
      </List>
    </Wrapper>
  );
}