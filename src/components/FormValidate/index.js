import {
  Autocomplete,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { documentFormSchema } from "../../utils/ValidatorSchema";
const names = [
  { name: "dinesh" },
  { name: "kumar" },
  { name: "dk" },
  { name: "jdk" },
];
const DocType = [
  { name: "pdf" },
  { name: "doc" },
  { name: "xml" },
  { name: "jpeg" },
];
// const godName = [
//   { name: "namashivaya" },
//   { name: "shiva" },
//   { name: "sivam" },
//   { name: "easan" },
// ];
const sampleData = [
  { sample: "", check: "Check1", test: "Test1" },
  { sample: "Sample2", check: "Check2", test: "Test2" },
  { sample: "Sample3", check: "Check3", test: "Test3" },
  { sample: "Sample4", check: "Check4", test: "Test4" },
  { sample: "Sample5", check: "Check5", test: "Test5" },
  { sample: "Sample6", check: "Check6", test: "Test6" },
  { sample: "Sample7", check: "Check7", test: "Test7" },
  { sample: "Sample8", check: "Check8", test: "Test8" },
  { sample: "Sample9", check: "Check9", test: "Test9" },
  { sample: "Sample10", check: "Check10", test: "Test10" },
  { sample: "Sample11", check: "Check11", test: "Test11" },
  { sample: "Sample12", check: "Check12", test: "Test12" },
  { sample: "Sample13", check: "Check13", test: "Test13" },
];
const FormValidate = () => {
  const {
    control: documentControl,
    handleSubmit,
    formState: { errors },
  } = useForm({
    criteriaMode: "all",
    defaultValues: {
      splitInfo: [{ sampleCode: "" }],
    },
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(documentFormSchema),
  });
  const [sample, setSample] = React.useState([]);
  const [check, setCheck] = React.useState([]);
  const [test, setTest] = React.useState([]);

  const handleSampleChange = (sampleData, index) => {
    sample.splice(index, 1, sampleData);
    setSample(sample);
    console.log(sample);
  };
  const handleCheckChange = (checkData, index) => {
    check.splice(index, 1, checkData);
    setCheck(check);
  };
  const handleTestChange = (testData, index) => {
    test.splice(index, 1, testData);
    setTest(test);
  };

  const formSubmit = () => {
    const data = {
      sample: sample,
    };
    console.log(data);
  };
  React.useEffect(() => {
    setSample([]);
    setCheck([]);
    setTest([]);
  }, []);
  React.useEffect(() => {
    sampleData.forEach((data, index) => {
      setSample((pre) => [...pre, data?.sample]);
      setCheck((pre) => [...pre, data?.check]);
      setTest((pre) => [...pre, data?.test]);
    });
  }, []);
  console.log(errors);
  return (
    <Typography
      component={"div"}
      sx={{
        height: "100%",
        width: "90vw",
        backgroundColor: "aqua",
        display: "flex",
        justifyContent: "center",
        margin: 5,
        flexDirection: "column",
        overflow: "auto",
      }}
    >
      {sampleData?.map((data, index) => {
        return (
          <Typography key={index} sx={{ margin: 4 }}>
            <Grid container md={12}>
              <Grid
                item
                md={4}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Typography>
                  <Controller
                    control={documentControl}
                    defaultValue=""
                    name={`splitInfo.${index}.sampleCode`}
                    render={({ field: { onChange, name } }) => {
                      const fieldError =
                        errors["splitInfo"] &&
                        errors["splitInfo"][index] &&
                        errors["splitInfo"][index]["sampleCode"] &&
                        errors["splitInfo"][index]["sampleCode"]["message"];
                      return (
                        <FormControl sx={{ width: 150 }}>
                          <Autocomplete
                            fullWidth
                            freeSolo
                            disableClearable
                            id="free-solo-2-demo"
                            options={names.map((option) => option.name)}
                            // defaultValue={data?.sample}
                            onChange={(e) => {
                              onChange(e);
                              handleSampleChange(e.target.textContent, index);
                            }}
                            name={name}
                            error={fieldError ? true : false}
                            defaultValue={data?.sample}
                            renderInput={(params) => (
                              <TextField
                                {...params}
                                placeholder="sample"
                                InputProps={{
                                  ...params.InputProps,
                                  type: "search",
                                }}
                              />
                            )}
                          />
                        </FormControl>
                      );
                    }}
                  />
                </Typography>
              </Grid>
              <Grid md={4} sx={{ display: "flex", justifyContent: "center" }}>
                <Typography>
                  <FormControl sx={{ width: 150 }}>
                    <InputLabel>Check</InputLabel>

                    <Select
                      fullWidth
                      defaultValue={data?.check}
                      onChange={(e) => handleCheckChange(e.target.value, index)}
                    >
                      {DocType?.map((data) => {
                        return (
                          <MenuItem value={data?.name}>{data?.name}</MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </Typography>
              </Grid>
              <Grid md={4} sx={{ display: "flex", justifyContent: "center" }}>
                <Typography>
                  <FormControl sx={{ width: 150 }}>
                    <InputLabel>Test</InputLabel>
                    <Select
                      fullWidth
                      label="Age"
                      onChange={(e) => {
                        onchange(e);
                        handleTestChange(e.target.value, index);
                      }}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Typography>
              </Grid>
            </Grid>
          </Typography>
        );
      })}
      <Typography>
        <Button variant="contained" onClick={handleSubmit(formSubmit)}>
          Submit
        </Button>
      </Typography>
    </Typography>
  );
};

export default FormValidate;
