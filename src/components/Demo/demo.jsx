import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./demo.css";
import { awsData, azureData, gcpData } from "../../dummy.js";

import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  TableSortLabel,
} from "@mui/material";

function TabPanel({ ...props }) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

// function a11yProps(number) {
//   return {
//     id: `simple-tab-${index}`,
//     "aria-controls": `simple-tabpanel-${index}`,
//   };
// }

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const [aws, setAws] = React.useState(awsData);
  const [azure, setAzure] = React.useState(azureData);
  const [gcp, setGcp] = React.useState(gcpData);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(aws);
    console.log(aws[0].results);
    console.log(azure[0].results);
    console.log(gcp[0].results);
  };

  const sortAws = aws[0].results.sort((a, b) => {
    if (a.co2e < b.co2e) {
      return -1;
    }
  });

  const sortAzure = azure[0].results.sort((a, b) => {
    if (a.co2e < b.co2e) {
      return -1;
    }
  });

  const sortGcp = gcp[0].results.sort((a, b) => {
    if (a.co2e < b.co2e) {
      return -1;
    }
  });

  const rData = [aws[0].results[0], azure[0].results[0], gcp[0].results[0]];

  const sortRdata = rData.sort((a, b) => {
    if (a.co2e < b.co2e) {
      return -1;
    }
  });

  console.log(rData);

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          textColor="secondary"
          indicatorColor="secondary"
        >
          <Tab label="AWS" />
          <Tab label="Azure" />
          <Tab label="GCP" />
          <Tab label="Recommended" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <TableContainer
          sx={{ maxHeight: "300px", bgcolor: "transparent" }}
          component={Paper}
        >
          <Table stickyHeader aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{
                    bgcolor: "#3d3d3d",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  Region
                </TableCell>

                <TableCell
                  sx={{
                    bgcolor: "#3d3d3d",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  <TableSortLabel
                    sx={{
                      bgcolor: "#3d3d3d",
                      color: "white",
                      textAlign: "center",
                    }}
                    active={true}
                    direction="asc"
                  >
                    <span className="text-white font-bold">Co2e</span>
                  </TableSortLabel>
                </TableCell>
                <TableCell
                  sx={{
                    bgcolor: "#3d3d3d",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  Source
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {aws[0].results.map((result) => (
                <TableRow
                  sx={{
                    "&:first-of-type td, &:first-of-type th": {
                      bgcolor: "green",
                      color: "white",
                      fontWeight: "bold",
                    },
                  }}
                >
                  <TableCell>{result.emission_factor.activity_id}</TableCell>
                  <TableCell>{result.co2e}</TableCell>
                  <TableCell>{result.emission_factor.source}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TableContainer
          sx={{ maxHeight: "300px", bgcolor: "transparent" }}
          component={Paper}
        >
          <Table stickyHeader aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{
                    bgcolor: "#3d3d3d",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  Region
                </TableCell>

                <TableCell
                  sx={{
                    bgcolor: "#3d3d3d",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  <TableSortLabel active={true} direction="asc">
                    <span className="text-white font-bold">Co2e</span>
                  </TableSortLabel>
                </TableCell>
                <TableCell
                  sx={{
                    bgcolor: "#3d3d3d",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  Source
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {azure[0].results.map((result) => (
                <TableRow
                  sx={{
                    "&:first-of-type td, &:first-of-type th": {
                      bgcolor: "green",
                      color: "white",
                      fontWeight: "bold",
                    },
                  }}
                >
                  <TableCell>{result.emission_factor.activity_id}</TableCell>
                  <TableCell>{result.co2e}</TableCell>
                  <TableCell>{result.emission_factor.source}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <TableContainer
          sx={{ maxHeight: "300px", bgcolor: "transparent" }}
          component={Paper}
        >
          <Table stickyHeader aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{
                    bgcolor: "#3d3d3d",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  Region
                </TableCell>

                <TableCell
                  sx={{
                    bgcolor: "#3d3d3d",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  <TableSortLabel active={true} direction="asc">
                    <span className="text-white font-bold">Co2e</span>
                  </TableSortLabel>
                </TableCell>
                <TableCell
                  sx={{
                    bgcolor: "#3d3d3d",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  Source
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {gcp[0].results.map((result) => (
                <TableRow
                  sx={{
                    "&:first-of-type td, &:first-of-type th": {
                      bgcolor: "green",
                      color: "white",
                      fontWeight: "bold",
                    },
                  }}
                >
                  <TableCell>{result.emission_factor.activity_id}</TableCell>
                  <TableCell>{result.co2e}</TableCell>
                  <TableCell>{result.emission_factor.source}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <TableContainer
          sx={{ maxHeight: "300px", bgcolor: "transparent" }}
          component={Paper}
        >
          <Table stickyHeader aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{
                    bgcolor: "#3d3d3d",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  Region
                </TableCell>

                <TableCell
                  sx={{
                    bgcolor: "#3d3d3d",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  <TableSortLabel active={true} direction="asc">
                    <span className="text-white font-bold">Co2e</span>
                  </TableSortLabel>
                </TableCell>
                <TableCell
                  sx={{
                    bgcolor: "#3d3d3d",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  Source
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rData.map((result) => (
                <TableRow
                  sx={{
                    "&:first-of-type td, &:first-of-type th": {
                      bgcolor: "green",
                      color: "white",
                      fontWeight: "bold",
                    },
                  }}
                >
                  <TableCell>{result.emission_factor.activity_id}</TableCell>
                  <TableCell>{result.co2e}</TableCell>
                  <TableCell>{result.emission_factor.source}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </TabPanel>
    </Box>
  );
}
