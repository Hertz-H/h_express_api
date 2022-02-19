var express = require('express');
var router = express.Router();
const { default: axios } = require("axios");
const { json } = require("express/lib/response");
const res = require("express/lib/response");
const app = express();
/* GET home page. */

app.listen(3001);
app.set("view engine", "ejs");

console.log("start Server");
app.get("/", (request, response, next) => {
  axios
    .get("https://dummyjson.com/products?limit=10")
    .then((res) => {
      var data = res.data.products;
      let name = "Afaf";
      console.log("in axi");
      console.log(data);
      response.render("product", { data });
      response.end();
    })
    .catch((err) => {
      console.error("Error: ", err.message);
    });
});

app.get("/products", (request, response, next) => {
  axios
    .get("https://dummyjson.com/products?limit=10")
    .then((res) => {
      var data = res.data.products;
      let name = "Afaf";
      console.log("in axi");
      console.log(data);
      response.render("product", { data });
      response.end();
    })
    .catch((err) => {
      console.error("Error: ", err.message);
    });
});

app.get("/search", (request, response, next) => {  //iPhone 9
  console.log(`products/search?q=${request.query.q}`);
  axios
    .get(`https://dummyjson.com/products/search?q=${request.query.q}`)
    .then((res) => {
      var res_data = res.data.products;
      console.log("in axi");
      console.log(res_data)
      ;
      response.render("search_product", { data: res_data });
      response.end();
    })
    .catch((err) => {
      console.error("Error: ", err.message);
    });
});
app.get("/products/category/:cat", (request, response, next) => {
  axios
    .get(
      `https://dummyjson.com/products/category/${request.params.cat}?limit=10`
    )
    .then((res) => {
      var res_data = res.data.products;
      console.log("in axi");
      console.log(res_data);
      response.render("categorized_product", { data: res_data });
      response.end();
    })
    .catch((err) => {
      console.error("Error: ", err.message);
    });
});

app.get("/products/categories", async (request, response, next) => {
//   let { data } = await axios.get("https://dummyjson.com/products/categories");

//   response.render("categories", { data: data.slice(0, 100) });
//   console.log(data);
  axios.get("https://dummyjson.com/products/categories").then(res=>{
      var res_data=res.data;
      console.log("in axi");
      console.log(res_data);
      response.render('categories',{data:res_data.slice(0, 10)});
      response.end();
  }).catch(err=>{
      console.error('Error: ', err.message);
  })
});

app.get("/products/:id", (request, response, next) => {
  axios
    .get(`https://dummyjson.com/products/${request.params.id}`)
    .then((res) => {
      var res_data = res.data;
      console.log("in axi");
      console.log(res_data);
      response.render("selected_product", { data: res_data });
      response.end();
    })
    .catch((err) => {
      console.error("Error: ", err.message);
    });
});




module.exports = router;
