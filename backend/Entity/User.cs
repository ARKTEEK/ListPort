﻿using Microsoft.AspNetCore.Identity;

namespace backend.Entity;

public class User : IdentityUser {
  public ICollection<UserConnection> Connections { get; set; }
}