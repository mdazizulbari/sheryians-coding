import { useForm } from "react-hook-form";

const Form = ({ handleFormSubmitData }) => {
  const { register, handleSubmit, reset } = useForm();

  const handleFormSubmit = (data) => {
    handleFormSubmitData(data);
    reset();
  };

  return (
    <div className="mt-10 flex justify-center">
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="flex flex-wrap gap-10"
      >
        <input
          {...register("name")}
          type="text"
          className="px-5 py-1 font-semibold outline-none rounded-full"
          placeholder="Name"
        />
        <input
          {...register("email")}
          type="email"
          className="px-5 py-1 font-semibold outline-none rounded-full"
          placeholder="Email"
        />
        <input
          {...register("image")}
          type="text"
          className="px-5 py-1 font-semibold outline-none rounded-full"
          placeholder="Image URL"
        />
        {/* <input {...register('')}  type="text" className="px-5 py-1 font-semibold outline-none rounded-full" placeholder="Description" /> */}
        <input
          type="submit"
          className="px-5 py-1 font-semibold text-xs text-white bg-blue-600 rounded-full"
        />
      </form>
    </div>
  );
};
export default Form;
