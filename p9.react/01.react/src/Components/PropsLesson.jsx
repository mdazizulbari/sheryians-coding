const PropsLesson = ({text, color}) => {
  return (
        <button className={`p-3 py-1 m-2 ${color} text-white text-xs rounded-full`}>{text}</button>
  )
}
export default PropsLesson