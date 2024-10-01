using System;
using System.Collections.Generic;

namespace _29_9_2024.Server.Models;

public partial class Product
{
    public int Id { get; set; }

    public int? CategoryId { get; set; }

    public string? ProductName { get; set; }

    public string? Description { get; set; }

    public string? ProductImage { get; set; }

    public decimal? Price { get; set; }

    public virtual ICollection<CartItem> CartItems { get; set; } = new List<CartItem>();

    public virtual Category? Category { get; set; }
}
