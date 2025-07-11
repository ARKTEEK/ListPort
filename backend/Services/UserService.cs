﻿using backend.DataEntity.Auth;
using backend.Entity;
using backend.Enums;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace backend.Services;

public class UserService : IUserService {
  private readonly IConfiguration _configuration;
  private readonly AppDbContext _dbContext;
  private readonly UserManager<User> _userManager;

  public UserService(IConfiguration configuration, UserManager<User> userManager,
    AppDbContext dbContext) {
    _configuration = configuration;
    _userManager = userManager;
    _dbContext = dbContext;
  }

  public async Task SaveGoogleTokens(string userId, GoogleTokenResponse response) {
    Console.WriteLine("------------ REACHED SAVE GOOGLE TOKENS ----------");
    User? user = await _userManager.FindByIdAsync(userId);

    if (user == null) {
      throw new Exception("User not found");
    }

    UserConnection? existingConnection = await _dbContext.UserConnections
      .FirstOrDefaultAsync(c => c.UserId == userId && c.Provider == OAuthProvider.Google);

    if (existingConnection != null) {
      existingConnection.AccessToken = response.AccessToken;
      existingConnection.RefreshToken =
        response.RefreshToken ??
        existingConnection.RefreshToken;
      existingConnection.ExpiresAt = DateTime.UtcNow.AddSeconds(response.ExpiresIn);
      existingConnection.Scope = response.Scope;
      existingConnection.TokenType = response.TokenType;
    } else {
      UserConnection connection = new() {
        UserId = userId,
        Provider = OAuthProvider.Google,
        AccessToken = response.AccessToken,
        RefreshToken = response.RefreshToken,
        ExpiresAt = DateTime.UtcNow.AddSeconds(response.ExpiresIn),
        Scope = response.Scope,
        TokenType = response.TokenType
      };
      _dbContext.UserConnections.Add(connection);
    }

    await _dbContext.SaveChangesAsync();
  }
}