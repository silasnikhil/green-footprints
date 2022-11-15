import axios from "axios";

const AWS_BATCH_URL = "https://beta3.api.climatiq.io/compute/aws/cpu/batch";
const AZURE_BATCH_URL = "https://beta3.api.climatiq.io/compute/azure/cpu/batch";
const GCP_BATCH_URL = "https://beta3.api.climatiq.io/compute/gcp/cpu/batch";
const TOKEN = "J4BE4F5ND14CQHG6TC33CED2AYC1";

const AWS_BODY = [
  {
    cpu_count: 0,
    region: "af_south_1",
    cpu_load: 0,
    duration: 0,
    duration_unit: "day",
  },
  {
    cpu_count: 0,
    region: "ap_east_1",
    cpu_load: 0,
    duration: 0,
    duration_unit: "day",
  },
  {
    cpu_count: 0,
    region: "ap_northeast_1",
    cpu_load: 0,
    duration: 0,
    duration_unit: "day",
  },
  {
    cpu_count: 0,
    region: "ap_northeast_2",
    cpu_load: 0,
    duration: 0,
    duration_unit: "day",
  },
  {
    cpu_count: 0,
    region: "ap_northeast_3",
    cpu_load: 0,
    duration: 0,
    duration_unit: "day",
  },
  {
    cpu_count: 0,
    region: "ap_south_1",
    cpu_load: 0,
    duration: 0,
    duration_unit: "day",
  },
  {
    cpu_count: 0,
    region: "ap_southeast_1",
    cpu_load: 0,
    duration: 0,
    duration_unit: "day",
  },
  {
    cpu_count: 0,
    region: "ap_southeast_2",
    cpu_load: 0,
    duration: 0,
    duration_unit: "day",
  },
  {
    cpu_count: 0,
    region: "ca_central_1",
    cpu_load: 0,
    duration: 0,
    duration_unit: "day",
  },
  {
    cpu_count: 0,
    region: "cn_north_1",
    cpu_load: 0,
    duration: 0,
    duration_unit: "day",
  },
  {
    cpu_count: 0,
    region: "cn_northwest_1",
    cpu_load: 0,
    duration: 0,
    duration_unit: "day",
  },
  {
    cpu_count: 0,
    region: "eu_central_1",
    cpu_load: 0,
    duration: 0,
    duration_unit: "day",
  },
  {
    cpu_count: 0,
    region: "eu_north_1",
    cpu_load: 0,
    duration: 0,
    duration_unit: "day",
  },
  {
    cpu_count: 0,
    region: "eu_south_1",
    cpu_load: 0,
    duration: 0,
    duration_unit: "day",
  },
  {
    cpu_count: 0,
    region: "eu_west_1",
    cpu_load: 0,
    duration: 0,
    duration_unit: "day",
  },
  {
    cpu_count: 0,
    region: "eu_west_2",
    cpu_load: 0,
    duration: 0,
    duration_unit: "day",
  },
  {
    cpu_count: 0,
    region: "eu_west_3",
    cpu_load: 0,
    duration: 0,
    duration_unit: "day",
  },
  {
    cpu_count: 0,
    region: "me_south_1",
    cpu_load: 0,
    duration: 0,
    duration_unit: "day",
  },
  {
    cpu_count: 0,
    region: "sa_east_1",
    cpu_load: 0,
    duration: 0,
    duration_unit: "day",
  },
  {
    cpu_count: 0,
    region: "us_east_1",
    cpu_load: 0,
    duration: 0,
    duration_unit: "day",
  },
  {
    cpu_count: 0,
    region: "us_east_2",
    cpu_load: 0,
    duration: 0,
    duration_unit: "day",
  },
  {
    cpu_count: 0,
    region: "us_gov_east_1",
    cpu_load: 0,
    duration: 0,
    duration_unit: "day",
  },
  {
    cpu_count: 0,
    region: "us_gov_west_1",
    cpu_load: 0,
    duration: 0,
    duration_unit: "day",
  },
  {
    cpu_count: 0,
    region: "us_west_1",
    cpu_load: 0,
    duration: 0,
    duration_unit: "day",
  },
  {
    cpu_count: 0,
    region: "us_west_2",
    cpu_load: 0,
    duration: 0,
    duration_unit: "day",
  },
];

