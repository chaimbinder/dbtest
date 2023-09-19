import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import API from '../../Api';
// import styles from './style.module.css';

type FormInsertProps = {
  setShowFormInsert: React.Dispatch<React.SetStateAction<boolean>>;
};

const FormInsert: React.FC<FormInsertProps> = ({ setShowFormInsert }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ string: string }>();

  const onSubmit: SubmitHandler<{ string: string }> = (data) => {
    API.insertService.createInsert(data.string).then(() => {
      console.log("Submitted string:", data.string); // Log the actual input value
      setShowFormInsert(false);
    });
  };

  return (
    <div className={'form-container'}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="string">string:</label>
        <input
          type="text"
          id="string"
          {...register('string', { required: true })}
        />
        {errors.string && <p>String is required.</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormInsert;
