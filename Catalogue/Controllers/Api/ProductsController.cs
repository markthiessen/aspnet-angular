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

        public IEnumerable<Product> Get()
        {
            return _productRepository.GetAll();
        }

        public Product Get(int id)
        {
            return _productRepository.Get(id);
        }

        public Product Post([FromBody]Product value)
        {
            _productRepository.AddOrUpdate(value);
            return value;
        }
    }
}
