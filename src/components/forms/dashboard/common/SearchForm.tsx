import TextField from "@/components/fields/Textfield";
import { yupResolver } from "@hookform/resolvers/yup";
import { FC } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";

type Inputs = {
  query: string;
};

const SearchForm: FC = () => {
  const methods = useForm<Inputs>({
    defaultValues: {
      query: "",
    },
  });

  const { handleSubmit } = methods;

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form className="relative flex flex-1" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="search-field" className="sr-only">
          Search
        </label>
        <HiMiniMagnifyingGlass
          className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400"
          aria-hidden="true"
        />
        <TextField
          name="query"
          placeholder="Search..."
          type="search"
          className="flex items-center h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
          inputClassName="!border-none !shadow-none ring-0"
        />
      </form>
    </FormProvider>
  );
};

export default SearchForm;