const AZURE_BODY = [
  {
    cpu_count: 0,
    region: "central_india",
    cpu_load: 0,
    duration: 0,
    duration_unit: "day",
  },
  {
    cpu_count: 0,
    region: "central_us",
    cpu_load: 0,
    duration: 0,
    duration_unit: "day",
  },
  {
    cpu_count: 0,
    region: "east_asia",
    cpu_load: 0,
    duration: 0,
    duration_unit: "day",
  },
  {
    cpu_count: 0,
    region: "east_us",
    cpu_load: 0,
    duration: 0,
    duration_unit: "day",
  },
  {
    cpu_count: 0,
    region: "east_us_2",
    cpu_load: 0,
    duration: 0,
    duration_unit: "day",
  },
  {
    cpu_count: 0,
    region: "east_us_3",
    cpu_load: 0,
    duration: 0,
    duration_unit: "day",
  },
  {
    cpu_count: 0,
    region: "north_central_us",
    cpu_load: 0,
    duration: 0,
    duration_unit: "day",
  },
  {
    cpu_count: 0,
    region: "north_europe",
    cpu_load: 0,
    duration: 0,
    duration_unit: "day",
  },
  {
    cpu_count: 0,
    region: "south_central_us",
    cpu_load: 0,
    duration: 0,
    duration_unit: "day",
  },
  {
    cpu_count: 0,
    region: "south_india",
    cpu_load: 0,
    duration: 0,
    duration_unit: "day",
  },
  {
    cpu_count: 0,
    region: "southeast_asia",
    cpu_load: 0,
    duration: 0,
    duration_unit: "day",
  },
  {
    cpu_count: 0,
    region: "uk_south",
    cpu_load: 0,
    duration: 0,
    duration_unit: "day",
  },
  {
    cpu_count: 0,
    region: "uk_west",
    cpu_load: 0,
    duration: 0,
    duration_unit: "day",
  },
  {
    cpu_count: 0,
    region: "west_central_us",
    cpu_load: 0,
    duration: 0,
    duration_unit: "day",
  },
  {
    cpu_count: 0,
    region: "west_europe",
    cpu_load: 0,
    duration: 0,
    duration_unit: "day",
  },
  {
    cpu_count: 0,
    region: "west_india",
    cpu_load: 0,
    duration: 0,
    duration_unit: "day",
  },
  {
    cpu_count: 0,
    region: "west_us",
    cpu_load: 0,
    duration: 0,
    duration_unit: "day",
  },
  {
    cpu_count: 0,
    region: "west_us_2",
    cpu_load: 0,
    duration: 0,
    duration_unit: "day",
  },
  {
    cpu_count: 0,
    region: "west_us_3",
    cpu_load: 0,
    duration: 0,
    duration_unit: "day",
  },
];

