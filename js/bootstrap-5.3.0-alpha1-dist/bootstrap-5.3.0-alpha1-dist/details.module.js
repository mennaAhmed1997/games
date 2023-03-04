export class Details {
  constructor() {
    this.rowDetails = document.querySelector(".rowDetails");
    this.cards = document.querySelector("#cards");
    this.exitIcone = document.querySelector(".exitIcone");
    //console.log(this.exitIcone)
    this.exitIcone.addEventListener("click",function(){
      $(".hhh").fadeOut(500);
      $("#navbar").fadeIn(100);
      $("#cards").fadeIn(500)

    })
  }
  async displayDtails(d) {
    var box = "";
    box += `
    
    <h2 class="text-white">Details Game</h2>
    <div class="col-4 p-4">
            
            <img src="${d.thumbnail}" class="pt-5 w-100" alt="">
          </div>

          <div class="col-6 pt-5 text-white offse-2">
            <h3></h3>
            <p class="fs-5">Category: <span class="text-bg-info px-2 rounded-2 fs-6">${d.genre}</span></p>
            <p class="fs-5">Platform: <span class="text-bg-info px-2 rounded-2 fs-6"">${d.platform}</span></p>
            <p class="fs-5">Status: <span class="text-bg-info px-2 rounded-2 fs-6"">${d.status}</span></p>
            <p class="fs-6">${d.description.split("").slice(0,1400).join("")}</p>
            <a class="btn btn-hover btn-transparent border-1 border-warning text-white px-4" href="${d.freetogame_profile_url}" >Show Game</a>
          </div>
    `
         
               
                                 

    this.rowDetails.innerHTML = box;
  }
}
