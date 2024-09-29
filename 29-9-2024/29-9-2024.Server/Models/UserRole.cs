﻿using System;
using System.Collections.Generic;

namespace _29_9_2024.Server.Models;

public partial class UserRole
{
    public int UserId { get; set; }

    public string Role { get; set; } = null!;

    public virtual User User { get; set; } = null!;
}
