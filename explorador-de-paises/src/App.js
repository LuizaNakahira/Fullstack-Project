import React, { useContext } from "react";
import "./App.css";
import SearchForm from "./components/SearchForm";
import CountryCard from "./components/CountryCard";
import { CountriesContext } from "./context/CountriesContext";
import { Box, CircularProgress, Typography } from "@mui/material";

function App() {
  const { countries, errorMessage, isLoading } = useContext(CountriesContext);

  return (
    <div className="app-background">
      <Box
        sx={{
          textAlign: "center",
          p: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h2" gutterBottom className="MuiTypography-root title">
          Countries Explorer
        </Typography>
        <SearchForm />
        {errorMessage && (
          <Box
            sx={{
              mt: 2,
              color: "error.main",
              fontWeight: "bold",
              border: "1px solid red",
              padding: 2,
              borderRadius: 1,
            }}
          >
            <Typography color="error">{errorMessage}</Typography>
          </Box>
        )}
        {isLoading ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "50vh",
            }}
          >
            <CircularProgress size={100} thickness={8} sx={{ color: "#4682B4" }} />
          </Box>
        ) : (
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              gap: 3,
            }}
          >
            {countries.map((country) => (
              <CountryCard key={country.name.common} country={country} />
            ))}
          </Box>
        )}
      </Box>
    </div>
  );
}

export default App;
