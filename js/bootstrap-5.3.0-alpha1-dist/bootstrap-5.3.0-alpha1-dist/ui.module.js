import { mainjs } from "./base.module.js";
import { Details } from "./details.module.js";

export class UI {
  constructor(h) {
    this.row = document.querySelector(".row");
    this.card = document.querySelectorAll(".card");
    this.links = document.querySelectorAll(".nav-link");
    this.activeLink = document.querySelector(".nav-link.active ");
    
    this.linksCate();

    //console.log(this.links)
    this.linksCate();
    this.card.forEach(function (ele, index) {
      ele.addEventListener("click", async function (e) {
        $("#cards").fadeOut(500);
       // $("#detailsSec").fadein(500);
        let mainInstance = new mainjs();
        let mainRes = await mainInstance.cateUrl("Shooter");
        let id = mainRes[index].id;
        let mainRes2 = await mainInstance.detailUrl(id);
        let detail = new Details();
        $("#navbar").fadeOut(100);
        detail.displayDtails(mainRes2);
      });
    });
  }
  display(h) {
    var box = "";
    for (var i = 0; i < h.length; i++) {
      box += `
          <div class="col-3 p-3  ">
          <div class="card bg-gray col-hover" style="width: 18rem;">
              <img src="${h[i].thumbnail}" class="card-img-top p-3" alt="...">
              <div class="card-body">
               <div class="flexitem d-flex justify-content-between align-items-center py-2">
                                  <h5 class="text-white fs-6" >${h[i].title}</h5>
                                <button class="btn bg-nav px-2 py-0 text-white">Free</button>
                                </div>
                <p class="card-text text-gray text-center">${h[i].short_description.split("").slice(0,60).join("")}</p>
              </div>
              
              <div class="card-body border-top border-dark d-flex justify-content-between">
                <a href="#" class="card-link text-decoration-none text-white bg-graySub px-2 rounded-3">${h[i].genre}</a>
                <a href="#" class="card-link text-decoration-none text-white bg-graySub px-2 rounded-3 ">${h[i].platform}</a>
              </div>
            </div>
          
      </div>`;
      this.row.innerHTML = box;
    }
  }
  linksCate() {
   
    for (var i = 0; i < 6; i++) {
      this.links[i].addEventListener("click", async function (event) {
        //this.activeLink.classList.remove("active");
        // event.target.classList.add("active");
        this.links = event.target.dataset.cate;
        let main = new mainjs();
        let cate = await main.cateUrl(this.links);
        
        let ui = new UI(cate);
        ui.display(cate);
      });
    }
  }
}
let main = new mainjs();


let cate = await main.cateUrl("Shooter");
let ui = new UI(cate);
ui.display(cate);
