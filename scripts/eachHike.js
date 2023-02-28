function displayHikeInformation() {
    // retrieve document id from the url
    let params = new URL(window.location.href) //gets the URL from the search bar

    //define hike ID
    let ID = params.searchParams.get("docID");

    db.collection("hikes").doc(ID).get().then(
        thisHike => {
            hikeInfo = thisHike.data();
            hikeCode = hikeInfo.code;
            hikeName = hikeInfo.name;

            document.getElementById("hikeName").innerHTML = hikeName;
            let imgEvent = document.querySelector(".hike-img");
            imgEvent.src = "../images/" + hikeCode + ".jpg";
        }
    )
}
displayHikeInformation();