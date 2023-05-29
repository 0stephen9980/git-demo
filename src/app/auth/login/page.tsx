import { GrContactInfo } from 'react-icons/gr'

export default function Home() {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className='w-1/2 bg-[red]'>
        <h1>Admin Login</h1>
        <div>
          <GrContactInfo />
        </div>
      </div>
    </div>
  )
}