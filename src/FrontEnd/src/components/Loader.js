import React from 'react'
import { Dimmer, Image } from 'semantic-ui-react'

const Loader = () => (
  <Dimmer
    active
    inverted
    style={{
      backgroundColor: '#eee',
      height: '100vh',
      display: 'flex',
      alignItems: 'center'
    }}
  >
    <Image src="/main.gif" style={{ width: '50%' }} />
  </Dimmer>
)

export default Loader
