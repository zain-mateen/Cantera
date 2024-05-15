
/* ======================================
        Team Load More section Starts here
====================================== */

const teamMore = () => {

    let teamBTN = document.getElementById("team-more-btn");
    let teamlessBTN = document.getElementById("team-less-btn");
    let Creator = document.querySelector("#hide-row");


    teamBTN.addEventListener("click", () => {
            Creator.style.display = "flex"
            teamBTN.style.display = "none"
            teamlessBTN.style.display = "flex"
    });
    teamlessBTN.addEventListener("click", () => {
            Creator.style.display = "none"
            teamBTN.style.display = "flex"
            teamlessBTN.style.display = "none"
    });

}

teamMore();

/* ======================================
    Team Load More section Ends here
====================================== */
