let page = document.querySelector(".sermons-main-page");

fetch("http://127.0.0.1:5500/general/js/scripts/sermons/sermons-data/pg-main-data.json")
   .then((response) => {
      return response.json();
   })
   .then((data) => {
      for (let item of data) {
         let video = `
            <div class="sermon__embedded">
               <iframe loading="lazy" width="560" height="315" src="${item.link}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
         `;

         let sermonDiv = document.createElement("div");
         sermonDiv.innerHTML = video;

         sermonDiv.classList.add("sermon", "content");
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
   });
