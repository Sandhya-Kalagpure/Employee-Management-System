package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.AdminModel;
import com.example.demo.repository.AdminRepository;
import com.example.demo.security.JwtUtil;

@Service
public class AdminService {

    @Autowired
    private AdminRepository adminRepository;

    @Autowired
    private JwtUtil jwtUtil;

    public String login(String adminName, String adminPassword) {
       // System.out.println("Admin Name: " + adminName);
       // System.out.println("Admin Password: " + adminPassword);

        AdminModel admin = adminRepository.findByAdminName(adminName);
        if (admin != null && admin.getAdminPassword().equals(adminPassword)) {
            System.out.println("Login Successful");

            // ✅ Generate JWT token after successful login
            String token = jwtUtil.generateToken(adminName);
           // System.out.println("Generated Token: " + token);

            return token;
        } 

        System.out.println("Invalid credentials");
        return null;
    }
}
