let page = document.querySelector(".moreWrapper");
let host = window.location.host;
//* Develop
// let fetchPath = "http://" + host + "/general/js/scripts/sermons/sermons-data/pg-main-data.json";
//* Github
let fetchPath = "https://" + host + "/victory/general/js/scripts/sermons/sermons-data/pg-main-data.json";

fetch(fetchPath)
   .then((response) => {
      return response.json();
   })
   .then((data) => {
      for (let item of data) {
         let video = `
            <div class="sermon__embedded">
               <iframe loading="lazy" width="560" height="315" src="${item.link}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <!-- <hr> -->
         `;

         let sermonDiv = document.createElement("div");
         sermonDiv.innerHTML = video;

         sermonDiv.classList.add("sermon", "moreItem");
         page.prepend(sermonDiv);

         let title = document.createElement("div");
         title.classList.add("sermon__title");
         title.innerHTML = item.title;

         let descr = document.createElement("div");
         descr.classList.add("sermon__content");
         descr.innerHTML = item.descr;

         sermonDiv.prepend(descr);
         sermonDiv.prepend(title);
      }

      $(document).ready(function () {
         $(".moreItem").slice(0, 1).show();
         $("#loadMore").on("click", function (e) {
            e.preventDefault();
            $(".moreItem:hidden").slice(0, 1).slideDown();
            if ($(".moreItem:hidden").length == 0) {
               $("#loadMore").addClass("hidden");
            }
         });
      });
   });
