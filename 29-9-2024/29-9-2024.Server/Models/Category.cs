﻿using System;
using System.Collections.Generic;

namespace _29_9_2024.Server.Models;

public partial class Category
{
    public int Id { get; set; }

    public string? CategroyName { get; set; }

    public string? CategroyImage { get; set; }

    public virtual ICollection<Product> Products { get; set; } = new List<Product>();
}
