import React from 'react'
import { Button } from "@/components/ui/button"

type Props = {}

export default function index({}: Props) {
  return (
    <div className='boder flex justify-center items-center p-24'>
        <Button variant="outline">Button</Button>
    </div>

  )
}