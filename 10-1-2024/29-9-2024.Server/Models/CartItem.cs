using System;
using System.Collections.Generic;

namespace _29_9_2024.Server.Models;

public partial class CartItem
{
    public int Id { get; set; }

    public int? CartId { get; set; }

    public int? ProductId { get; set; }

    public int? Quantity { get; set; }

    public virtual Cart? Cart { get; set; }

    public virtual Product? Product { get; set; }
}
