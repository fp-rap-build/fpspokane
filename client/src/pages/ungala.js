import * as globalStyles from "../styles/Global/Global.module.css";
import * as styles from "../styles/pages/UnGala.module.css";

import Button from "../components/Global/Button";
import React from "react";
import bg_image from "../images/ungala/new_ungala_bg.webp";
import image from "../images/ungala/new_ungala.webp";
import { navigate } from "gatsby";
import video from "../images/ungala/video.mp4";

export default function ungala() {
  return (
    <div>
      <div className={styles.videoContainer}>
        <div className={styles.videoOverlay}>
          <img src={image} className={styles.imageOver} alt="Logo" />
        </div>
        {/* <video className={styles.video} autoPlay muted>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
        <img src={bg_image} className={styles.video} alt="Background" />
      </div>

      <div className={globalStyles.genericContainer}>
        <section className={styles.section}>
          <Button
            onClick={() =>
              window.open(
                "https://familypromisespokane-bloom.kindful.com/e/ungala-2022",
                "_blank"
              )
            }
            color={"lightpurple"}
          >
            Reserve Your Seats
          </Button>
          <h3>
            October 27, 2022, <br /> 6pm | In-Person & Virtual
          </h3>
          <h4>
            Join us for a "Homecoming" themed celebration and vision-casting
            evening of Family Promise fun!
          </h4>

          <h2>
            Even if you are unable to attend, you can still be a part of
            changing the future for homeless families.
          </h2>

          <Button
            onClick={() => navigate("/donate")}
            color="lightpurple"
            id="donate-btn"
            style={{
              width: "262px",
              height: "67px",
              padding: "0",
              fontSize: "36px",
              marginBottom: "100px",
            }}
          >
            DONATE
          </Button>
        </section>
      </div>
    </div>
  );
}
