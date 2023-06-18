import React from "react";
import Box from "@mui/material/Box";
import { Button, Grid } from "@mui/material";

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
    let observer = await new IntersectionObserver(async (entries) => {
      var ele = await entries.filter((entry) => entry.isIntersecting);
      if (ele.length > 0) {
        ele = ele[0].target;
        setPage(Number(ele.id.charAt(ele.id.length - 1)));
      }
    });

    document
      .querySelectorAll(".test [id^=imageTrack]")
      .forEach((ele) => observer.observe(ele));
  };
  React.useEffect(() => {
    document.getElementById(`imageTrack${page}`).scrollIntoView();
    document.getElementById(`imageTracks${page}`).scrollIntoView();
  }, [page]);
  React.useEffect(() => {
    pageTrack();
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "99vw",
      }}
    >
      <div
        style={{
          width: "70vw",
          height: "100%",
          overflow: "auto",
          backgroundColor: "#f0abab",
          borderRadius: "10px",
        }}
      >
        <Grid container sm={12} md={12}>
          <Grid md={2} sm={2} sx={{ maxHeight: "80vh", overflow: "auto" }}>
            {images.map((data, index) => {
              return (
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
                  <img
                    src={data?.imgPath}
                    alt="no"
                    style={{ height: "100%" }}
                  />
                </Box>
              );
            })}
          </Grid>
          <Grid
            md={10}
            sm={10}
            sx={{ maxHeight: "80vh", overflow: "auto" }}
            className="test"
            // onScroll={() => pageTrack()}
          >
            {images.map((data, index) => {
              return (
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
                  <img
                    src={data?.imgPath}
                    alt="no"
                    style={{ height: "100%" }}
                  />
                </Box>
              );
            })}
          </Grid>
        </Grid>
      </div>
      <div>
        <Button variant="contained" onClick={() => rotateFun()}>
          Rotate
        </Button>
      </div>
    </div>
  );
};

export default Document;
