package com.example.demo.config;

import com.example.demo.security.JwtFilter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http, JwtFilter jwtFilter) throws Exception {
        return http
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/api/v1/admin/login").permitAll() // Allow admin login without authentication
                        .requestMatchers("/api/v1/employees/**").authenticated() // Protect employee endpoints
                        .anyRequest().permitAll() // Allow other requests
                )
                .addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class) // ✅ Add JWT Filter
                .csrf(csrf -> csrf.disable()) // ✅ Disable CSRF
                .build();
    }
}
