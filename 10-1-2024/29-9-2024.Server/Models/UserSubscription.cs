using System;
using System.Collections.Generic;

namespace _29_9_2024.Server.Models;

public partial class UserSubscription
{
    public int Id { get; set; }

    public int? UserId { get; set; }

    public int? SubscriptionId { get; set; }

    public DateOnly? StartDate { get; set; }

    public DateOnly? EndDate { get; set; }

    public int? SubServiceId { get; set; }

    public virtual Subscription? Subscription { get; set; }

    public virtual Users1? User { get; set; }
}
