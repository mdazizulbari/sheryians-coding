import {useForm} from 'react-hook-form'
const Byreacthookform = () => {
   const {register, handleSubmit} = useForm()
  return (
  <form action="" onSubmit={handleSubmit(data => console.log(data))}>
    <input type="text" placeholder='name' {...register('name')} />
    <input type="email" placeholder='email' {...register('email')} />
    <input type="submit" />
  </form>
  )
}
export default Byreacthookform