const GCP_BODY = [
  {
    cpu_count: 0,
    region: "asia_east_1",
    cpu_load: 0,
    duration: 0,
    duration_unit: "day",
  },
  {
    cpu_count: 0,
    region: "asia_east_2",
    cpu_load: 0,
    duration: 0,
    duration_unit: "day",
  },
  {
    cpu_count: 0,
    region: "asia_northeast_1",
    cpu_load: 0,
    duration: 0,
    duration_unit: "day",
  },
  {
    cpu_count: 0,
    region: "asia_northeast_2",
    cpu_load: 0,
    duration: 0,
    duration_unit: "day",
  },
  {
    cpu_count: 0,
    region: "asia_northeast_3",
    cpu_load: 0,
    duration: 0,
    duration_unit: "day",
  },
  {
    cpu_count: 0,
    region: "asia_south_1",
    cpu_load: 0,
    duration: 0,
    duration_unit: "day",
  },
  {
    cpu_count: 0,
    region: "asia_southeast_1",
    cpu_load: 0,
    duration: 0,
    duration_unit: "day",
  },
  {
    cpu_count: 0,
    region: "asia_southeast_2",
    cpu_load: 0,
    duration: 0,
    duration_unit: "day",
  },
  {
    cpu_count: 0,
    region: "australia_southeast_1",
    cpu_load: 0,
    duration: 0,
    duration_unit: "day",
  },
  {
    cpu_count: 0,
    region: "europe_north_1",
    cpu_load: 0,
    duration: 0,
    duration_unit: "day",
  },
  {
    cpu_count: 0,
    region: "europe_west_1",
    cpu_load: 0,
    duration: 0,
    duration_unit: "day",
  },
  {
    cpu_count: 0,
    region: "europe_west_2",
    cpu_load: 0,
    duration: 0,
    duration_unit: "day",
  },
  {
    cpu_count: 0,
    region: "europe_west_3",
    cpu_load: 0,
    duration: 0,
    duration_unit: "day",
  },
  {
    cpu_count: 0,
    region: "europe_west_4",
    cpu_load: 0,
    duration: 0,
    duration_unit: "day",
  },
  {
    cpu_count: 0,
    region: "europe_west_6",
    cpu_load: 0,
    duration: 0,
    duration_unit: "day",
  },
  {
    cpu_count: 0,
    region: "northamerica_northeast_1",
    cpu_load: 0,
    duration: 0,
    duration_unit: "day",
  },
  {
    cpu_count: 0,
    region: "southamerica_east_1",
    cpu_load: 0,
    duration: 0,
    duration_unit: "day",
  },
  {
    cpu_count: 0,
    region: "us_central_1",
    cpu_load: 0,
    duration: 0,
    duration_unit: "day",
  },
  {
    cpu_count: 0,
    region: "us_east_1",
    cpu_load: 0,
    duration: 0,
    duration_unit: "day",
  },
  {
    cpu_count: 0,
    region: "us_east_4",
    cpu_load: 0,
    duration: 0,
    duration_unit: "day",
  },
  {
    cpu_count: 0,
    region: "us_west_1",
    cpu_load: 0,
    duration: 0,
    duration_unit: "day",
  },
  {
    cpu_count: 0,
    region: "us_west_2",
    cpu_load: 0,
    duration: 0,
    duration_unit: "day",
  },
  {
    cpu_count: 0,
    region: "us_west_3",
    cpu_load: 0,
    duration: 0,
    duration_unit: "day",
  },
  {
    cpu_count: 0,
    region: "us_west_4",
    cpu_load: 0,
    duration: 0,
    duration_unit: "day",
  },
];

export const getAwsData = async (input) => {
  //   console.log(input);
  AWS_BODY.map(
    (region) => (
      (region.cpu_count = input.count),
      (region.cpu_load = input.load),
      (region.duration = input.duration)
    )
  );

  //   console.log(AWS_BODY);
  try {
    const { data } = await axios.post(AWS_BATCH_URL, AWS_BODY, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getAzureData = async (input) => {
  //   console.log(input);
  AZURE_BODY.map(
    (region) => (
      (region.cpu_count = input.count),
      (region.cpu_load = input.load),
      (region.duration = input.duration)
    )
  );

  //   console.log(AZURE_BODY);
  try {
    const { data } = await axios.post(AZURE_BATCH_URL, AZURE_BODY, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getGcpData = async (input) => {
  //   console.log(input);
  GCP_BODY.map(
    (region) => (
      (region.cpu_count = input.count),
      (region.cpu_load = input.load),
      (region.duration = input.duration)
    )
  );

  //   console.log(GCP_BODY);
  try {
    const { data } = await axios.post(GCP_BATCH_URL, GCP_BODY, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
