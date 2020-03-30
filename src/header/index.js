import React, { useState } from 'react';
import * as USP from '@n8tb1t/use-scroll-position/lib/index';
import Logo from './internal/logo'
import Menu from './internal/menu';
import { Container } from './styles'

const Header = ({ menu, image }) => {
  const [mini, setMini] = useState(false)
  USP.useScrollPosition(({ prevPos, currPos }) => {
    const isShow = !(currPos.y > 1)
    if (isShow !== mini) setMini(isShow)
  }, [mini])

  return (
    <Container mini={mini}>
      <Logo mini={mini} image={image}/>
      <Menu data={menu} mini={mini}/>
    </Container>
  )
}

export default Header;
