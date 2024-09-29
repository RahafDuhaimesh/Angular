using System;
using System.Collections.Generic;

namespace _29_9_2024.Server.Models;

public partial class Order
{
    public int Id { get; set; }

    public int? UserId { get; set; }

    public DateOnly? OrderDate { get; set; }

    public virtual User? User { get; set; }
}
