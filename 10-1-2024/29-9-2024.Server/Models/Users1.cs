﻿using System;
using System.Collections.Generic;

namespace _29_9_2024.Server.Models;

public partial class Users1
{
    public int UserId { get; set; }

    public string UserName { get; set; } = null!;

    public string PasswordHash { get; set; } = null!;

    public string Email { get; set; } = null!;

    public string? Phone { get; set; }

    public string? Address { get; set; }

    public bool? IsAdmin { get; set; }

    public bool? IsSupplier { get; set; }

    public DateTime? CreatedAt { get; set; }

    public virtual ICollection<UserSubscription> UserSubscriptions { get; set; } = new List<UserSubscription>();
}
