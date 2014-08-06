using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Catalogue.Models;

namespace Catalogue.Controllers.Api
{
    public class ProductsController : ApiController
    {
        private ProductRepository _productRepository;
        public ProductsController()
        {
            _productRepository = new ProductRepository();
        }


        // GET request for all the products - ie.  /api/Products
        public IEnumerable<Product> Get()
        {
            return _productRepository.GetAll();
        }

        // GET request for a specific product - ie. /api/Products/1
        public Product Get(int id)
        {
            return _productRepository.Get(id);
        }


        // POST request to add a new product or update an existing one
        // product properties are fetched from the request body
        public Product Post([FromBody]Product value)
        {
            _productRepository.AddOrUpdate(value);
            return value;
        }
    }
}
