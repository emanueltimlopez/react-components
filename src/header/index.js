import React, { useState } from 'react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import Logo from './internal/logo'
import Menu from './internal/menu';
import { Container } from './styles'

const Header = ({ menu }) => {
  const [mini, setMini] = useState(false)
  useScrollPosition(({ prevPos, currPos }) => {
    const isShow = !(currPos.y > 1)
    if (isShow !== mini) setMini(isShow)
  }, [mini])

  return (
    <Container mini={mini}>
      <Logo mini={mini}/>
      <Menu data={menu} mini={mini}/>
    </Container>
  )
}

export default Header;
