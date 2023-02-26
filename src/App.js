import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const respondData = [
  {
    title: "Accordian 1",
    issueDetail: "Accordian issue 1",
    issueReceived: "Accordian issue Received 1",
    issueTaken: "Accordian issue Taken 1",
    action: "add 1",
    subItem: [
      {
        title: "Accordian sub Item 1",
        issueDetail: "Accordian sub Item issue 1",
        issueReceived: "Accordian sub Item issue Received 1",
        issueTaken: "Accordian sub Item issue Taken 1",
        action: "add sub Item 1",
      },
      {
        title: "Accordian sub Item 2",
        issueDetail: "Accordian issue sub Item 2",
        issueReceived: "Accordian issue Received sub Item 2",
        issueTaken: "Accordian issue Taken sub Item 2",
        action: "add sub Item 2",
      },
    ],
  },
  {
    title: "Accordian 2",
    issueDetail: "Accordian issue 2",
    issueReceived: "Accordian issue Received 2",
    issueTaken: "Accordian issue Taken 2",
    action: "add 2",
  },
  {
    title: "Accordian 3",
    issueDetail: "Accordian issue 3",
    issueReceived: "Accordian issue Received 3",
    issueTaken: "Accordian issue Taken 3",
    action: "add 3",
  },
  {
    title: "Accordian 4",
    issueDetail: "Accordian issue 4",
    issueReceived: "Accordian issue Received 4",
    issueTaken: "Accordian issue Taken 4",
    action: "add 4",
    subItem: [
      {
        title: "Accordian sub Item 1",
        issueDetail: "Accordian sub Item issue 1",
        issueReceived: "Accordian sub Item issue Received 1",
        issueTaken: "Accordian sub Item issue Taken 1",
        action: "add sub Item 1",
      },
      {
        title: "Accordian sub Item 2",
        issueDetail: "Accordian issue sub Item 2",
        issueReceived: "Accordian issue Received sub Item 2",
        issueTaken: "Accordian issue Taken sub Item 2",
        action: "add sub Item 2",
      },
    ],
  },
  {
    title: "Accordian 5",
    issueDetail: "Accordian issue 5",
    issueReceived: "Accordian issue Received 5",
    issueTaken: "Accordian issue Taken 5",
    action: "add 5",
  },
];
function App() {
  const [expanded, setExpanded] = React.useState(false);
  const [subExpanded, setSubExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const subHandleChange = (panel) => (event, isExpanded) => {
    setSubExpanded(isExpanded ? panel : false);
  };
  return (
    <div
      style={{
        width: "max-content",
      }}
    >
      {/* <Common />
      <Typography component={"div"} className="contentAdjust">
        <Typography style={{ backgroundColor: "aqua", width: "50%" }}>
          iimimim
        </Typography>
        <Typography style={{ backgroundColor: "black", width: "45%" }}>
          vevevefv
        </Typography>
      </Typography> */}
      {respondData.map((data, index) => (
        <Accordion
          expanded={expanded === data.title}
          onChange={handleChange(data.title)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ color: "text.secondary" }}>
              {data.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">Issue Detail</TableCell>
                      <TableCell align="center">Issue Received</TableCell>
                      <TableCell align="center">Issue Taken</TableCell>
                      <TableCell align="center">action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableCell align="center">{data.issueDetail}</TableCell>
                    <TableCell align="center">{data.issueReceived}</TableCell>
                    <TableCell align="center">{data.issueTaken}</TableCell>
                    <TableCell align="center">{data.action}</TableCell>
                  </TableBody>
                </Table>
              </TableContainer>
            </Typography>
            {data?.subItem &&
              data?.subItem?.map((subData, subIndex) => (
                <Accordion
                  expanded={subExpanded === subData.title}
                  onChange={subHandleChange(subData.title)}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography sx={{ color: "text.secondary" }}>
                      {subData.title}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                          <TableHead>
                            <TableRow>
                              <TableCell align="center">Issue Detail</TableCell>
                              <TableCell align="center">
                                Issue Received
                              </TableCell>
                              <TableCell align="center">Issue Taken</TableCell>
                              <TableCell align="center">action</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            <TableCell align="center">
                              {subData.issueDetail}
                            </TableCell>
                            <TableCell align="center">
                              {subData.issueReceived}
                            </TableCell>
                            <TableCell align="center">
                              {subData.issueTaken}
                            </TableCell>
                            <TableCell align="center">
                              {subData.action}
                            </TableCell>
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}

export default App;
