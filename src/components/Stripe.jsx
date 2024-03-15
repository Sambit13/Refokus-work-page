

// eslint-disable-next-line react/prop-types
const Stripe = ({val}) => {
  return (
    <div className="w-[16.66%] px-4 py-5 border-t-[1px] border-r-[1px] border-b-[1px] border-zinc-700 flex items-center justify-between">
        <img src={val.url} className="p-auto m-auto"/>
        <span className="mr-10 ">{val.number}</span>
    </div>
  )
}

export default Stripe