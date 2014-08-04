using Catalogue.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Web;
using System.Web.Mvc;

namespace Catalogue.Controllers
{
    public class ProductsController : Controller
    {
        // GET: Products
        public ActionResult Index()
        {
            return View(new ProductRepository().GetAll());
        }

        public ActionResult Edit(int id)
        {
            var product = new ProductRepository().Get(id);
            if(product==null)
                return RedirectToAction("Index");

            return View(product);
        }

        [HttpPost]
        public ActionResult Edit(Product product)
        {
            if (ModelState.IsValid)
            {
                new ProductRepository().AddOrUpdate(product);
                return RedirectToAction("Index");
            }
            return View(product);
        }

        public ActionResult New()
        {
            return View();
        }

        [HttpPost]
        public ActionResult New(Product product)
        {
            if (ModelState.IsValid)
            {
                new ProductRepository().AddOrUpdate(product);
                return new RedirectResult("Index");
            }
            return View(product);
        }
    }
}