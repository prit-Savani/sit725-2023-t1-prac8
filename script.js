const addCards = (items) => {
  items.forEach((item) => {
    let itemToAppend =
      '<div class="col s4 center-align">' +
      '<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="' +
      item.path +
      '">' +
      '</div><div class="card-content">' +
      '<span class="card-title activator grey-text text-darken-4">' +
      item.title +
      '<i class="material-icons right">more_vert</i></span><p><a href="#">' +
      "</a></p></div>" +
      '<div class="card-reveal">' +
      '<span class="card-title grey-text text-darken-4">' +
      item.subTitle +
      '<i class="material-icons right">close</i></span>' +
      '<p class="card-text">' +
      item.description +
      "</p>" +
      "</div></div></div>";
    $("#card-section").append(itemToAppend);
  });
};

function postCat(cat) {
  $.ajax({
    url: "/api/cards",
    type: "POST",
    data: cat,
    success: (result) => {
      if (result.statusCode === 201) {
        console.log("success");
      }
    },
  });
}
const submitForm = () => {
  let formData = {};
  formData.title = $("#title").val();
  formData.subTitle = $("#subTitle").val();
  formData.path = $("#path").val();
  formData.description = $("#description").val();

  console.log(formData);
  postCat(formData);
};

const getcards = () => {
  $.get("/api/cards", (response) => {
    if (response.statusCode == 200) {
      addCards(response.data);
    }
  });
};

const getProjects = () => {
  $.get("/api/projects", (response) => {
    if (response.statusCode == 200) {
      addCards(response.data);
    }
  });
};

//* update your own code

$(document).ready(function () {
  $(".materialboxed").materialbox();
  $("#formSubmit").click(() => {
    submitForm();
  });
  getProjects();
  $(".modal").modal();
});
