// import third-party modules
import React from 'react'
import { Typography } from '@arco-design/web-react';
// import local modules
import { HomeEntry } from '../../components/Home/entry';
import { centerStyles } from '../../utils'

function Home() {
  return (
    <div style={{ ...centerStyles, height: '100vh', flexDirection: 'column' }}>
      <Typography.Title>Source Code View</Typography.Title>
      <HomeEntry  />
      <div style={{ height: '30vh' }} />
    </div>
  )
}

export default Home