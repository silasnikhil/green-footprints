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
import {
  getAwsData,
  getAzureData,
  getGcpData,
} from "../../service/carbonService";

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

export default function BasicTabs({ data }) {
  const [value, setValue] = React.useState(0);
  const [aws, setAws] = React.useState("");
  const [azure, setAzure] = React.useState("");
  const [gcp, setGcp] = React.useState("");
  const [loading, setLoading] = React.useState(true);
  const [inputData, setInputData] = React.useState({ data });
  // console.log(inputData);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  React.useEffect(() => {
    // console.log(inputData);
    const getData = async () => {
      // const inputTest = {
      //   count: 10,
      //   load: 0.5,
      //   duration: 345,
      // };
      const input = {
        count: inputData.data.count,
        load: inputData.data.load,
        duration: inputData.data.duration,
      };
      // console.log(input);
      // console.log(inputTest);

      // Fetching AWS Data
      const AWS_response = await getAwsData(input);
      // console.log(response);
      setAws(AWS_response);

      //Fetching Azure Data

      const AZURE_response = await getAzureData(input);
      setAzure(AZURE_response);

      //Fetching GCP Data

      const GCP_response = await getGcpData(input);
      setGcp(GCP_response);

      setLoading(false);
    };
    getData(); // run it, run it
  }, []);

  if (!loading) {
    const sortAzure = azure.results.sort((a, b) => {
      if (a.co2e < b.co2e) {
        return -1;
      }
    });

    const sortGcp = gcp.results.sort((a, b) => {
      if (a.co2e < b.co2e) {
        return -1;
      }
    });

    const rData = [aws.results[0], azure.results[0], gcp.results[0]];

    const sortRdata = rData.sort((a, b) => {
      if (a.co2e < b.co2e) {
        return -1;
      }
    });

    const sortAws = aws.results.sort((a, b) => {
      if (a.co2e < b.co2e) {
        return -1;
      }
    });
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
                {aws.results.map((result) => (
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
                {azure.results.map((result) => (
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
                {gcp.results.map((result) => (
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
}
