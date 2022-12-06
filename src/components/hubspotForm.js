import { Container, Grid, CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import HubspotForm from "react-hubspot-form";

const HubspotContactForm = () => {
  /*  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/v2.js";
    document.body.appendChild(script);

    script.addEventListener("load", () => {
      // @TS-ignore
      if (window.hbspt) {
        // @TS-ignore
        setLoading(false)
        window.hbspt.forms.create({
          region: "na1",
          portalId: "22188080",
          formId: "bc3a31bc-8291-4ab1-b14a-3b4691290d01",
          target: "#hubspotForm",
        });
      }
    });
  }, [setLoading]); */

  return (
    <>
      <Grid sx={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <div className="title-item">Let’s get in touch.</div>
      </Grid>
      <Container sx={{ marginTop: "20px" }}>
        <HubspotForm
          region="na1"
          portalId="22188080"
          formId="bc3a31bc-8291-4ab1-b14a-3b4691290d01"
          onSubmit={() => console.log("Submit!")}
          onReady={(form) => console.log("Form ready!")}
          loading={
            <Grid sx={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
              <CircularProgress />
            </Grid>
          }
        />
      </Container>

      {/* <Grid sx={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <div className="title-item">Let’s get in touch.</div>
      </Grid>
      {loading ? (
        <Grid sx={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
          <CircularProgress />
        </Grid>
      ) : (
        <>
          {" "}
          <Container sx={{ marginTop: "20px" }}>
            <div id="hubspotForm"></div>
          </Container>
        </>
      )} */}
    </>
  );
};

export default HubspotContactForm;
