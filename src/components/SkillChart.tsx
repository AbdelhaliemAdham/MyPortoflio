import React from "react";
import { Stack, Typography } from "@mui/material";
import { Gauge } from "@mui/x-charts/Gauge";

interface BasicGaugesProps {
  percent: number;
  title: string;
}

const BasicGauges: React.FC<BasicGaugesProps> = ({ percent, title }) => {
  return (
    <Stack direction="column" spacing={2} alignItems="center">
      <Typography
        className="text-base md:2xl"
        variant="h6"
        component="h2"
        color="white"
        fontWeight="bold"
      >
        {title}
      </Typography>
      <Gauge
        width={150}
        height={150}
        value={percent}
        valueMin={0}
        valueMax={100}
      />
    </Stack>
  );
};

export default BasicGauges;
