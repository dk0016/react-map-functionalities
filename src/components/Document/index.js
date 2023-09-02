import React from "react";
import Box from "@mui/material/Box";
import { Grid, Typography } from "@mui/material";

const images = [
  {
    imgPath:
      "https://cdn.pixabay.com/photo/2015/09/16/08/55/online-942406_640.jpg",
  },
  {
    imgPath:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSFw9geU13_Q4uNWSwOzb-C8Ihr6Fb8DPXvCvzFSFqoQG3ts0Q6Mf76aGGDTat7ubcHHznSWAMEBc&usqp=CAU&ec=48665701",
  },
  {
    imgPath:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeEjttOWuIZpM5lvixBVA9T_gVYpL-JEA0HKwqt9LgAEqY6wuDOcvAjNkEkw3T653diDNm5WLrx7s&usqp=CAU&ec=48665701",
  },
  {
    imgPath:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYARLw_hChgyRPWtS4wNVwfUd-U6um50uhYcYJFobgY-Nl_s04e__539ES2UiG4yU0CasReUs6onc&usqp=CAU&ec=48665701",
  },
  {
    imgPath:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOn_sqbdjxADJVeLosikVRH3u1UnQUHW04c9jeTqfytLKOdUOk-vcTid7sH_yE3QqEmZBrDgTPq8g&usqp=CAU&ec=48665701",
  },
];
const Document = () => {
  const [page, setPage] = React.useState(1);
  const [rotate, setRotate] = React.useState(90);

  const navPage = (index) => {
    setPage(index);
  };

  const rotateFun = () => {
    if (rotate < 360) {
      setRotate(rotate + 90);
      document.getElementById(
        `imageTrack${page}`
      ).style.transform = `rotate(${rotate}deg)`;
      document.getElementById(`imageTrack${page}`).style.marginBottom = "100px";
      document.getElementById(`imageTrack${page}`).style.marginTop = "100px";
    } else {
      setRotate(90);
      document.getElementById(
        `imageTrack${page}`
      ).style.transform = `rotate(${rotate}deg)`;
    }
  };
  const pageTrack = async () => {
    let observer = await new IntersectionObserver(
      async (entries) => {
        var ele = await entries.filter((entry) => entry.isIntersecting);
        if (ele.length > 0) {
          ele = ele[0].target;
          setPage(Number(ele.id.charAt(ele.id.length - 1)));
        }
      },
      {
        root: null,
        rootMargin: "40px",
        threshold: 0.8,
      }
    );

    document
      .querySelectorAll(".test1 [id^=track]")
      .forEach((ele) => observer.observe(ele));
    document
      .querySelectorAll(".test [id^=imageTrack]")
      .forEach((ele) => observer.observe(ele));
  };
  React.useEffect(() => {
    document.getElementById(`imageTrack${page}`).scrollIntoView();
    document.getElementById(`imageTracks${page}`).scrollIntoView();
    document.getElementById(`track${page}`).scrollIntoView();
  }, [page]);
  React.useEffect(() => {
    pageTrack();
  }, []);

  return (
    <Grid container style={{ height: "100vh", width: "100vw" }}>
      <Grid item md={8} style={{ height: "100%" }}>
        <Grid container style={{ height: "100%" }}>
          <Grid
            item
            md={3}
            sm={3}
            style={{ maxHeight: "100%", overflow: "auto" }}
          >
            {images.map((data, index) => (
              <Box
                id={`imageTracks${index + 1}`}
                key={index}
                margin={2}
                sx={{
                  width: 100,
                  height: 100,
                  display: "flex",
                  flexDirection: "column",
                  border: page === index + 1 && "3px solid red",
                  boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.06)",
                }}
                onClick={() => navPage(index + 1)}
              >
                <img src={data?.imgPath} alt="no" style={{ height: "100%" }} />
              </Box>
            ))}
          </Grid>
          <Grid
            item
            md={9}
            sm={9}
            style={{ maxHeight: "100%", overflow: "auto" }}
            className="test"
          >
            {images.map((data, index) => (
              <Box
                id={`imageTrack${index + 1}`}
                key={index}
                margin={2}
                sx={{
                  width: 700,
                  height: 550,
                  display: "flex",
                  flexDirection: "column",
                  marginBottom: "100px",
                  marginTop: "100px",
                }}
                onClick={() => rotateFun()}
              >
                <img src={data?.imgPath} alt="no" style={{ height: "100%" }} />
              </Box>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        md={4}
        style={{ maxHeight: "400px", overflow: "auto" }}
        className="test1"
      >
        {images.map((data, ind) => (
          <Typography
            id={`track${ind + 1}`}
            sx={{ minHeight: "200px", backgroundColor: "grey" }}
          >
            <h1>hello world {ind + 1}</h1>
          </Typography>
        ))}
      </Grid>
    </Grid>
  );
};

export default Document;
