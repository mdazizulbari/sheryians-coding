const Form = () => {
  return (
    <div className="mt-10 flex justify-center">
        <form action="" className="flex flex-wrap gap-10">
            <input type="text" className="px-5 py-1 font-semibold outline-none rounded-full" placeholder="Name" />
            <input type="email" className="px-5 py-1 font-semibold outline-none rounded-full" placeholder="Email" />
            <input type="text" className="px-5 py-1 font-semibold outline-none rounded-full" placeholder="Image URL" />
            <input type="text" className="px-5 py-1 font-semibold outline-none rounded-full" placeholder="Description" />
            <input type="submit" className="px-5 py-1 font-semibold text-xs text-white bg-blue-600 rounded-full" />
        </form>
    </div>
  )
}
export default Form