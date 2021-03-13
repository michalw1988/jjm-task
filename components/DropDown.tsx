import { useField, FieldProps, ErrorMessage } from "formik";
import Select, { Option, ReactSelectProps } from "react-select";

interface PropsType {
  [x: string]: any;
  name: string;
}

const DropDown: React.FC<ReactSelectProps & FieldProps> = ({
  ...props
}: PropsType) => {
  const [field, meta, helpers] = useField(props);
  const { options, placeholder } = props
  const { touched, error, value } = meta
  const { setValue } = helpers

  const customStyles = {
    control: (provided: object) => ({
      ...provided,
      borderRadius: '3px',
      border: '1px solid #333',
      width: '300px',
      outline: 'none',
      boxShadow: 'none',
      fontSize: '14px',
      '&:hover': {
        boxShadow: 'none',
        border: '1px solid #333',
      },
    }),
    singleValue: (provided: object) => ({
      ...provided,
      color: '#000',
    }),
    indicatorSeparator: () => null,
    placeholder: (provided: object) => ({
      ...provided,
      fontSize: '14px',
    })
  }

  return (
    <div>
      <Select
        placeholder={placeholder}
        options={options}
        name={field.name}
        onChange={(option: Option) => setValue(option.value)}
        instanceId={props.id}
        styles={customStyles}
      />
    </div>
  );
};

export default DropDown