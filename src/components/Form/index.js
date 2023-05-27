import {
  Button,
  FormHelperText,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "../../App.css";
import { formSchema } from "../../utils/ValidatorSchema";

const FormControl = () => {
  const {
    control: fcontrol,
    handleSubmit,
    // setError,
    reset,
    formState: { errors },
  } = useForm({
    criteriaMode: "all",
    defaultValues: {
      name: "",
      email: "",
      password: "",
      mobileNumber: "",
    },
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(formSchema),
  });

  const [data, setData] = React.useState([]);

  const formSubmit = (datas) => {
    console.log(datas);
    setData([...data, datas]);
    reset();
    alert("check");
  };

  const handleTabClosing = () => {
    localFalse();
  };

  const alertUser = (event) => {
    event.preventDefault();
    event.returnValue = "";
    localStorage.setItem("localCheck", true);
  };

  const localFalse = () => localStorage.setItem("localCheck", null);
  React.useEffect(() => {
    window.addEventListener("beforeunload", alertUser);
    window.addEventListener("unload", handleTabClosing);
    return () => {
      window.removeEventListener("beforeunload", alertUser);
      window.removeEventListener("unload", handleTabClosing);
    };
  });

  return (
    <Typography>
      <Typography component={"div"}>
        <Typography className="heightFix">
          <Controller
            control={fcontrol}
            defaultValue=""
            name="name"
            render={({ field: { onChange, value, name, ref }, formState }) => {
              return (
                <TextField
                  id="name"
                  value={value}
                  name={name}
                  onChange={(e) => onChange(e)}
                  label="Name"
                  type="text"
                  variant="outlined"
                  error={errors?.name?.message}
                />
              );
            }}
          />
        </Typography>
        <FormHelperText error required>
          {errors?.name?.message}
        </FormHelperText>
        <Typography className="heightFix">
          <Controller
            control={fcontrol}
            defaultValue=""
            name="email"
            render={({ field: { onChange, value, name, ref }, formState }) => {
              return (
                <TextField
                  id="email"
                  label="Email"
                  type="email"
                  variant="outlined"
                  value={value}
                  onChange={(e) => onChange(e)}
                  name={name}
                  error={errors?.email?.message}
                />
              );
            }}
          />
        </Typography>
        <FormHelperText required error>
          {errors?.email?.message}
        </FormHelperText>
        <Typography className="heightFix">
          <Controller
            control={fcontrol}
            defaultValue=""
            name="password"
            render={({ field: { onChange, value, name, ref }, formState }) => {
              return (
                <TextField
                  id="password"
                  label="Password"
                  type="password"
                  variant="outlined"
                  value={value}
                  name={name}
                  onChange={(e) => onChange(e)}
                  error={errors?.password?.message}
                />
              );
            }}
          />
        </Typography>
        <FormHelperText error required>
          {errors?.password?.message}
        </FormHelperText>
        <Typography className="heightFix">
          <Controller
            control={fcontrol}
            defaultValue=""
            name="mobileNumber"
            render={({ field: { onChange, value, name, ref }, formState }) => {
              return (
                <TextField
                  id="mobile"
                  label="Mobile Number"
                  type="number"
                  variant="outlined"
                  value={value}
                  name={name}
                  onChange={(e) => onChange(e)}
                  error={errors?.mobileNumber?.message}
                />
              );
            }}
          />
        </Typography>
        <FormHelperText error required>
          {errors?.mobileNumber?.message}
        </FormHelperText>
        <Typography
          sx={{
            marginTop: "10px",
          }}
        >
          <Button
            color="success"
            variant="contained"
            onClick={handleSubmit(formSubmit)}
          >
            Submit
          </Button>
        </Typography>
      </Typography>
      <Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 800 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Id</TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Email</TableCell>
                <TableCell align="center">Mobile</TableCell>
              </TableRow>
            </TableHead>
            {data?.length &&
              data?.map((data, index) =>
                index === 0 ? null : (
                  <TableBody>
                    <TableCell align="center">{index + 1}</TableCell>
                    <TableCell align="center">{data.name}</TableCell>
                    <TableCell align="center">{data.email}</TableCell>
                    <TableCell align="center">{data.mobileNumber}</TableCell>
                  </TableBody>
                )
              )}
          </Table>
        </TableContainer>
      </Typography>
    </Typography>
  );
};

export default FormControl;
