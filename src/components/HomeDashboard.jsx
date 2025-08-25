import React from 'react'

const HomeDashboard = () => {
  return (
    <>
      <Grid
        container
        spacing={4}
        direction={{ xs: "column", md: "row" }} // mobile = column, desktop = row
        sx={{
          marginTop: { xs: "7%", md: "4%" },
          paddingX: { xs: "5%", md: "8%" },
          alignItems: "center",
        }}
      >
        {/* TEXT */}
        <Grid
          item
          xs={12}
          md={6}
          order={{ xs: 2, md: 1 }} // mobile: bawah, desktop: kiri
          sx={{
            color: theme.palette.text.primary,
            textAlign: { xs: "center", md: "left" },
          }}
        >

          {/* IMAGE */}
        <Grid
          item
          xs={12}
          md={6}
          order={{ xs: 1, md: 2 }} // mobile: atas, desktop: kanan
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src={bghome}
            alt="bghome"
            style={{
              width: "100%",
              height: "auto",
              maxWidth: "400px", // biar nggak terlalu gede
            }}
          />
        </Grid>

          <Typography
  variant="h3"
  sx={{
    fontWeight: 900,
    fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3rem" },
    marginBottom: "2%",
    color: theme.palette.text.secondary,   // 🔥 ini kuncinya
  }}
>
  Indonesian Traditional Recipes
</Typography>

<Typography
  sx={{
    paddingX: { xs: "5%", md: 0 },
    marginBottom: "5%",
    fontSize: { xs: "0.9rem", sm: "1rem" },
    color: theme.palette.text.secondary, // 🔥 ini juga
  }}
>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae nam aut
  itaque, labore explicabo obcaecati modi repudiandae ratione. Odio, molestias!
</Typography>


          <Box
            sx={{
              display: "flex",
              gap: "5%",
              justifyContent: { xs: "center", md: "flex-start" },
              flexWrap: "wrap",
            }}
          >
            <Button
              variant="contained"
              onClick={() => navigate("/resep")}
              sx={{
                backgroundColor: "#1E5128",
                "&:hover": { backgroundColor: "#163d1e" },
              }}
            >
              Get Started
            </Button>
          </Box>
        </Grid>

        
      </Grid>
    </>
  )
}

export default HomeDashboard