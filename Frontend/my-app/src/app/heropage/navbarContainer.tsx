
import Navbar from '@/app/heropage/navbar'

type Props = {}

export default function NavbarContainer({}: Props) {
  return (
    <div className='w-full h-full flex justify-center items-center sticky top-0'>
        <Navbar />
    </div>
  )
}