import React from 'react'
import { Button } from './components/button'

const App : React.FC = () => {
  return (
    <div className='p-8 flex gap-4 flex-wrap'>
      <Button>Default Button</Button>
      <Button variant={'danger'	}>Danger Button</Button>
      <Button variant={'ghost'	}>Ghost Button</Button>
      <Button variant={'link'	}>Link Button</Button>
      <Button variant={'outline'	}>Outline Button</Button>
      <Button variant={'primary'	}>Primary Button</Button>
      <Button variant={'secondary'	}>Secondary Button</Button>
      <Button variant={'success'	}>Success Button</Button>
      <Button variant={'warning'	}>Warning Button</Button>
    </div>
  )
}

export default App