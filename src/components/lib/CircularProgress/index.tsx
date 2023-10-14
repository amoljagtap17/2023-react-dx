"use client";

import {
  Box,
  CircularProgressProps,
  CircularProgress as MUICircularProgress,
  circularProgressClasses,
} from "@mui/material";

export function CircularProgress(props: CircularProgressProps) {
  return (
    <Box sx={{ position: "relative" }}>
      <MUICircularProgress
        variant="determinate"
        sx={{
          color: (theme) =>
            theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
        }}
        size={100}
        thickness={4}
        {...props}
        value={100}
      />
      <MUICircularProgress
        variant="indeterminate"
        disableShrink
        sx={{
          color: (theme) => theme.palette.primary.main,
          animationDuration: "1000ms",
          position: "absolute",
          left: 0,
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: "round",
          },
        }}
        size={100}
        thickness={4}
        {...props}
      />
    </Box>
  );
}
