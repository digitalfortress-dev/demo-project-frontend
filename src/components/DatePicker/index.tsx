import { TextField } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";
import { DesktopDatePicker } from "@mui/lab";

function DatePicker(props: any) {
  const {
    value = new Date(),
    onChange,
    label = "",
    name = "",
    className,
    type = "date_time",
  } = props;

  const handleChangeDate = (value: any) => {
    onChange(value);
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      {type === "date_time" && (
        <DateTimePicker
          renderInput={(props) => (
            <TextField
              {...props}
              name={name}
              size="small"
              className={className}
            />
          )}
          label={label}
          value={value}
          onChange={handleChangeDate}
          {...props}
        />
      )}
      {type === "date" && (
        <DesktopDatePicker
          {...props}
          label={label}
          value={value}
          onChange={handleChangeDate}
          renderInput={(params) => (
            <TextField
              {...params}
              name={name}
              size="small"
              className={className}
            />
          )}
        />
      )}
    </LocalizationProvider>
  );
}
export default DatePicker;
