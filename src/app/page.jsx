import React from 'react'

import { Navbar } from '@/components/navbar'
import { Wrapper } from '@/components/wrapper'

export default function Home() {
  return (
    <main>
      <Wrapper>
        <header>
          <Navbar />
        </header>
        <section>
          <div>This is body</div>
        </section>
      </Wrapper>
    </main>
  )
}
