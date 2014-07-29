using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Catalogue.Models;

namespace Catalogue.Controllers
{
    public class ProductsController : ApiController
    {
        private static List<Product> Products = new List<Product>{
            new Product{Id = 1, Name = "XBox One", ReleaseDate = DateTime.Now.AddDays(3), Price = 599.99m},
            new Product{Id = 2, Name = "PlayStation 4", ReleaseDate = DateTime.Now.AddDays(3), Price = 499.99m},
            new Product{Id = 3, Name = "Wii U", ReleaseDate = DateTime.Now.AddDays(1), Price = 299.99m},
        };


        public IEnumerable<Product> Get()
        {
            return Products;
        }

        public Product Get(int id)
        {
            return Products.FirstOrDefault(p=>p.Id==id);
        }

        public Product Post([FromBody]Product value)
        {
            if (value.Id == 0)//new
            {
                value.Id = Products.Count;
                Products.Add(value);
                return value;
            }
            var existing = Get(value.Id);
            if (existing != null)//update
            {
                existing.Name = value.Name;
                existing.Price = value.Price;
                existing.ReleaseDate = value.ReleaseDate;
                return existing;
            }
            return null;
        }
    }
}
