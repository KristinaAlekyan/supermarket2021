using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Supermarket.Api.Dtos
{
    public class ProductToReturnDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal? Price { get; set; }
        public int? Code { get; set; }
        public string Supplier { get; set; }
        public string ImageUrl { get; set; }
        public string Department { get; set; }
        public int? Amount { get; set; }
    }
}
