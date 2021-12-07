﻿using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Supermarket.Api.Dtos;
using Supermarket.Api.Errors;
using Supermarket.Dal.Services;
using Supermarket.Models.Entities;
using Supermarket.Models.Entities.Identity;
using Supermarket.Models.Interfaces;
using Supermarket.Models.Specifications;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace Supermarket.Api.Controllers
{
    public class AccountController : BaseApiController
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly SignInManager<AppUser> _signInManager;
        private readonly ITokenService _tokenService;
        private readonly IGenericRepository<User> _userRepo;
        private readonly IMapper _mapper;
        private readonly IRegistrationInterface _registrationService;

        public AccountController(UserManager<AppUser> userManager, SignInManager<AppUser> signInManager,
            ITokenService tokenService, IGenericRepository<User> userRepo, IMapper mapper, IRegistrationInterface registrationService)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _tokenService = tokenService;
            _userRepo = userRepo;
            _mapper = mapper;
            _registrationService = registrationService;
        }

        [HttpGet]
        [Authorize]
        public async Task<ActionResult<UserDto>> GetCurrentUser()// FOR DEVELOPMENT PURPOSES
        {
            var email = HttpContext.User?.Claims?.FirstOrDefault(x => x.Type == ClaimTypes.Email)?.Value;

            var user = await _userManager.FindByEmailAsync(email);

            return new UserDto
            {
                Email = user.Email,
                Token = await _tokenService.CreateToken(user),
                Username = user.UserName
            };
        }

        [HttpGet("overview")]
        [Authorize]
        public async Task<ActionResult<UserOverviewDto>> GetOverview()
        {
            var email = HttpContext.User?.Claims?.FirstOrDefault(x => x.Type == ClaimTypes.Email)?.Value;
            if (email != null)
            {
                var spec = new UserOverviewSpecification(email);
                var user = await _userRepo.GetEntityWithSpec(spec);
                return Ok(_mapper.Map<User, UserOverviewDto>(user));
            }
            return BadRequest(new ApiResponse(400));
        }

        [HttpPost("login")]
        public async Task<ActionResult<UserDto>> Login(LoginDto loginDto)
        {
            var user = await _userManager.FindByEmailAsync(loginDto.Email);
            if (user == null)
            {
                return Unauthorized(new ApiResponse(401));
            }
            var result = await _signInManager.CheckPasswordSignInAsync(user, loginDto.Password, false);
            if (!result.Succeeded)
            {
                return Unauthorized(new ApiResponse(401));
            }
            return new UserDto
            {
                Email = user.Email,
                Token =  await _tokenService.CreateToken(user),
                Username = user.UserName,
            };
        }

        [HttpPost("register")]
        public async Task<ActionResult<UserDto>> Register(RegisterDto registerDto)
        {
            var user = new AppUser
            {
                UserName = registerDto.Username,
                Email = registerDto.Email,
            };

            if (!ModelState.IsValid)
            {
                return BadRequest(new ApiResponse(400));
            }

            var existingUser = await _userManager.FindByEmailAsync(user.Email);
            if (existingUser != null)
            {
                return new BadRequestObjectResult(new ValidationErrorResponse{ Errors = new[] { "An account with this email is already in use" } });
            }
            var result = await _userManager.CreateAsync(user, registerDto.Password);
            if (!result.Succeeded)
            {
                return BadRequest(new ApiResponse(400));
            }

            var roleResult = await _userManager.AddToRoleAsync(user, "Client");
            if (!roleResult.Succeeded)
            {
                return BadRequest(new ApiResponse(400));
            }

            var location = _mapper.Map<LocationDto, AddressLocation>(registerDto.Location);
            var client = await _registrationService.Register(registerDto.Email, registerDto.Phonenumber, registerDto.Username,
                registerDto.Firstname, registerDto.Lastname, "Client", location);
            if (client == null)
            {
                return BadRequest(new ApiResponse(400, "Something went wrong"));
            }
            return new UserDto
            {
                Username = registerDto.Username,
                Token = await _tokenService.CreateToken(user),
                Email = registerDto.Email
            };
        }

        [Authorize(Roles = "Master")]
        [HttpPost("new-member")]
        public async Task<ActionResult<UserDto>> RegisterWorker(RegisterMemberDto registerDto)
        {
            var user = new AppUser
            {
                UserName = registerDto.Username,
                Email = registerDto.Email,
            };

            if (!ModelState.IsValid || (new string[] {"Master", "Warehouse Manager", "Warehouse Worker" }.Contains(registerDto.Role)))
            {
                return BadRequest(new ApiResponse(400));
            }

            var existingUser = await _userManager.FindByEmailAsync(user.Email);
            if (existingUser != null)
            {
                return new BadRequestObjectResult(new ValidationErrorResponse { Errors = new[] { "An account with this email is already in use" } });
            }
            var result = await _userManager.CreateAsync(user, registerDto.Password);
            if (!result.Succeeded)
            {
                return BadRequest(new ApiResponse(400));
            }

            var roleResult = await _userManager.AddToRoleAsync(user, registerDto.Role);
            if (!roleResult.Succeeded)
            {
                return BadRequest(new ApiResponse(400));
            }

            var location = _mapper.Map<LocationDto, AddressLocation>(registerDto.Location);
            var client = await _registrationService.Register(registerDto.Email, registerDto.Phonenumber, registerDto.Username,
                registerDto.Firstname, registerDto.Lastname, registerDto.Role, location, registerDto.StartingSalary);
            if (client == null)
            {
                return BadRequest(new ApiResponse(400, "Something went wrong"));
            }
            return new UserDto
            {
                Username = registerDto.Username,
                Token = await _tokenService.CreateToken(user),
                Email = registerDto.Email
            };
        }
    }
}
