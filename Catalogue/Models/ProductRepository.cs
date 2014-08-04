using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Web;

namespace Catalogue.Models
{
    public class ProductRepository
    {
        private static List<Product> Products = new List<Product>{
            new Product{Id = 1, Name = "XBox One", LastModified = DateTime.Now.AddDays(-2), Price = 599.99m},
            new Product{Id = 2, Name = "PlayStation 4", LastModified = DateTime.Now.AddDays(-5), Price = 499.99m},
            new Product{Id = 3, Name = "Wii U", LastModified = DateTime.Now.AddDays(-10), Price = 299.99m},
        };

        public IEnumerable<Product> GetAll()
        {
            Thread.Sleep(500);//simulate some latency since we're local & fetching everything in memory
            return Products;
        }

        public Product Get(int id)
        {
            Thread.Sleep(500);//simulate some latency since we're local & fetching everything in memory
            return Products.FirstOrDefault(p => p.Id == id);
        }

        public void AddOrUpdate(Product product)
        {
            if (product.Id == 0)//new
            {
                product.Id = Products.Count + 1;
                Products.Add(product);
            }
            var existing = Get(product.Id);
            if (existing != null)//update
            {
                existing.Name = product.Name;
                existing.Price = product.Price;
                existing.LastModified = DateTime.Now;
            }
        }
    }
}