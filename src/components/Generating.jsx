import {loading} from "../assets"

const Generating = () => {
  return (
    <div className={`flex items-center h-[3.4rem] px-6 bg-n-8/80 rounded-[1.7rem] text-base`}>
      <img
      className='w-5 h-5 mr-4' src={loading}
      alt="Loading"/>
      Al is Generating
    </div>
  )
}

export default Generating
