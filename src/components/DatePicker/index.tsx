import { TextField } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";

function DatePicker(props: any) {
  const {
    value = new Date(),
    onChange,
    label = "",
    name = "",
    className,
  } = props;

  const handleChangeDate = (value: any) => {
    onChange(value);
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateTimePicker
        renderInput={(props) => (
          <TextField
            {...props}
            name={name}
            size="small"
            className={className}
            style={{color: '#fff'}}
          />
        )}
        label={label}
        value={value}
        onChange={handleChangeDate}
        {...props}
      />
    </LocalizationProvider>
  );
}
export default DatePicker;
